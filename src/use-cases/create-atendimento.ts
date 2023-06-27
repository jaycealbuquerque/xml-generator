import dayjs from 'dayjs'
import { prisma } from '../lib/prisma'
import { ServiceNumberGenerator } from '../provider/ service-number-generator'

export class CreateAtendimentoUseCase {
  async execute({ dataAtendimento }) {
    const atendimentoExist = await prisma.atendimentos.findFirst({
      orderBy: { numero_atendimento: 'desc' },
      where: { data_atendimento: { equals: dataAtendimento } },
    })

    // const hoje = dayjs().format('2023-06-24')
    // const createAtendimento = await prisma.atendimentos.create({
    //   data: {
    //     numero_atendimento: 20230624001003,
    //     data_atendimento: hoje,
    //   },
    // })

    // const { numero_atendimento } = await prisma.atendimentos.findFirst({
    //   orderBy: { numero_atendimento: 'asc' },
    // })
    // console.log(atendimentoExist?.numero_atendimento.toString())

    // const gerador = new ServiceNumberGenerator()
    // const numero = atendimentoExist?.numero_atendimento.toString()
    // const numeroGerado = gerador.gerarNumeroAtendimento(numero)
    // const novoGerado = gerador.gerarNumeroAtendimento(numeroGerado)
    // console.log(numeroGerado, novoGerado)

    // const dataInformada = dayjs('2023-04-11')
    // const antendimentoInformado =
    //   gerador.gerarNumeroAtendimentoComData(dataInformada)
    // console.log(antendimentoInformado)
    // console.log(atendimentoExist)

    BigInt.prototype.toJSON = function () {
      return this.toString()
    }

    return atendimentoExist
  }
}
