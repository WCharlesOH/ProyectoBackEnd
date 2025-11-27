/*
  Warnings:

  - You are about to drop the column `NivelViewer` on the `Suscripcion` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[NombreUsuario]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `ImagenPerfil` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `URL_Pagina` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Suscripcion" DROP COLUMN "NivelViewer";

-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "ImagenPerfil" TEXT NOT NULL,
ADD COLUMN     "URL_Pagina" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "ChatStreamer" (
    "ID_Streamer" INTEGER NOT NULL,
    "ID_Viewer" INTEGER NOT NULL,
    "NivelViewer" INTEGER NOT NULL DEFAULT 0,
    "Habilitado" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "ChatStreamer_pkey" PRIMARY KEY ("ID_Streamer","ID_Viewer")
);

-- CreateTable
CREATE TABLE "Video" (
    "ID_Video" SERIAL NOT NULL,
    "Titulo" TEXT NOT NULL,
    "Url" TEXT NOT NULL,
    "Duracion" INTEGER,
    "FechaSubida" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ID_Juego" INTEGER NOT NULL,
    "ID_Usuario" INTEGER NOT NULL,

    CONSTRAINT "Video_pkey" PRIMARY KEY ("ID_Video")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_NombreUsuario_key" ON "Usuario"("NombreUsuario");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- AddForeignKey
ALTER TABLE "ChatStreamer" ADD CONSTRAINT "ChatStreamer_ID_Streamer_fkey" FOREIGN KEY ("ID_Streamer") REFERENCES "Usuario"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatStreamer" ADD CONSTRAINT "ChatStreamer_ID_Viewer_fkey" FOREIGN KEY ("ID_Viewer") REFERENCES "Usuario"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Video" ADD CONSTRAINT "Video_ID_Juego_fkey" FOREIGN KEY ("ID_Juego") REFERENCES "Juego"("ID_Juego") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Video" ADD CONSTRAINT "Video_ID_Usuario_fkey" FOREIGN KEY ("ID_Usuario") REFERENCES "Usuario"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;
