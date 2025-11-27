/*
  Warnings:

  - Added the required column `Viendo` to the `ChatStreamer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ChatStreamer" ADD COLUMN     "Viendo" BOOLEAN NOT NULL;
