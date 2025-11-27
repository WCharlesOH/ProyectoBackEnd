import express, {Request, Response, NextFunction} from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import cors from "cors"
import { PrismaClient } from "./generated/prisma/client"


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
        HorasTransmision = 0,
        Monedas = 0,
        NivelStreams = 0,
        Puntos = 0
      } = req.body

      const usuario = await prisma.usuario.create({
      data: {
        NombreUsuario,
        Contraseña,
        email,
        ImagenPerfil,
        HorasTransmision: Number(HorasTransmision),
        Monedas: Number(Monedas),
        NivelStreams: Number(NivelStreams),
        Puntos: Number(Puntos)
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
              URL_Pagina: true,
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
          viewer: {
            select: {
              NombreUsuario: true,
              IMagenPerfil: true
            }
          }
        }
      })
    } catch (err){
      console.error(err)
      resp.status(400).json({ error: "Error encontrando suscricpciones" })
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
    } catch (err){
      console.error(err)
      resp.status(400).json({ error: "Error eliminando suscripción" })
    }
})

app.post("/Actualizar_NivelViewer", async (req : Request, resp : Response) => {
    try {

    } catch (err){
      console.error(err)
      resp.status(400).json({ error: "Error actualizando nivel viewer" })
    }
})

app.post("/Actualizar_NivelStreams", async (req : Request, resp : Response) => {
    try {

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
    }catch (err){
      console.error(err)
      resp.status(400).json({ error: "Error listando el ranking" })
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