import { Request, Response } from 'express'
import { GenerateXmlInBatchUseCase } from '../use-cases/generate-xml-in-batch'

export class GenerateXmlInBatcController {
  async handle(request: Request, response: Response) {
    const { dataAtendimento, serieInicial, serieFinal, cpf } = request.body

    const generateXmlInBatchUseCase = new GenerateXmlInBatchUseCase()

    const generateXmlInBatc = await generateXmlInBatchUseCase.execute({
      dataAtendimento,
      serieInicial,
      serieFinal,
      cpf,
    })

    return response.json(generateXmlInBatc)
  }
}
