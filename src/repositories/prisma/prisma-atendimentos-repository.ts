import { AtendimentosRepository } from '../atendimentos-repository'
import { prisma } from '../../lib/prisma'
import dayjs from 'dayjs'

export class PrismaAtendimentosRepository implements AtendimentosRepository {
  async findAndOrder(dataAtendimento: string) {
    const atendimento = await prisma.atendimentos.findFirst({
      orderBy: { numero_atendimento: 'desc' },
      where: { data_atendimento: { equals: dataAtendimento } },
    })

    return atendimento
  }

  async create(NumeroAtendimento: string, dataAtendimento: string) {
    const atendimento = await prisma.atendimentos.create({
      data: {
        numero_atendimento: BigInt(NumeroAtendimento),
        data_atendimento: dayjs().format(dataAtendimento),
      },
    })
    return atendimento
  }
}
