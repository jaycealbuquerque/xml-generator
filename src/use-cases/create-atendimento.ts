import dayjs from 'dayjs'
import { prisma } from '../lib/prisma'
import { ServiceNumberGenerator } from '../provider/ service-number-generator'

export class CreateAtendimentoUseCase {
  async execute({ dataAtendimento }: any) {
    const atendimentoExist = await prisma.atendimentos.findFirst({
      orderBy: { numero_atendimento: 'desc' },
      where: { data_atendimento: { equals: dataAtendimento } },
    })

    const serviceNumberGenerator = new ServiceNumberGenerator()
    const date = dayjs(dataAtendimento)

    const numeroAtendimento = atendimentoExist?.numero_atendimento.toString()

    const novoNumeroAtendimento = !atendimentoExist
      ? serviceNumberGenerator.geraNumeroAtendimento(date)
      : serviceNumberGenerator.incrementaNumeroAtendimento(numeroAtendimento)

    const createAtendimento = await prisma.atendimentos.create({
      data: {
        numero_atendimento: parseInt(novoNumeroAtendimento),
        data_atendimento: dayjs().format(dataAtendimento),
      },
    })

    return createAtendimento
  }
}
