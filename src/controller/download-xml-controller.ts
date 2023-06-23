import { Request, Response } from "express";




export class DownloadXmlController {
  async handle(request: Request, response: Response) {
    const { arquivoXml } = request.body

    // const arquivoXml = './2023-07-17.xml'

    return response.download(arquivoXml, `${arquivoXml}`, (err) => {
      if (err) {
        return response.status(400).json(`Erro ao realizar o download: ${err.message}`)
      }
    });

  }
}