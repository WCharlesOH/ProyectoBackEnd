-- DropForeignKey
ALTER TABLE "Video" DROP CONSTRAINT "Video_ID_Juego_fkey";

-- AlterTable
ALTER TABLE "Video" ALTER COLUMN "ID_Juego" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Video" ADD CONSTRAINT "Video_ID_Juego_fkey" FOREIGN KEY ("ID_Juego") REFERENCES "Juego"("ID_Juego") ON DELETE SET NULL ON UPDATE CASCADE;
