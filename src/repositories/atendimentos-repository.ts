import { Atendimentos } from '@prisma/client'

export interface AtendimentosRepository {
  findAndOrder(dataAtendimento: string): Promise<Atendimentos | null>
  create(
    NumeroAtendimento: string,
    dataAtendimento: string,
  ): Promise<Atendimentos>
}
