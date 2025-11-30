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

    resp.status(200).json(usuario)
  } catch (err) {
    console.error(err)
    resp.status(400).json({ error: "Error creando usuario" })
  }
})

app.post("/Validar_Usuario", async (req : Request, resp : Response) => {
    try {
      const { NombreUsuario, Contraseña } = req.body
      const usuario = await prisma.usuario.findFirst({
        where: {
          NombreUsuario, Contraseña
        },
        select: {
          ID: true,
          NombreUsuario: true,
          HorasTransmision: true,
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

app.get("/Suscrito", async (req: Request, resp: Response) => {
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
              ImagenPerfil: true
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

app.get("/SuscripcioneMias", async (req: Request, resp: Response) => {
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
      resp.status(400).json({ error: "Error obteniendo cantidad de suscriptores" })
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
      resp.status(200).json(suscricpcion)
    } catch (err){
      console.error(err)
      resp.status(400).json({ error: "Error creando suscripción" })
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

app.post("/Crear_ChatStreamer", async (req : Request, resp : Response) => {
    try {
      const { ID_Streamer, ID_Viewer } = req.body
      const chatStreamer =  await prisma.chatStreamer.create({
        data: {
          ID_Streamer: Number(ID_Streamer),
          ID_Viewer: Number(ID_Viewer),
          Viendo: true,
        }
      })
      resp.status(200).json(chatStreamer)
    } catch (err){
      console.error(err)
      resp.status(400).json({ error: "Error creando chat streamer" })
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
      resp.status(200).json(NivelStreams)
    } catch (err){
      console.error(err)
      resp.status(400).json({ error: "Error actualizando nivel streams" })
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
          NombreUsuario: true,
          NivelStreams: true,
          ImagenPerfil: true,
        }
      })
      resp.status(200).json(Usuarios)
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
      resp.status(200).json(NLogro)
    } catch (err){
      console.error(err)
      resp.status(400).json({ error: "Error creando logro" })
    }
})

app.get("/LogrosUsuario", async (req : Request, resp : Response) => {
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
      resp.status(400).json({ error: "Error actualizando logro" })
    }
})

app.get("/Mas_Vistos", async (req: Request, res: Response) => {
  try {
    const streamers = await prisma.usuario.findMany({
      where: {
        EnVivo: false
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
      ViendoCount: (s.streamerCHat ?? []).length,
      TotalChats: s._count?.streamerCHat ?? 0,
      streamerChat: s.streamerCHat 
    }))

    res.status(200).json(result)
  } catch (err) {
    console.error(err)
    res.status(400).json({ error: "Error obteniendo los streamers más vistos" })
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
      resp.status(200).json(monedas)
    } catch (err){
      console.error(err)
      resp.status(400).json({ error: "Error actualizando monedas" })
    }
})

app.get("/datos_Stream", async (req : Request, resp : Response) => {
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

app.post("/Crear_VIdeo", async (req : Request, resp : Response) => {
    try {
      const { titulo, url, duracion, estado, categoriaDeVideo, ID_Usuario } = req.body
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
      resp.status(200).json(video)
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
      const VideoActualizado = await prisma.video.update({
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
      resp.status(400).json({ error: "Error eliminando video" })
    }
})

app.get("/VerMisVideos", async (req: Request, resp: Response) => {
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
      resp.status(400).json({ error: "Error obteniendo mis videos" })
    }
})

//agregar

app.post("/regalos/crear", async (req : Request, resp : Response) => {
    const datosRecibidos = req.body

    const regalo = await prisma.regalo.create({
        data : {
            NombreRegalo : datosRecibidos.NombreRegalo ,
            PrecioRegalo : parseFloat(datosRecibidos.PrecioRegalo),
            DescripcionRegalo : datosRecibidos.DescripcionRegalo,
            icono : datosRecibidos.icono,
            streamer: { 
                    connect: { 
                        ID: 1  
                    } 
                }


        }
    })
    resp.status(200).json(regalo)
})




//eliminar
app.get("/regalos/eliminar", async (req: Request, resp: Response) => {

    const nombreParaBorrar = req.query.nombre as string; 

    if (!nombreParaBorrar) {
        return resp.status(400).json({ error: "Falta el parámetro ?nombre=..." });
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

        resp.status(200).json(resultado);

    } catch (error) {
        resp.status(500).json({ error: "Error al eliminar" });
    }
})




//Modificar

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
                DescripcionRegalo:data.DescripcionRegalo,
                icono:data.icono
            
            }
        })
        resp.status(200).json(regaloActualizado)
        return
    }catch (e) {
        // AGREGA ESTA LÍNEA OBLIGATORIAMENTE:
        console.log("---------------- ERROR REAL PRISMA ----------------");
        console.log(e); 
        console.log("---------------------------------------------------");

        resp.status(400).json({
            error: "Hubo un error. Mira la terminal de VS Code para ver el detalle."
        })
    }
})


//obtener regalos

app.get("/regalos", async (req: Request, resp: Response) => {
    try {
        const todosLosRegalos = await prisma.regalo.findMany({
        })

        resp.status(200).json(todosLosRegalos)
    } catch (error) {
        console.error(error)
        resp.status(500).json({ error: "Hubo un error al obtener la lista" })
    }
})

//ENDPOINT PARA LA TRANSMISIÓN EN VIVO
app.get("/api/live-url", (req: Request, res: Response) => {
  const liveUrl = process.env.LIVE_EMBED_URL

  if (!liveUrl) {
    return res.status(500).json({ error: "LIVE_EMBED_URL no está configurada" })
  }

  res.json({ url: liveUrl })
})

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Backend escuchando en el puerto ${PORT}`)
})