/*
  Warnings:

  - You are about to drop the `Logros_usuario` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Logros_usuario" DROP CONSTRAINT "Logros_usuario_ID_Logro_fkey";

-- DropForeignKey
ALTER TABLE "Logros_usuario" DROP CONSTRAINT "Logros_usuario_ID_Usuario_fkey";

-- DropTable
DROP TABLE "Logros_usuario";

-- CreateTable
CREATE TABLE "LogrosUsuario" (
    "ID_Usuario" INTEGER NOT NULL,
    "ID_Logro" INTEGER NOT NULL,
    "Completado" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "LogrosUsuario_pkey" PRIMARY KEY ("ID_Usuario","ID_Logro")
);

-- AddForeignKey
ALTER TABLE "LogrosUsuario" ADD CONSTRAINT "LogrosUsuario_ID_Usuario_fkey" FOREIGN KEY ("ID_Usuario") REFERENCES "Usuario"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LogrosUsuario" ADD CONSTRAINT "LogrosUsuario_ID_Logro_fkey" FOREIGN KEY ("ID_Logro") REFERENCES "Logros"("ID_Logro") ON DELETE RESTRICT ON UPDATE CASCADE;
