import { Request, Response } from 'express'

export class DownloadXmlController {
  async handle(request: Request, response: Response) {
    // const { arquivoXml } = request.body
    const id = request.params.id

    const arquivoXml = `./src/tmp/${id}.xml`

    return response.download(arquivoXml, `${id}.xml`, (err) => {
      if (err) {
        return response
          .status(400)
          .json(`Erro ao realizar o download: ${err.message}`)
      }
    })
  }
}
