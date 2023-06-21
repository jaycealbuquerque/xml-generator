import dayjs from 'dayjs'


interface GenerateXmlInBatchUseCaseRequest {
  dataAtendimento: String,
  serieInicial: String,
  serieFinal: String,
  cnpj: String,
}

export class GenerateXmlInBatchUseCase {
  async execute({ dataAtendimento,
    serieInicial,
    serieFinal,
    cnpj }: GenerateXmlInBatchUseCaseRequest) {


    const dataHoje = dayjs().format('YYYY-MM-DD')
    const seloInicial = parseInt(serieInicial.slice(2));
    const seloFinal = parseInt(serieFinal.slice(2));
    if (seloInicial > seloFinal) {
      return new Error("serie inicial não pode ser maior que a seria final.")
    }

    return {
      dataHoje,
      seloInicial,
      seloFinal,
      cnpj
    }
  }
}