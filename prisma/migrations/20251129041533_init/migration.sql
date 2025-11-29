-- CreateTable
CREATE TABLE "Usuario" (
    "ID" SERIAL NOT NULL,
    "NombreUsuario" TEXT NOT NULL,
    "Contraseña" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "HorasTransmision" INTEGER NOT NULL,
    "Monedas" INTEGER NOT NULL,
    "EnVivo" BOOLEAN NOT NULL DEFAULT false,
    "ImagenPerfil" TEXT NOT NULL,
    "NivelStreams" INTEGER NOT NULL,
    "Puntos" INTEGER NOT NULL,
    "fechaCreacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "ChatStreamer" (
    "ID_Streamer" INTEGER NOT NULL,
    "ID_Viewer" INTEGER NOT NULL,
    "NivelViewer" INTEGER NOT NULL DEFAULT 0,
    "Habilitado" BOOLEAN NOT NULL DEFAULT true,
    "Viendo" BOOLEAN NOT NULL,

    CONSTRAINT "ChatStreamer_pkey" PRIMARY KEY ("ID_Streamer","ID_Viewer")
);

-- CreateTable
CREATE TABLE "Suscripcion" (
    "ID_Streamer" INTEGER NOT NULL,
    "ID_Viewer" INTEGER NOT NULL,

    CONSTRAINT "Suscripcion_pkey" PRIMARY KEY ("ID_Streamer","ID_Viewer")
);

-- CreateTable
CREATE TABLE "Regalo" (
    "ID_Regalo" SERIAL NOT NULL,
    "NombreRegalo" TEXT NOT NULL,
    "PrecioRegalo" INTEGER NOT NULL,
    "DescripcionRegalo" TEXT NOT NULL,
    "icono" TEXT NOT NULL,
    "ID_Streamer" INTEGER NOT NULL,

    CONSTRAINT "Regalo_pkey" PRIMARY KEY ("ID_Regalo")
);

-- CreateTable
CREATE TABLE "Categoria" (
    "ID" SERIAL NOT NULL,
    "Nombre" TEXT NOT NULL,

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Juego" (
    "ID_Juego" SERIAL NOT NULL,
    "Nombre" TEXT NOT NULL,
    "Descripcion" TEXT,
    "CategoriaID" INTEGER NOT NULL,

    CONSTRAINT "Juego_pkey" PRIMARY KEY ("ID_Juego")
);

-- CreateTable
CREATE TABLE "JuegosEnVideo" (
    "ID_Juego" INTEGER NOT NULL,
    "ID_Video" INTEGER NOT NULL,

    CONSTRAINT "JuegosEnVideo_pkey" PRIMARY KEY ("ID_Juego","ID_Video")
);

-- CreateTable
CREATE TABLE "Video" (
    "ID_Video" SERIAL NOT NULL,
    "Titulo" TEXT NOT NULL,
    "Url" TEXT NOT NULL,
    "Duracion" INTEGER,
    "Estado" BOOLEAN NOT NULL,
    "CategoriaDeVideo" TEXT NOT NULL,
    "FechaSubida" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ID_Usuario" INTEGER NOT NULL,

    CONSTRAINT "Video_pkey" PRIMARY KEY ("ID_Video")
);

-- CreateTable
CREATE TABLE "Logros" (
    "ID_Logro" SERIAL NOT NULL,
    "Nombre" TEXT NOT NULL,
    "Puntaje" INTEGER NOT NULL,
    "Completado" BOOLEAN NOT NULL DEFAULT false,
    "ID_Usuario" INTEGER NOT NULL,

    CONSTRAINT "Logros_pkey" PRIMARY KEY ("ID_Logro")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_NombreUsuario_key" ON "Usuario"("NombreUsuario");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Logros_Nombre_key" ON "Logros"("Nombre");

-- AddForeignKey
ALTER TABLE "ChatStreamer" ADD CONSTRAINT "ChatStreamer_ID_Streamer_fkey" FOREIGN KEY ("ID_Streamer") REFERENCES "Usuario"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatStreamer" ADD CONSTRAINT "ChatStreamer_ID_Viewer_fkey" FOREIGN KEY ("ID_Viewer") REFERENCES "Usuario"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Suscripcion" ADD CONSTRAINT "Suscripcion_ID_Streamer_fkey" FOREIGN KEY ("ID_Streamer") REFERENCES "Usuario"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Suscripcion" ADD CONSTRAINT "Suscripcion_ID_Viewer_fkey" FOREIGN KEY ("ID_Viewer") REFERENCES "Usuario"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Regalo" ADD CONSTRAINT "Regalo_ID_Streamer_fkey" FOREIGN KEY ("ID_Streamer") REFERENCES "Usuario"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Juego" ADD CONSTRAINT "Juego_CategoriaID_fkey" FOREIGN KEY ("CategoriaID") REFERENCES "Categoria"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JuegosEnVideo" ADD CONSTRAINT "JuegosEnVideo_ID_Juego_fkey" FOREIGN KEY ("ID_Juego") REFERENCES "Juego"("ID_Juego") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JuegosEnVideo" ADD CONSTRAINT "JuegosEnVideo_ID_Video_fkey" FOREIGN KEY ("ID_Video") REFERENCES "Video"("ID_Video") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Video" ADD CONSTRAINT "Video_ID_Usuario_fkey" FOREIGN KEY ("ID_Usuario") REFERENCES "Usuario"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Logros" ADD CONSTRAINT "Logros_ID_Usuario_fkey" FOREIGN KEY ("ID_Usuario") REFERENCES "Usuario"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;
