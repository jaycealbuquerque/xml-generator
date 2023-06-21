import { Request, Response } from "express";
import { GenerateXmlInBatchUseCase } from "../use-cases/generate-xml-in-batch";


export class GenerateXmlInBatcController {
  async handle(request: Request, response: Response) {
    const { dataAtendimento,
      serieInicial,
      serieFinal,
      cnpj } = request.body

    const generateXmlInBatchUseCase = new GenerateXmlInBatchUseCase()

    const generateXmlInBatc = await generateXmlInBatchUseCase.execute({
      dataAtendimento,
      serieInicial,
      serieFinal,
      cnpj
    })

    if (generateXmlInBatc instanceof Error) {
      return response.status(400).json(generateXmlInBatc.message)
    }

    return response.json(generateXmlInBatc)
  }
}