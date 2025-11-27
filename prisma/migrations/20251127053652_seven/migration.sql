/*
  Warnings:

  - You are about to drop the column `ID_Juego` on the `Video` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Video" DROP CONSTRAINT "Video_ID_Juego_fkey";

-- AlterTable
ALTER TABLE "Video" DROP COLUMN "ID_Juego";

-- CreateTable
CREATE TABLE "JuegosEnVideo" (
    "ID_Juego" INTEGER NOT NULL,
    "ID_Video" INTEGER NOT NULL,

    CONSTRAINT "JuegosEnVideo_pkey" PRIMARY KEY ("ID_Juego","ID_Video")
);

-- AddForeignKey
ALTER TABLE "JuegosEnVideo" ADD CONSTRAINT "JuegosEnVideo_ID_Juego_fkey" FOREIGN KEY ("ID_Juego") REFERENCES "Juego"("ID_Juego") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JuegosEnVideo" ADD CONSTRAINT "JuegosEnVideo_ID_Video_fkey" FOREIGN KEY ("ID_Video") REFERENCES "Video"("ID_Video") ON DELETE RESTRICT ON UPDATE CASCADE;
