import dayjs from 'dayjs'
import { ServiceNumberGenerator } from '../provider/ service-number-generator'
import { AtendimentosRepository } from '../repositories/atendimentos-repository'

interface CreateAtendimentoUseCaseResponse {
  dataAtendimento: string
}
export class CreateAtendimentoUseCase {
  constructor(private atendimentosRepository: AtendimentosRepository) {}

  async execute({ dataAtendimento }: CreateAtendimentoUseCaseResponse) {
    const serviceNumberGenerator = new ServiceNumberGenerator()

    const atendimentoExist = await this.atendimentosRepository.findAndOrder(
      dataAtendimento,
    )

    const date = dayjs(dataAtendimento)

    const numeroAtendimento = atendimentoExist?.numero_atendimento.toString()

    const novoNumeroAtendimento = !atendimentoExist
      ? serviceNumberGenerator.geraNumeroAtendimento(date)
      : serviceNumberGenerator.incrementaNumeroAtendimento(numeroAtendimento)

    const createAtendimento = await this.atendimentosRepository.create(
      novoNumeroAtendimento,
      dataAtendimento,
    )

    return createAtendimento
  }
}
