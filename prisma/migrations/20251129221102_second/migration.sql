/*
  Warnings:

  - You are about to drop the column `Completado` on the `Logros` table. All the data in the column will be lost.
  - You are about to drop the column `ID_Usuario` on the `Logros` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Logros" DROP CONSTRAINT "Logros_ID_Usuario_fkey";

-- AlterTable
ALTER TABLE "Logros" DROP COLUMN "Completado",
DROP COLUMN "ID_Usuario";

-- CreateTable
CREATE TABLE "Logros_usuario" (
    "ID_Usuario" INTEGER NOT NULL,
    "ID_Logro" INTEGER NOT NULL,
    "Completado" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Logros_usuario_pkey" PRIMARY KEY ("ID_Usuario","ID_Logro")
);

-- AddForeignKey
ALTER TABLE "Logros_usuario" ADD CONSTRAINT "Logros_usuario_ID_Usuario_fkey" FOREIGN KEY ("ID_Usuario") REFERENCES "Usuario"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Logros_usuario" ADD CONSTRAINT "Logros_usuario_ID_Logro_fkey" FOREIGN KEY ("ID_Logro") REFERENCES "Logros"("ID_Logro") ON DELETE RESTRICT ON UPDATE CASCADE;
