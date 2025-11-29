/*
  Warnings:

  - Added the required column `descripcion` to the `Logros` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Logros" ADD COLUMN     "descripcion" TEXT NOT NULL;
