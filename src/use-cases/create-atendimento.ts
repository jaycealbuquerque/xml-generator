import { prisma } from '../lib/prisma'
import { ServiceNumberGenerator } from '../provider/ service-number-generator'

export class CreateAtendimentoUseCase {
  async execute(dataAtendimento) {
    const atendimentoExist = await prisma.atendimentos.findFirst({
      where: { created_at: 2023-06 - 24 },
    })
    // const createAtendimento = await prisma.atendimentos.create({
    //   data: { numero_atendimento: 20230623001005 },
    // })

    // const { numero_atendimento } = await prisma.atendimentos.findFirst({
    //   orderBy: { numero_atendimento: 'asc' },
    // })

    // const gerador = new ServiceNumberGenerator()
    // const numero = numero_atendimento.toString()
    // const numeroGerado = gerador.gerarNumeroAtendimento(numero)
    // const novoGerado = gerador.gerarNumeroAtendimento(numeroGerado)
    // console.log(numeroGerado, novoGerado)
    // const dataInformada = dayjs('2023-04-11')
    // const antendimentoInformado =
    //   gerador.gerarNumeroAtendimentoComData(dataInformada)
    // console.log(antendimentoInformado)
    return atendimentoExist
  }
}
