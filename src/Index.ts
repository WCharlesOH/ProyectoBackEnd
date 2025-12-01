import express, {Request, Response, NextFunction} from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import cors from "cors"
import { PrismaClient } from "./generated/prisma"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000
const prisma = new PrismaClient()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : true }))
app.use(cors())

// ============================================
// CONFIGURACIÓN DE VDO. NINJA
// ============================================

const VDO_NINJA_CONFIG = {
  baseUrl: 'https://vdo.ninja',
  defaultRoomId: process.env.VDO_NINJA_ROOM_ID || 'sala-default-stream',
  defaultPassword: process.env.VDO_NINJA_PASSWORD || '',
};

// ============================================
// SISTEMA DE GESTIÓN DE STREAMS ACTIVOS
// ============================================

interface LiveStream {
  streamerName: string;
  roomId: string;
  broadcasterUrl: string;
  viewerUrl: string;
  isLive: boolean;
  startedAt: Date;
  lastActivity: Date;
  title?: string;
  category?: string;
}

// Mapa de streams activos (en memoria)
const activeStreams = new Map<string, LiveStream>();

// Función para generar roomId único y persistente por usuario
function generateRoomId(streamerName: string): string {
  const normalized = streamerName.toLowerCase().replace(/\s+/g, '-');
  return `stream-${normalized}`;
}

// Función para construir URLs de VDO. Ninja
function buildVDOUrls(roomId: string, password?: string) {
  // URL para el broadcaster (streamer)
  let broadcasterUrl = `${VDO_NINJA_CONFIG.baseUrl}/? push=${roomId}`;
  const broadcasterOptions = [
    'autostart',
    'codec=h264',
    'quality=2',
    'stereo=1',
    'screenshare',
    'videoonly=0',
  ];
  broadcasterUrl += '&' + broadcasterOptions.join('&');
  
  if (password || VDO_NINJA_CONFIG.defaultPassword) {
    broadcasterUrl += `&password=${password || VDO_NINJA_CONFIG.defaultPassword}`;
  }

  // URL para los viewers (espectadores)
  let viewerUrl = `${VDO_NINJA_CONFIG.baseUrl}/?view=${roomId}&scene`;
  const viewerOptions = [
    'autoplay',
    'cleanoutput',
    'transparent=0',
    'codec=h264',
    'quality=2',
    'cover',
  ];
  viewerUrl += '&' + viewerOptions.join('&');
  
  if (password || VDO_NINJA_CONFIG. defaultPassword) {
    viewerUrl += `&password=${password || VDO_NINJA_CONFIG.defaultPassword}`;
  }

  return { broadcasterUrl, viewerUrl };
}

// ============================================
// ENDPOINTS NUEVOS DE GESTIÓN DE STREAMS
// ============================================



// CREAR/OBTENER sala para un streamer
app.post("/api/stream/room", (req: Request, res: Response) => {
  console.log("📥 [Stream] Request recibido en /api/stream/room");
  
  try {
    const { streamerName, password } = req.body;
    
    if (!streamerName) {
      return res.status(400).json({ error: 'streamerName es requerido' });
    }

    const roomId = generateRoomId(streamerName);
    const { broadcasterUrl, viewerUrl } = buildVDOUrls(roomId, password);

    let stream = activeStreams.get(streamerName);
    
    if (!stream) {
      stream = {
        streamerName,
        roomId,
        broadcasterUrl,
        viewerUrl,
        isLive: false,
        startedAt: new Date(),
        lastActivity: new Date(),
      };
      activeStreams. set(streamerName, stream);
    } else {
      stream.lastActivity = new Date();
    }

    console.log(`✅ [Stream] Sala lista para ${streamerName}: ${roomId}`);

    res.json({
      roomId: stream.roomId,
      broadcasterUrl: stream.broadcasterUrl,
      viewerUrl: stream.viewerUrl,
      isLive: stream.isLive,
      streamerName: stream.streamerName,
    });
  } catch (error) {
    console.error("❌ [Stream] Error en /api/stream/room:", error);
    res.status(500).json({ error: 'Error al crear/obtener sala' });
  }
});

// INICIAR transmisión
app.post("/api/stream/start", (req: Request, res: Response) => {
  console.log("📥 [Stream] Request recibido en /api/stream/start");
  
  try {
    const { streamerName, title, category } = req.body;
    
    if (!streamerName) {
      return res. status(400).json({ error: 'streamerName es requerido' });
    }

    const roomId = generateRoomId(streamerName);
    let stream = activeStreams.get(streamerName);

    if (!stream) {
      const { broadcasterUrl, viewerUrl } = buildVDOUrls(roomId);
      stream = {
        streamerName,
        roomId,
        broadcasterUrl,
        viewerUrl,
        isLive: true,
        startedAt: new Date(),
        lastActivity: new Date(),
        title,
        category,
      };
      activeStreams.set(streamerName, stream);
    } else {
      stream.isLive = true;
      stream.startedAt = new Date();
      stream.lastActivity = new Date();
      stream.title = title;
      stream.category = category;
    }

    console.log(`✅ [Stream] ${streamerName} está ahora EN VIVO`);

    res.json({
      success: true,
      message: 'Stream iniciado',
      stream: {
        roomId: stream. roomId,
        broadcasterUrl: stream.broadcasterUrl,
        viewerUrl: stream.viewerUrl,
        isLive: stream.isLive,
        streamerName: stream.streamerName,
      },
    });
  } catch (error) {
    console. error("❌ [Stream] Error en /api/stream/start:", error);
    res.status(500).json({ error: 'Error al iniciar stream' });
  }
});

// DETENER transmisión
app. post("/api/stream/stop", (req: Request, res: Response) => {
  console.log("📥 [Stream] Request recibido en /api/stream/stop");
  
  try {
    const { streamerName } = req.body;
    
    if (!streamerName) {
      return res.status(400).json({ error: 'streamerName es requerido' });
    }

    const stream = activeStreams.get(streamerName);

    if (stream) {
      stream.isLive = false;
      stream.lastActivity = new Date();
      console.log(`✅ [Stream] ${streamerName} detuvo su transmisión`);
    }

    res.json({
      success: true,
      message: 'Stream detenido',
    });
  } catch (error) {
    console.error("❌ [Stream] Error en /api/stream/stop:", error);
    res.status(500). json({ error: 'Error al detener stream' });
  }
});

// OBTENER estado de un stream específico
app.get("/api/stream/status/:streamerName", (req: Request, res: Response) => {
  console.log("📥 [Stream] Request recibido en /api/stream/status");
  
  try {
    const { streamerName } = req.params;
    
    if (!streamerName) {
      return res.status(400).json({ error: 'streamerName es requerido' });
    }
    
    const stream = activeStreams.get(streamerName);

    if (! stream) {
      return res. json({
        exists: false,
        isLive: false,
        message: 'Stream no encontrado',
      });
    }

    res.json({
      exists: true,
      isLive: stream.isLive,
      roomId: stream.roomId,
      viewerUrl: stream.viewerUrl,
      streamerName: stream.streamerName,
      title: stream.title,
      category: stream.category,
      startedAt: stream.startedAt,
    });
  } catch (error) {
    console.error("❌ [Stream] Error en /api/stream/status:", error);
    res.status(500). json({ error: 'Error al obtener estado del stream' });
  }
});

// LISTAR todos los streams activos
app.get("/api/streams/live", (req: Request, res: Response) => {
  console. log("📥 [Stream] Request recibido en /api/streams/live");
  
  try {
    const liveStreams = Array.from(activeStreams.values())
      .filter(stream => stream.isLive)
      . map(stream => ({
        streamerName: stream.streamerName,
        roomId: stream. roomId,
        viewerUrl: stream.viewerUrl,
        title: stream.title,
        category: stream.category,
        startedAt: stream.startedAt,
      }));

    res.json({
      count: liveStreams.length,
      streams: liveStreams,
    });
  } catch (error) {
    console. error("❌ [Stream] Error en /api/streams/live:", error);
    res.status(500).json({ error: 'Error al listar streams' });
  }
});

// ============================================
// ENDPOINTS LEGACY DE VDO.NINJA
// ============================================

// ENDPOINT: Obtener URL para ver stream
app.get("/api/live-url", (req: Request, res: Response) => {
  console.log("📥 [VDO.Ninja] Request recibido en /api/live-url");
  
  try {
    const roomId = VDO_NINJA_CONFIG. defaultRoomId;
    const { broadcasterUrl, viewerUrl } = buildVDOUrls(roomId);

    console.log("✅ [VDO. Ninja] Respuesta enviada correctamente");
    
    res.json({
      url: viewerUrl,
      roomId: roomId,
      broadcaster: broadcasterUrl,
      provider: 'VDO.Ninja'
    });
  } catch (error) {
    console.error("❌ [VDO.Ninja] Error en /api/live-url:", error);
    res.status(500).json({ error: 'Error al generar URL de transmisión' });
  }
});

// ENDPOINT: Obtener URL para streamer
app.get("/api/live-broadcaster", (req: Request, res: Response) => {
  console.log("📥 [VDO.Ninja] Request recibido en /api/live-broadcaster");
  
  try {
    const roomId = VDO_NINJA_CONFIG.defaultRoomId;
    const { broadcasterUrl } = buildVDOUrls(roomId);

    console.log("✅ [VDO.Ninja] Respuesta enviada correctamente");

    res.json({
      broadcasterUrl,
      roomId: roomId,
      instructions: 'Abre esta URL en tu navegador para comenzar a transmitir'
    });
  } catch (error) {
    console.error("❌ [VDO. Ninja] Error en /api/live-broadcaster:", error);
    res.status(500).json({ error: 'Error al generar URL del broadcaster' });
  }
});

// ENDPOINT: Crear sala PERSONALIZADA por usuario/streamer (LEGACY)
app.post("/api/live-room/create", async (req: Request, res: Response) => {
  console.log("📥 [VDO.Ninja] Request recibido en /api/live-room/create");
  
  try {
    const { ID_Usuario, NombreUsuario } = req.body;
    
    if (!ID_Usuario || ! NombreUsuario) {
      return res.status(400). json({ error: 'ID_Usuario y NombreUsuario son requeridos' });
    }

    const roomId = `stream-${NombreUsuario}-${ID_Usuario}`. toLowerCase(). replace(/\s+/g, '-');
    const password = process.env.VDO_NINJA_PASSWORD || '';

    let viewUrl = `${VDO_NINJA_CONFIG.baseUrl}/? view=${roomId}&scene&autoplay&cleanoutput&transparent&codec=h264&quality=2`;
    let broadcasterUrl = `${VDO_NINJA_CONFIG.baseUrl}/?push=${roomId}&autostart&codec=h264&quality=2&stereo`;
    
    if (password) {
      viewUrl += `&password=${password}`;
      broadcasterUrl += `&password=${password}`;
    }

    console.log("✅ [VDO.Ninja] Sala personalizada creada:", roomId);

    res.json({
      roomId,
      viewUrl,
      broadcasterUrl,
      streamer: NombreUsuario,
      status: 'Sala creada exitosamente'
    });
  } catch (error) {
    console.error("❌ [VDO. Ninja] Error creando sala:", error);
    res.status(500).json({ error: 'Error al crear sala de transmisión' });
  }
});

// ===========================================
// ENDPOINTS DE ESTADISTICAS
// ===========================================
app.post("/Contar_Espectadores_Actuales", async (req: Request, resp: Response) => {
    try {
      const { ID_Streamer } = req. body;
      
      if (!ID_Streamer) {
        return resp.status(400).json({ error: "ID_Streamer es requerido" });
      }

      // Contar viewers que están viendo actualmente (Viendo = true)
      const espectadoresActuales = await prisma.chatStreamer.count({
        where: {
          ID_Streamer: Number(ID_Streamer),
          Viendo: true
        }
      });

      resp.status(200).json({ 
        ID_Streamer: Number(ID_Streamer),
        espectadores: espectadoresActuales 
      });
    } catch (err) {
      console.error(err);
      resp.status(400).json({ error: "Error contando espectadores actuales" });
    }
});

// ENDPOINT: Obtener número total de seguidores de un streamer
app.post("/Contar_Seguidores_Totales", async (req: Request, resp: Response) => {
    try {
      const { ID_Streamer } = req.body;
      
      if (!ID_Streamer) {
        return resp.status(400).json({ error: "ID_Streamer es requerido" });
      }

      // Contar suscripciones donde el usuario es el streamer
      const seguidoresTotales = await prisma. suscripcion.count({
        where: {
          ID_Streamer: Number(ID_Streamer)
        }
      });

      resp.status(200).json({ 
        ID_Streamer: Number(ID_Streamer),
        seguidores: seguidoresTotales 
      });
    } catch (err) {
      console.error(err);
      resp.status(400).json({ error: "Error contando seguidores totales" });
    }
});

// ENDPOINT: Obtener estadísticas completas de un streamer
app. post("/Estadisticas_Streamer", async (req: Request, resp: Response) => {
    try {
      const { ID_Streamer } = req.body;
      
      if (!ID_Streamer) {
        return resp. status(400).json({ error: "ID_Streamer es requerido" });
      }

      // Obtener datos del usuario
      const datosStreamer = await prisma.usuario.findUnique({
        where: {
          ID: Number(ID_Streamer)
        },
        select: {
          ID: true,
          NombreUsuario: true,
          ImagenPerfil: true,
          EnVivo: true,
          Monedas: true,
          HorasTransmision: true,
          NivelStreams: true
        }
      });

      if (!datosStreamer) {
        return resp.status(404).json({ error: "Streamer no encontrado" });
      }

      // Contar espectadores actuales
      const espectadoresActuales = await prisma.chatStreamer.count({
        where: {
          ID_Streamer: Number(ID_Streamer),
          Viendo: true
        }
      });

      // Contar seguidores totales
      const seguidoresTotales = await prisma.suscripcion.count({
        where: {
          ID_Streamer: Number(ID_Streamer)
        }
      });

      // Contar total de viewers que han chateado
      const totalViewers = await prisma.chatStreamer.count({
        where: {
          ID_Streamer: Number(ID_Streamer)
        }
      });

      resp.status(200).json({
        streamer: datosStreamer,
        estadisticas: {
          espectadoresActuales,
          seguidoresTotales,
          totalViewers,
          enVivo: datosStreamer. EnVivo || false
        }
      });
    } catch (err) {
      console.error(err);
      resp.status(400).json({ error: "Error obteniendo estadísticas del streamer" });
    }
});

// ENDPOINT: Obtener lista de espectadores actuales (con detalles)
app.post("/Lista_Espectadores_Actuales", async (req: Request, resp: Response) => {
    try {
      const { ID_Streamer } = req.body;
      
      if (!ID_Streamer) {
        return resp.status(400).json({ error: "ID_Streamer es requerido" });
      }

      // Obtener viewers que están viendo actualmente
      const espectadores = await prisma.chatStreamer.findMany({
        where: {
          ID_Streamer: Number(ID_Streamer),
          Viendo: true
        },
        select: {
          ID_Viewer: true,
          NivelViewer: true,
          Habilitado: true,
          viewerC: {
            select: {
              NombreUsuario: true,
              ImagenPerfil: true,
              NivelStreams: true
            }
          }
        }
      });

      const listaFormateada = espectadores.map((e: typeof espectadores[0]) => ({
        ID_Viewer: e.ID_Viewer,
        NombreUsuario: e.viewerC?. NombreUsuario || "Usuario",
        ImagenPerfil: e.viewerC?.ImagenPerfil || "",
        NivelViewer: e.NivelViewer || 1,
        NivelStreams: e.viewerC?.NivelStreams || 0,
        Habilitado: e.Habilitado
      }));

      resp.status(200).json({
        ID_Streamer: Number(ID_Streamer),
        totalEspectadores: listaFormateada.length,
        espectadores: listaFormateada
      });
    } catch (err) {
      console.error(err);
      resp.status(400).json({ error: "Error obteniendo lista de espectadores" });
    }
});

// ENDPOINT: Obtener top streamers por espectadores actuales
app.get("/Top_Streamers_Por_Espectadores", async (req: Request, resp: Response) => {
    try {
      // Obtener streamers en vivo
      const streamersEnVivo = await prisma.usuario.findMany({
        where: {
          EnVivo: true
        },
        select: {
          ID: true,
          NombreUsuario: true,
          ImagenPerfil: true,
          NivelStreams: true,
          streamerCHat: {
            where: {
              Viendo: true
            },
            select: {
              ID_Viewer: true
            }
          }
        }
      });

      // Formatear y ordenar por cantidad de espectadores
      const ranking = streamersEnVivo
        .map((streamer: typeof streamersEnVivo[0]) => ({
          ID: streamer.ID,
          NombreUsuario: streamer. NombreUsuario,
          ImagenPerfil: streamer.ImagenPerfil,
          NivelStreams: streamer.NivelStreams,
          espectadoresActuales: streamer. streamerCHat?. length || 0
        }))
        .sort((a: { espectadoresActuales: number }, b: { espectadoresActuales: number }) => b.espectadoresActuales - a.espectadoresActuales);

      resp.status(200).json({
        total: ranking.length,
        streamers: ranking
      });
    } catch (err) {
      console. error(err);
      resp. status(400).json({ error: "Error obteniendo top streamers" });
    }
});


// ============================================
// ENDPOINTS DE USUARIOS
// ============================================




app.post("/Registrar_Usuario", async (req : Request, resp : Response) => {
    try {
      const {
        NombreUsuario,
        Contraseña,
        email,
        ImagenPerfil,
      } = req.body

      const usuario = await prisma.usuario.create({
      data: {
        NombreUsuario: NombreUsuario,
        Contraseña: Contraseña,
        email: email,
        ImagenPerfil: ImagenPerfil,
        HorasTransmision: Number(0),
        Monedas: Number(0),
        NivelStreams: Number(0),
        Puntos: Number(0)
      }
    })

    resp.status(200).json(usuario.ID)
  } catch (err) {
    console.error(err)
    resp.status(400).json({ error: "Error creando usuario" })
  }
})

app.post("/Validar_Usuario", async (req : Request, resp : Response) => {
    try {
      const { NombreUsuario, Contraseña } = req. body
      const usuario = await prisma.usuario. findFirst({
        where: {
          NombreUsuario, Contraseña
        },
        select: {
          ID: true,
          NombreUsuario: true,
          HorasTransmision: true,
          ImagenPerfil: true,
          Monedas: true,
          NivelStreams: true,
          Puntos: true
        }
      })
      resp.status(200).json(usuario)
    } catch (err) {
    console.error(err)
    resp.status(400).json({ error: "Error logeando usuario" })
  }
})

app.post("/Suscrito", async (req: Request, resp: Response) => {
    try {
      const { ID_Usuario } = req.body
      const suscripciones = await prisma.suscripcion.findMany({
        where: {
          ID_Viewer: Number(ID_Usuario)
        },
        include: {
          streamer: {
            select: {
              NombreUsuario: true,
              NivelStreams: true,
              ImagenPerfil: true,
              EnVivo: true,
            }
          }
        }
      })
      resp.status(200).json(suscripciones)
    } catch (err) {
    console.error(err)
    resp.status(400).json({ error: "Error encontrando suscripciones usuario" })
    }
})

app.post("/SuscripcioneMias", async (req: Request, resp: Response) => {
    try{
      const { ID_Streamer } = req.body
      const suscripciones = await prisma.chatStreamer.findMany({
        where:{
          ID_Streamer: Number(ID_Streamer)
        },
        select:{
          Habilitado: true,
          NivelViewer: true,
          viewerC: {
            select: {
              NombreUsuario: true,
              ImagenPerfil: true
            }
          }
        }
      })
      resp.status(200).json(suscripciones)
    } catch (err){
      console.error(err)
      resp.status(400).json({ error: "Error encontrando suscricpciones" })
    }
})

app.get("/TODOS", async (req: Request, resp: Response) => {
    try {
      const TODOS = await prisma.suscripcion.findMany({
        select:{
          ID_Streamer: true
        }
      })
      resp.status(200).json(TODOS)
    } catch (err){
      console.error(err)
      resp.status(400). json({ error: "Error obteniendo cantidad de suscriptores" })
    }
})

app.post("/Crear_Suscripcion", async (req : Request, resp : Response) => {
    try {
      const { ID_Streamer, ID_Viewer } = req.body
      const suscricpcion = await prisma.suscripcion.create({
        data: {
          ID_Streamer: Number(ID_Streamer),
          ID_Viewer: Number(ID_Viewer)
        }
      })
      resp. status(200).json(suscricpcion)
    } catch (err){
      console.error(err)
      resp.status(400). json({ error: "Error creando suscripción" })
    }
})

app.post("/Eliminar_Suscripcion", async (req : Request, resp : Response) => {
    try {
      const { ID_Streamer, ID_Viewer } = req.body
      const Suscripcion = await prisma.suscripcion.delete({
        where: {
          ID_Streamer_ID_Viewer: {
            ID_Streamer: Number(ID_Streamer),
            ID_Viewer: Number(ID_Viewer)
          }
        }
      })
      resp.status(200).json(Suscripcion)
    } catch (err){
      console.error(err)
      resp.status(400).json({ error: "Error eliminando suscripción" })
    }
})

app. post("/Crear_ChatStreamer", async (req : Request, resp : Response) => {
    try {
      const { ID_Streamer, ID_Viewer } = req.body
      const chatStreamer =  await prisma.chatStreamer.create({
        data: {
          ID_Streamer: Number(ID_Streamer),
          ID_Viewer: Number(ID_Viewer),
          Viendo: true,
        },
        include: {
          streamerC: {
            select: {
              EnVivo: true
            }
          }
        }
      })
      resp.status(200).json(chatStreamer)
    } catch (err){
      console.error(err)
      resp.status(400). json({ error: "Error creando chat streamer" })
    }
})

app.post("/ObtenerDatosUsuario", async (req : Request, resp : Response) => {
    try {
      const { ID_Usuario } = req.body
      const datosUsuario = await prisma. usuario.findUnique({
        where: {
          ID: Number(ID_Usuario)
        },
        select: {
          ID: true,
          NombreUsuario: true,
          HorasTransmision: true,
          ImagenPerfil: true,
          Monedas: true,
          NivelStreams: true,
          Puntos: true
        }
      })
      resp.status(200).json(datosUsuario)
    } catch (err){
      console.error(err)
      resp.status(400). json({ error: "Error obteniendo datos de usuario" })
    }
})

app.post("/ObtenerDatosUsuarioNombre", async (req : Request, resp : Response) => {
    try {
      const { NombreUsuario } = req.body
      const datosUsuario = await prisma. usuario.findUnique({
        where: {
          NombreUsuario: NombreUsuario
        },
        select: {
          ID: true,
          NombreUsuario: true,
          HorasTransmision: true,
          ImagenPerfil: true,
          Monedas: true,
          NivelStreams: true,
          Puntos: true
        }
      })
      resp.status(200).json(datosUsuario)
    } catch (err){
      console.error(err)
      resp.status(400). json({ error: "Error obteniendo datos de usuario" })
    }
})

app.post("/VIendoDirecto", async (req : Request, resp : Response) => {
    try {
      const { ID_ChatViewer, ID_chatStreamer, Viendo, EnVivo } = req.body
      if (EnVivo === false || EnVivo === "false") {
        resp.status(200).json({ result: "no hay chat porque el streamer no está en vivo" })
      }
      else {
        const ViendoDirecto = await prisma.chatStreamer.update({
        where: {
          ID_Streamer_ID_Viewer: {
            ID_Streamer: Number(ID_chatStreamer),
            ID_Viewer: Number(ID_ChatViewer)
          }
        },
        data: {
          Viendo: Viendo
        }
      })
      resp.status(200).json(ViendoDirecto)
      }
      
    } catch (err){
      console.error(err)
      resp.status(400).json({ error: "Error actualizando viendo directo" })
    }
})

app.post("/ObtenerDatosChat", async (req : Request, resp : Response) => {
    try {
      const { ID_ChatViewer, ID_chatStreamer } = req.body
      const datosChat = await prisma.chatStreamer.findUnique({
        where: {
          ID_Streamer_ID_Viewer: {
            ID_Streamer: Number(ID_chatStreamer),
            ID_Viewer: Number(ID_ChatViewer)
          }
        },
        include: {
          streamerC: {
            select: {
              EnVivo: true
            }
          }
        }
      })
      resp.status(200).json(datosChat)
    } catch (err){
      console.error(err)
      resp.status(400).json({ error: "Error obteniendo datos del chat" })
    }
})

app.post("/Actualizar_NivelViewer", async (req : Request, resp : Response) => {
    try {
      const { ID_ChatViewer, ID_chatStreamer, NuevoNivel } = req.body
      const NivelChat = await prisma.chatStreamer.update({
        where: {
          ID_Streamer_ID_Viewer: {
            ID_Streamer: Number(ID_chatStreamer),
            ID_Viewer: Number(ID_ChatViewer)
          }
        },
        data: {
          NivelViewer: Number(NuevoNivel)
        }
      })
      resp.status(200).json(NivelChat)
    } catch (err){
      console.error(err)
      resp.status(400).json({ error: "Error actualizando nivel viewer" })
    }
})

app.post("/Actualizar_NivelStreams", async (req : Request, resp : Response) => {
    try {
      const { ID_Usuario, NuevoNivel } = req.body
      const NivelStreams = await prisma.usuario.update({
        where: {
          ID: Number(ID_Usuario)
        },
        data: {
          NivelStreams: Number(NuevoNivel)
        }
      })
      resp.status(200). json(NivelStreams)
    } catch (err){
      console.error(err)
      resp.status(400).json({ error: "Error actualizando nivel streams" })
    }
})

app.post("/Actualizar_HorasTransmision", async (req : Request, resp : Response) => {
    try {
      const { ID_Usuario, NuevasHoras } = req.body
      const HorasTransmision = await prisma.usuario.update({
        where: {
          ID: Number(ID_Usuario)
        },
        data: {
          HorasTransmision: Number(NuevasHoras)
        }
      })
      resp.status(200).json(HorasTransmision)
    } catch (err){
      console.error(err)
      resp.status(400).json({ error: "Error actualizando horas de transmisión" })
    }
})

app.get("/UsuariosRanking", async (req : Request, resp : Response) => {
    try{
      const Usuarios = await prisma.usuario.findMany({
        orderBy: {
          NivelStreams: "desc"
        },
        take: 20,
        select: {
          ID: true,
          NombreUsuario: true,
          NivelStreams: true,
          ImagenPerfil: true,
        }
      })
      resp. status(200).json(Usuarios)
    }catch (err){
      console.error(err)
      resp.status(400).json({ error: "Error listando el ranking" })
    }
})

app.post("/Asignar_Logro", async (req : Request, resp : Response) => {
    try {
      const { ID_Usuario, ID_LogroPlantilla, Completado } = req.body
      const NLogro = await prisma.logrosUsuario.create({
        data: {
          ID_Usuario: Number(ID_Usuario),
          ID_Logro: Number(ID_LogroPlantilla),
          Completado: Completado
        }
      })
      resp.status(200). json(NLogro)
    } catch (err){
      console.error(err)
      resp.status(400).json({ error: "Error creando logro" })
    }
})

app.post("/LogrosUsuario", async (req : Request, resp : Response) => {
    try{
      const { ID_Usuario } = req.body
      const Logros = await prisma.logrosUsuario.findMany({
        where:{
          ID_Usuario: Number(ID_Usuario)
        },
        select: {
          logros: {
            select: {
              Nombre: true,
              descripcion: true,
              Puntaje: true
          }
        },
          Completado: true
        }
      })
      resp.status(200).json(Logros)
    }catch (err){
      console.error(err)
      resp.status(400).json({ error: "Error obteniendo logros del usuario" })
    }
})

app.get("/LogrosPlantilla", async (req : Request, resp : Response) => {
    try {
      const LogrosPlantilla = await prisma.logros.findMany({})
      resp.status(200). json(LogrosPlantilla)
    } catch (err){
      console.error(err)
      resp.status(400).json({ error: "Error obteniendo logros plantilla" })
    }
})

app.post("/Actualizar_Logro", async (req : Request, resp : Response) => {
    try {
      const { ID_Usuario, ID_Logro, Completado} = req.body
      const Logro = await prisma.logrosUsuario.update({
        where:{
          ID_Usuario_ID_Logro: {
            ID_Usuario: Number(ID_Usuario),
            ID_Logro: Number(ID_Logro)
          }
        },
        data: {
          Completado: Completado
        }
      })
      resp.status(200).json(Logro)
    } catch (err){
      console.error(err)
      resp.status(400). json({ error: "Error actualizando logro" })
    }
})

app.post("/Todos_Los_Logros", async (req : Request, resp : Response) => {
    try {
      const {ID_Usuario} = req.body
      const TodosLosLogros = await prisma. logrosUsuario.findMany({
        where: {
          ID_Usuario: Number(ID_Usuario)
        },
        include: {
          logros: true
        }
      })
      resp.status(200).json(TodosLosLogros)
    } catch (err){
      console.error(err)
      resp.status(400).json({ error: "Error obteniendo todos los logros" })
    }
})

// ============================================
// ENDPOINTS DE JUEGOS/CATEGORÍAS
// ============================================

app.get("/ObtenerJuegos", async (req: Request, resp: Response) => {
    try {
        const juegos = await prisma.juego.findMany({
            select: {
                ID_Juego: true,
                Nombre: true,
            }
        });
        resp.status(200).json(juegos);
    } catch (err) {
        console.error(err);
        resp.status(400).json({ error: "Error obteniendo juegos" });
    }
});

app.post("/StreamersPorJuego", async (req: Request, resp: Response) => {
    try {
        const { NombreJuego } = req.body;
        
        if (!NombreJuego) {
            return resp.status(400).json({ error: "NombreJuego es requerido" });
        }

        // Obtener el ID del juego
        const juego = await prisma.juego.findFirst({
            where: {
                Nombre: NombreJuego
            }
        });

        if (!juego) {
            return resp.status(404).json({ error: "Juego no encontrado" });
        }

        // Buscar videos activos (Estado: true) con ese juego
        const videosConJuego = await prisma. juegosEnVideo.findMany({
            where: {
                ID_Juego: juego. ID_Juego
            },
            select: {
                video: {
                    select: {
                        ID_Usuario: true,
                        Estado: true,
                        Titulo: true,
                        CategoriaDeVideo: true,
                        usuario: {
                            select: {
                                ID: true,
                                NombreUsuario: true,
                                ImagenPerfil: true,
                                EnVivo: true,
                                NivelStreams: true
                            }
                        }
                    }
                }
            }
        });

        // Filtrar solo usuarios en vivo con video activo
        const streamersEnVivo = videosConJuego
            .filter((v: { video: { Estado: boolean; usuario: { EnVivo: boolean } } }) => v.video?. Estado === true && v.video?.usuario?.EnVivo === true)
            .map((v: { video: { usuario: { ID: any; NombreUsuario: any; ImagenPerfil: any; NivelStreams: any }; Titulo: any; CategoriaDeVideo: any } }) => ({
                ID: v.video?. usuario?.ID,
                NombreUsuario: v.video?. usuario?.NombreUsuario,
                ImagenPerfil: v.video?.usuario?.ImagenPerfil,
                NivelStreams: v.video?.usuario?.NivelStreams,
                TituloStream: v.video?. Titulo,
                Categoria: v.video?.CategoriaDeVideo
            }));

        resp.status(200).json({
            juego: NombreJuego,
            totalStreamers: streamersEnVivo. length,
            streamers: streamersEnVivo
        });
    } catch (err) {
        console.error(err);
        resp.status(400).json({ error: "Error obteniendo streamers por juego" });
    }
});


app.get("/Mas_Vistos", async (req: Request, res: Response) => {
  try {
    const streamers = await prisma.usuario.findMany({
      where: {
        EnVivo: true
      },
      take: 20,
      select: {
        NombreUsuario: true,
        ImagenPerfil: true,
        NivelStreams: true,
        _count: {
          select: {
            streamerCHat: true
          }
        },
        streamerCHat: {
          where: { Viendo: true },
          select: {
            ID_Viewer: true
          }
        }
      }
    })
    const result = streamers.map((s: typeof streamers[0]) => ({
      NombreUsuario: s.NombreUsuario,
      ImagenPerfil: s.ImagenPerfil,
      NivelStreams: s.NivelStreams,
      ViendoCount: (s.streamerCHat ??  []).length,
      TotalChats: s._count?. streamerCHat ?? 0,
      streamerChat: s.streamerCHat 
    }))

    res.status(200).json(result)
  } catch (err) {
    console.error(err)
    res.status(400).json({ error: "Error obteniendo los streamers más vistos" })
  }
})

app.get("/Mas_Visto", async (req: Request, res: Response) => {
  try {
    const streamers = await prisma.usuario.findMany({
      where: {
        EnVivo: true
      },
      take: 1,
      select: {
        NombreUsuario: true,
        ImagenPerfil: true,
        NivelStreams: true,
        _count: {
          select: {
            streamerCHat: true
          }
        },
        streamerCHat: {
          where: { Viendo: true },
          select: {
            ID_Viewer: true
          }
        }
      }
    })
    const result = streamers.map((s: typeof streamers[0]) => ({
      NombreUsuario: s.NombreUsuario,
      ImagenPerfil: s.ImagenPerfil,
      NivelStreams: s.NivelStreams,
      ViendoCount: (s.streamerCHat ??  []).length,
      TotalChats: s._count?. streamerCHat ?? 0,
      streamerChat: s.streamerCHat 
    }))

    res.status(200).json(result)
  } catch (err) {
    console.error(err)
    res.status(400).json({ error: "Error obteniendo los streamers más vistos" })
  }
})

app.post("/SeguidosEnVIvo", async (req: Request, resp: Response) => {
    try {
      const { ID_Usuario } = req.body
      const SeguidosEnVivo = await prisma.suscripcion.findMany({
        where: {
          ID_Viewer: Number(ID_Usuario),
          streamer: {
            EnVivo: true
          }
        },
        select: {
          streamer: {
            select: {
              NombreUsuario: true,
              ImagenPerfil: true,
              NivelStreams: true,
              videos: {
                select: {
                  Titulo: true,
                  CategoriaDeVideo: true,
                  Url: true,
                }
              }
            }
          }
        }
      })
      resp.status(200).json(SeguidosEnVivo)
    } catch (err){
      console.error(err)
      resp.status(400). json({ error: "Error obteniendo seguidos en vivo" })
    }
})

app.post("/Actualizar_Estado_EnVivo", async (req : Request, resp : Response) => {
    try {
      const { ID_Usuario, EnVivo } = req.body
      const EnVivoBool = (EnVivo === true || EnVivo === "true");
    const updated = await prisma.usuario.updateMany({
      where: { ID: Number(ID_Usuario)},
      data: { EnVivo: EnVivoBool }
    })
    resp.status(200).json(updated)
    } catch (err){
      console.error(err)
      resp.status(400).json({ error: "Error actualizando estado en vivo" })
    }
})

app.post("/Actualizar_Monedas", async (req : Request, resp : Response) => {
    try {
      const { ID_Usuario, NuevasMonedas } = req.body
      const monedas = await prisma.usuario.update({
        where: {
          ID: Number(ID_Usuario)
        },
        data: {
          Monedas: Number(NuevasMonedas)
        }
      })
      resp.status(200). json(monedas)
    } catch (err){
      console.error(err)
      resp.status(400).json({ error: "Error actualizando monedas" })
    }
})

app.post("/datos_Stream", async (req : Request, resp : Response) => {
    try {
      const { ID_Usuario } = req.body
      const datosstream = await prisma.usuario.findUnique({
        where: {
          ID: Number(ID_Usuario)
        },
        select: {
          NombreUsuario: true,
          ImagenPerfil: true,
          NivelStreams: true,
          HorasTransmision: true,
          videos: {
            where: {
              Estado: true
            },
            select: {
              Titulo: true,
              CategoriaDeVideo: true,
              V_DEOs: {
                select: {
                  ID_Juego: true,
                  game: {
                    select: {
                      Nombre: true
                    }
                  }
                }
              }
           }
          }
        }
      })
      resp.status(200).json(datosstream)
    } catch (err){
      console.error(err)
      resp.status(400).json({ error: "Error obteniendo datos del stream" })
    }
})

// ============================================
// ENDPOINTS DE VIDEOS
// ============================================

app. post("/Crear_VIdeo", async (req : Request, resp : Response) => {
    try {
      const { titulo, url, estado, categoriaDeVideo, ID_Usuario } = req.body
      const ListaCategorias = categoriaDeVideo.join(", ");
      const video = await prisma.video.create({
        data: {
          Titulo: String(titulo),
          Url: String(url),
          Estado: estado,
          CategoriaDeVideo: String(ListaCategorias),
          ID_Usuario: Number(ID_Usuario)
        }
      })
      resp.status(200). json(video)
    } catch (err){
      console.error(err)
      resp.status(400).json({ error: "Error creando video" })
    }
})

app.post("/Vincular_Juego_Video", async (req : Request, resp : Response) => {
    try {
      const { ID_Juego, ID_Video } = req.body
      const vinculo = await prisma.juegosEnVideo.create({
        data: {
          ID_Juego: Number(ID_Juego),
          ID_Video: Number(ID_Video)
        }
      })
      resp.status(200).json(vinculo)
    } catch (err){
      console.error(err)
      resp.status(400).json({ error: "Error vinculando juego y video" })
    }
})

app.post("/Actualizar_Video", async (req : Request, resp : Response) => {
    try {
      const { ID_Video, duracion, estado, categoriaDeVideo } = req.body
      const ListaCategorias = categoriaDeVideo.join(", ");
      const VideoActualizado = await prisma. video.update({
        where: {
          ID_Video: Number(ID_Video)
        },
        data: {
          Duracion: Number(duracion),
          Estado: estado,
          CategoriaDeVideo: String(ListaCategorias)
        }
      })
      resp.status(200).json(VideoActualizado)
    } catch (err){
      console.error(err)
      resp.status(400).json({ error: "Error actualizando video" })
    }
})

app.post("/Eliminar_Video", async (req : Request, resp : Response) => {
    try {
      const { ID_Video } = req.body
      const VideoEliminado = await prisma.video.delete({
        where: {
          ID_Video: Number(ID_Video)
        }
      }) 
      resp.status(200).json(VideoEliminado) 
    } catch (err){
      console.error(err)
      resp.status(400). json({ error: "Error eliminando video" })
    }
})

app.post("/VerMisVideos", async (req: Request, resp: Response) => {
    try {
      const { ID_Usuario } = req.body
      const MisVideos = await prisma.video.findMany({
        where:{
          ID_Usuario: Number(ID_Usuario)
        },
        select: {
          Titulo: true,
          CategoriaDeVideo: true,
          V_DEOs: {
            select: {
              game: {
                select: {
                  Nombre: true
                }
              },
            }
          }
        }
      })
      resp.status(200).json(MisVideos)
    } catch (err){
      console.error(err)
      resp.status(400). json({ error: "Error obteniendo mis videos" })
    }
})

app.get("/videos/buscar", async (req: Request, resp: Response) => {
   
    const busqueda = req.query.q as string;

    if (!busqueda) {
        return resp.status(400).json({ 
            error: "Escribe algo para buscar.  Ejemplo: /videos/buscar? q=minecraft" 
        });
    }

    try {
        const videosEncontrados = await prisma.video.findMany({
            where: {
                OR: [
                    { 
                        Titulo: { contains: busqueda, mode: 'insensitive' } 
                    },
                    { 
                        CategoriaDeVideo: { contains: busqueda, mode: 'insensitive' } 
                    },
                    { 
                        usuario: { 
                            NombreUsuario: { contains: busqueda, mode: 'insensitive' }
                        }
                    }
                ]
            },
            include: {
                usuario: true 
            }
        });

        resp.status(200).json(videosEncontrados);

    } catch (error) {
        console.error("Error buscando videos:", error);
        resp.status(500).json({ error: "Error al realizar la búsqueda" });
    }
});

// ============================================
// ENDPOINTS DE BÚSQUEDA
// ============================================

// Busqueda unificada
app.get("/buscar", async (req: Request, resp: Response) => {
    const busqueda = req.query.q as string;

    if (!busqueda || busqueda.trim() === "") {
        return resp.status(400).json({ 
            error: "Escribe algo para buscar. Ejemplo: /buscar?q=minecraft" 
        });
    }

    try {
        const usuarios = await prisma.usuario.findMany({
            where: {
                NombreUsuario: { contains: busqueda, mode: 'insensitive' }
            },
            select: {
                ID: true,
                NombreUsuario: true,
                ImagenPerfil: true,
                NivelStreams: true,
                EnVivo: true
            },
            take: 10
        });

        const juegos = await prisma.juego.findMany({
            where: {
                Nombre: { contains: busqueda, mode: 'insensitive' }
            },
            select: {
                ID_Juego: true,
                Nombre: true,
            },
            take: 10
        });

        const videos = await prisma.video.findMany({
            where: {
                OR: [
                    { Titulo: { contains: busqueda, mode: 'insensitive' } },
                    { CategoriaDeVideo: { contains: busqueda, mode: 'insensitive' } }
                ]
            },
            select: {
                ID_Video: true,
                Titulo: true,
                CategoriaDeVideo: true,
                Url: true,
                usuario: {
                    select: {
                        ID: true,
                        NombreUsuario: true,
                        ImagenPerfil: true
                    }
                }
            },
            take: 10
        });

        resp.status(200).json({
            query: busqueda,
            resultados: {
                usuarios,
                categorias: juegos,
                videos
            },
            total: usuarios.length + juegos.length + videos.length
        });

    } catch (error) {
        console.error("Error en búsqueda unificada:", error);
        resp.status(500).json({ error: "Error al realizar la búsqueda" });
    }
});

// Busqueda de usuarios
app.get("/buscar/usuarios", async (req: Request, resp: Response) => {
    const busqueda = req.query.q as string;

    if (!busqueda || busqueda.trim() === "") {
        return resp.status(400).json({ 
            error: "Escribe algo para buscar" 
        });
    }

    try {
        const usuarios = await prisma.usuario.findMany({
            where: {
                NombreUsuario: { contains: busqueda, mode: 'insensitive' }
            },
            select: {
                ID: true,
                NombreUsuario: true,
                ImagenPerfil: true,
                NivelStreams: true,
                HorasTransmision: true,
                EnVivo: true
            },
            take: 20
        });

        resp.status(200).json(usuarios);

    } catch (error) {
        console.error("Error buscando usuarios:", error);
        resp.status(500).json({ error: "Error al buscar usuarios" });
    }
});

// Búsqueda de categorias/juegos
app.get("/buscar/categorias", async (req: Request, resp: Response) => {
    const busqueda = req.query.q as string;

    if (!busqueda || busqueda.trim() === "") {
        return resp.status(400).json({ 
            error: "Escribe algo para buscar" 
        });
    }

    try {
        const categorias = await prisma.juego.findMany({
            where: {
                Nombre: { contains: busqueda, mode: 'insensitive' }
            },
            select: {
                ID_Juego: true,
                Nombre: true,
            },
            take: 20
        });

        resp.status(200).json(categorias);

    } catch (error) {
        console.error("Error buscando categorías:", error);
        resp.status(500).json({ error: "Error al buscar categorías" });
    }
});

// ============================================
// ENDPOINTS DE REGALOS
// ============================================

app.post("/regalos/crear", async (req : Request, resp : Response) => {
    const datosRecibidos = req.body

    const regalo = await prisma.regalo.create({
        data : {
            NombreRegalo : datosRecibidos.NombreRegalo ,
            PrecioRegalo : parseFloat(datosRecibidos. PrecioRegalo),
            DescripcionRegalo : datosRecibidos.DescripcionRegalo,
            icono : datosRecibidos. icono,
            streamer: { 
                    connect: { 
                        ID: datosRecibidos.IDs  
                    } 
                }
        }
    })
    resp.status(200).json(regalo)
})

app. get("/regalos/eliminar", async (req: Request, resp: Response) => {
    const nombreParaBorrar = req.query.nombre as string; 

    if (!nombreParaBorrar) {
        return resp.status(400).json({ error: "Falta el parámetro ? nombre=..." });
    }

    try {
        const resultado = await prisma.regalo.deleteMany({
            where: {
                NombreRegalo: nombreParaBorrar
            }
        })

        if (resultado.count === 0) {
             return resp.status(404).json({ mensaje: "No encontré nada con ese nombre." });
        }

        resp. status(200).json(resultado);

    } catch (error) {
        resp.status(500).json({ error: "Error al eliminar" });
    }
})

app.post("/regalos/actualizar", async (req : Request, resp : Response) => {
    const data = req.body
    const id = data.id

    try {
        const regaloActualizado = await prisma.regalo.update({
            where : {
                ID_Regalo: data.ID_Regalo
            },
            data : {
                NombreRegalo: data.nuevoNombre,
                PrecioRegalo: parseFloat(data.nuevoPrecio),
                DescripcionRegalo:data. DescripcionRegalo,
                icono:data.icono
            }
        })
        resp.status(200).json(regaloActualizado)
        return
    }catch (e) {
        console.log("---------------- ERROR REAL PRISMA ----------------");
        console.log(e); 
        console.log("---------------------------------------------------");

        resp.status(400).json({
            error: "Hubo un error.  Mira la terminal de VS Code para ver el detalle."
        })
    }
})

app.post("/regalos", async (req: Request, resp: Response) => {
    try {
        const {id} = req.body
        const todosLosRegalos = await prisma.regalo.findMany({
          where: {
            ID_Streamer: id,
          },
        })
        resp.status(200).json(todosLosRegalos)
    } catch (error) {
        console.error(error)
        resp.status(500).json({ error: "Hubo un error al obtener la lista" })
    }
})

app.get("/regalosbyMirko", async (req: Request, resp: Response) => {
    try {
        const idUsuario = Number(req.query.ID);

        if (!idUsuario) {
            return resp.status(400).json({ error: "Falta ID de usuario" });
        }

        // Buscamos regalos donde el ID del Streamer sea el tuyo
        const misRegalos = await prisma.regalo.findMany({
            where: {
                // Asumiendo que en tu tabla Regalo la relación se llama 'ID_Streamer'
                // O si es por relación: streamer: { ID: idUsuario }
                streamer: {
                    ID: idUsuario
                }
            }
        })
        resp.status(200).json(misRegalos)
    } catch (error) {
        console.error(error)
        resp.status(500).json({ error: "Error obteniendo regalos" })
    }
})
// ============================================
// ENDPOINTS DE CHAT EN TIEMPO REAL
// ============================================

interface MensajeChat {
  id: string;
  autor: string;
  nivel: number;
  texto: string;
  hora: string;
  avatarUrl?: string;
  tipo?: "usuario" | "sistema" | "regalo";
}

// Almacenamiento temporal de mensajes por sala/streamer
const chatRooms = new Map<string, MensajeChat[]>();

// Obtener mensajes de un chat
app.get("/api/chat/:streamerName/mensajes", (req: Request, res: Response) => {
  console.log("📥 [Chat] Request recibido en /api/chat/:streamerName/mensajes");
  
  try {
    const { streamerName } = req.params;
    
    if (!streamerName) {
      return res.status(400).json({ error: 'streamerName es requerido' });
    }
    
    const mensajes = chatRooms.get(streamerName) || [];
    
    res.json({
      streamerName,
      mensajes: mensajes.slice(-100), // Últimos 100 mensajes
      count: mensajes.length,
    });
  } catch (error) {
    console.error("❌ [Chat] Error al obtener mensajes:", error);
    res.status(500).json({ error: 'Error al obtener mensajes' });
  }
});

// Enviar mensaje a un chat
app.post("/api/chat/:streamerName/mensaje", (req: Request, res: Response) => {
  console. log(" Request recibido en /api/chat/:streamerName/mensaje");
  
  try {
    const { streamerName } = req.params;
    const mensaje: MensajeChat = req. body;

    if (!streamerName) {
      return res.status(400).json({ error: 'streamerName es requerido' });
    }

    if (!mensaje.id || !mensaje.autor || !mensaje.texto) {
      return res.status(400). json({ error: 'Datos de mensaje incompletos' });
    }

    // Obtener o crear sala de chat
    let mensajes = chatRooms.get(streamerName);
    if (!mensajes) {
      mensajes = [];
      chatRooms.set(streamerName, mensajes);
    }

    // Agregar mensaje
    mensajes.push(mensaje);

    // Mantener solo los últimos 200 mensajes
    if (mensajes.length > 200) {
      mensajes. splice(0, mensajes.length - 200);
    }

    console.log(`✅ [Chat] Mensaje agregado en sala de ${streamerName}`);

    res.json({
      success: true,
      mensaje,
      totalMensajes: mensajes.length,
    });
  } catch (error) {
    console. error("❌ [Chat] Error al enviar mensaje:", error);
    res.status(500). json({ error: 'Error al enviar mensaje' });
  }
});

// Limpiar mensajes de un chat
app.delete("/api/chat/:streamerName/limpiar", (req: Request, res: Response) => {
  console.log(" [Chat] Request recibido en /api/chat/:streamerName/limpiar");
  
  try {
    const { streamerName } = req.params;
    
    if (!streamerName) {
      return res.status(400).json({ error: 'streamerName es requerido' });
    }
    
    chatRooms.delete(streamerName);
    
    console.log(`✅ [Chat] Mensajes limpiados para ${streamerName}`);
    
    res.json({
      success: true,
      message: `Chat de ${streamerName} limpiado`,
    });
  } catch (error) {
    console.error("❌ [Chat] Error al limpiar chat:", error);
    res.status(500).json({ error: 'Error al limpiar chat' });
  }
});

// Obtener estadísticas de un chat
app.get("/api/chat/:streamerName/stats", (req: Request, res: Response) => {
  console. log("📥 [Chat] Request recibido en /api/chat/:streamerName/stats");
  
  try {
    const { streamerName } = req.params;
    
    if (!streamerName) {
      return res.status(400).json({ error: 'streamerName es requerido' });
    }
    
    const mensajes = chatRooms.get(streamerName) || [];
    
    const usuarios = new Set(mensajes.map(m => m.autor));
    const mensajesSistema = mensajes.filter(m => m.tipo === "sistema").length;
    const mensajesUsuario = mensajes.filter(m => m.tipo === "usuario").length;
    
    res.json({
      streamerName,
      totalMensajes: mensajes.length,
      usuariosActivos: usuarios.size,
      mensajesSistema,
      mensajesUsuario,
    });
  } catch (error) {
    console.error("❌ [Chat] Error al obtener estadísticas:", error);
    res.status(500).json({ error: 'Error al obtener estadísticas' });
  }
});

// Limpieza automática de chats inactivos (cada hora)
setInterval(() => {
  const now = Date.now();
  const oneHour = 60 * 60 * 1000;
  
  for (const [streamerName, mensajes] of chatRooms. entries()) {
    if (mensajes.length === 0) continue;
    
    const ultimoMensaje = mensajes[mensajes.length - 1];
    if (!ultimoMensaje) continue;
    
    const horaMensaje = ultimoMensaje.hora.split(':');

  }
}, 3600000);

// LIMPIEZA AUTOMÁTICA DE STREAMS INACTIVOS


setInterval(() => {
  const now = new Date();
  const oneHour = 60 * 60 * 1000;
  
  for (const [streamerName, stream] of activeStreams. entries()) {
    const inactiveTime = now. getTime() - stream.lastActivity.getTime();
    if (! stream.isLive && inactiveTime > oneHour) {
      activeStreams.delete(streamerName);
      console.log(`🗑️ [Stream] Sala de ${streamerName} eliminada por inactividad`);
    }
  }
}, 3600000); // Cada hora

// INICIAR SERVIDOR


app.listen(PORT, () => {
  console.log(` Servidor corriendo en http://localhost:${PORT}`)
  console.log(` Sistema de streams VDO. Ninja inicializado`)
  console.log(`  Prisma Client conectado`)
  console.log(`\n ENDPOINTS DE STREAMING:`)

  console.log(`   POST   /api/stream/room          - Crear/obtener sala`)
  console.log(`   POST   /api/stream/start         - Iniciar transmisión`)
  console.log(`   POST   /api/stream/stop          - Detener transmisión`)
  console.log(`   GET    /api/stream/status/:name  - Estado del stream`)
  console.log(`   GET    /api/streams/live         - Listar streams activos`)
  console.log(`   GET    /api/live-url             - URL de visualización`)
  console.log(`   GET    /api/live-broadcaster     - URL de broadcaster`)
  console.log(`   POST   /api/live-room/create     - Crear sala personalizada\n`)
})

// Manejar cierre graceful
process.on('SIGINT', async () => {
  console.log('\n⏸️  Cerrando servidor.. .');
  await prisma.$disconnect();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('\n⏸️  Cerrando servidor.. .');
  await prisma.$disconnect();
  process.exit(0);
});