/*
  Warnings:

  - Added the required column `office` to the `Goker` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Goker" ADD COLUMN     "office" TEXT NOT NULL;
