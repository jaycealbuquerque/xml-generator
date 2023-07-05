import { Request, Response } from 'express'
import { GenerateXmlUseCase } from '../use-cases/generate-xml'

export class GenerateXmlController {
  async handle(request: Request, response: Response) {
    const {
      numeroAtendimento,
      chave,
      dataAtendimento,
      serieInicial,
      serieFinal,
      documento,
    } = request.body

    const generateXmlUseCase = new GenerateXmlUseCase()

    const generateXml = await generateXmlUseCase.execute({
      numeroAtendimento,
      chave,
      dataAtendimento,
      serieInicial,
      serieFinal,
      documento,
    })

    return response.json(generateXml)
  }
}
