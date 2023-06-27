/*
  Warnings:

  - Added the required column `data_atendimento` to the `atendimentos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "atendimentos" ADD COLUMN     "data_atendimento" TEXT NOT NULL,
ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP;
