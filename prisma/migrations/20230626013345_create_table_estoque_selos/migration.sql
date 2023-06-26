-- CreateTable
CREATE TABLE "estoque-selos" (
    "numeroSerie" TEXT NOT NULL,
    "codigoSelo" INTEGER NOT NULL,
    "status" INTEGER NOT NULL,
    "dataRecebimento" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "estoque-selos_pkey" PRIMARY KEY ("numeroSerie")
);
