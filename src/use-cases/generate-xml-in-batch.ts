import dayjs from 'dayjs'
import fs from 'fs'
import { XMLBuilder } from '../provider/xml-builder'
import { ServiceNumberGenerator } from '../provider/ service-number-generator'

interface GenerateXmlInBatchUseCaseRequest {
  dataAtendimento: String
  serieInicial: String
  serieFinal: String
  cnpj: String
}

export class GenerateXmlInBatchUseCase {
  async execute({
    dataAtendimento,
    serieInicial,
    serieFinal,
    cnpj,
  }: GenerateXmlInBatchUseCaseRequest) {
    // const numeros = serieInicial.split(/\d/,)
    const [serieIniCarac, serieIniNum] = serieInicial.match(/[a-zA-Z]+|\d+/g)
    const [serieFinCarac, serieFinNum] = serieFinal.match(/[a-zA-Z]+|\d+/g)

    if (serieIniCarac != serieFinCarac) {
      return new Error('serie divergente.')
    }
    const dataHoje = dayjs().format('YYYY-MM-DD')

    const seloInicial = parseInt(serieIniNum)
    const seloFinal = parseInt(serieFinNum)

    if (seloInicial > seloFinal) {
      return new Error('serie inicial não pode ser maior que a seria final.')
    }

    const numeroAtendimento = '20230612010004'
    const chave = '20230612'

    const feed = XMLBuilder({
      seloInicial,
      seloFinal,
      chave,
      serieIniCarac,
      dataAtendimento,
      numeroAtendimento,
      cnpj,
    })

    fs.writeFileSync(`${dataAtendimento}.xml`, feed)

    const gerador = new ServiceNumberGenerator()
    // const numero = '20230624999998'
    // const numeroGerado = gerador.gerarNumeroAtendimento(numero)
    // const novoGerado = gerador.gerarNumeroAtendimento(numeroGerado)
    // console.log(numeroGerado, novoGerado)
    // const dataInformada = dayjs('2023-04-11')
    // const antendimentoInformado =
    //   gerador.gerarNumeroAtendimentoComData(dataInformada)
    // console.log(antendimentoInformado)
  }
}
