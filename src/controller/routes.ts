import { Router } from 'express'
import { GenerateXmlController } from './generate-xml-controller'
import { DownloadXmlController } from './download-xml-controller'
import { CreateAtendimentoController } from './create-atendimento'

const generateXmlRoutes = Router()

generateXmlRoutes.post('/generateXml', new GenerateXmlController().handle)
generateXmlRoutes.get('/download/:id', new DownloadXmlController().handle)
generateXmlRoutes.post(
  '/atendimentos',
  new CreateAtendimentoController().handle,
)

export { generateXmlRoutes }
