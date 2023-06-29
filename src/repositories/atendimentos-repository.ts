import { Atendimentos } from '@prisma/client'

export interface atendimentosRepository {
  findAndOrder(dataAtendimento: string): Promise<Atendimentos | null>
  create(
    NumeroAtendimento: string,
    dataAtendimento: string,
  ): Promise<Atendimentos>
}
