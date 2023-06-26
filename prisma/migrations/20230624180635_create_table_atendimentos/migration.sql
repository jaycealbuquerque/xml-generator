-- CreateTable
CREATE TABLE "atendimentos" (
    "id" TEXT NOT NULL,
    "numero_atendimento" BIGINT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "atendimentos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "atendimentos_id_key" ON "atendimentos"("id");

-- CreateIndex
CREATE UNIQUE INDEX "atendimentos_numero_atendimento_key" ON "atendimentos"("numero_atendimento");
