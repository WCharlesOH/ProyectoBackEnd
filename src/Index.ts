import express, {Request, Response, NextFunction} from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import cors from "cors"
import { PrismaClient } from "./generated/prisma/client.js"



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

app.get("/LogrosUsuario", async (req : Request, resp : Response) => {
    try{
      const { ID_Usuario } = req.body
      const Logros = await prisma.logros.findMany({
        where:{
          ID_Usuario: Number(ID_Usuario)
        },
        select: {
          Nombre: true,
          Puntaje: true,
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
      const Logro = await prisma.logros.update({
        where:{
          ID_Logro: Number(ID_Logro),
          ID_Usuario: Number(ID_Usuario)
        },
        data: {
          Completado: Boolean(Completado)
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
        EnVivo: true
      },
      take: 20,
      select: {
        NombreUsuario: true,
        ImagenPerfil: true,
        NivelStreams: true,
        // devuelve la cantidad total de streamerChat (sin filtrar)
        _count: {
          select: {
            streamerCHat: true
          }
        },
        // trae solo los chats donde Viendo = true para luego contar en JS
        streamerCHat: {
          where: { Viendo: true },
          select: {
            ID_Viewer: true
          }
        }
      }
    })

    // calcular ViendoCount por streamer a partir del array filtrado
    const result = streamers.map((s: typeof streamers[0]) => ({
      NombreUsuario: s.NombreUsuario,
      ImagenPerfil: s.ImagenPerfil,
      NivelStreams: s.NivelStreams,
      ViendoCount: (s.streamerCHat ?? []).length,
      TotalChats: s._count?.streamerCHat ?? 0,
      streamerChat: s.streamerCHat // incluye detalles si los necesitas
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
      const { titulo, url, duracion, estado, categoriaDeVideo, ID_Juego, ID_Usuario } = req.body
      const ListaCategorias = categoriaDeVideo.join(", ");
      const video = await prisma.video.create({
        data: {
          Titulo: String(titulo),
          Url: String(url),
          Duracion: Number(duracion),
          Estado: Boolean(estado),
          CategoriaDeVideo: String(ListaCategorias),
          ID_Usuario: Number(ID_Usuario)
        }
      })
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
          Estado: Boolean(estado),
          CategoriaDeVideo: String(ListaCategorias)
        }
      })

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