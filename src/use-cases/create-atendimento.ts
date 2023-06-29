import dayjs from 'dayjs'
import { ServiceNumberGenerator } from '../provider/ service-number-generator'
import { PrismaAtendimentosRepository } from '../repositories/prisma/prisma-atendimentos-repository'

interface CreateAtendimentoUseCaseResponse {
  dataAtendimento: string
}
export class CreateAtendimentoUseCase {
  async execute({ dataAtendimento }: CreateAtendimentoUseCaseResponse) {
    const prismaAtendimentosRepository = new PrismaAtendimentosRepository()
    const serviceNumberGenerator = new ServiceNumberGenerator()

    const atendimentoExist = await prismaAtendimentosRepository.findAndOrder(
      dataAtendimento,
    )

    const date = dayjs(dataAtendimento)

    const numeroAtendimento = atendimentoExist?.numero_atendimento.toString()

    const novoNumeroAtendimento = !atendimentoExist
      ? serviceNumberGenerator.geraNumeroAtendimento(date)
      : serviceNumberGenerator.incrementaNumeroAtendimento(numeroAtendimento)

    const createAtendimento = await prismaAtendimentosRepository.create(
      novoNumeroAtendimento,
      dataAtendimento,
    )

    return createAtendimento
  }
}
