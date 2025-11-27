/*
  Warnings:

  - Added the required column `CategoriaDeVideo` to the `Video` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Video" ADD COLUMN     "CategoriaDeVideo" TEXT NOT NULL;
