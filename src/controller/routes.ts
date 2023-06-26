import { Router } from 'express'
import { GenerateXmlInBatcController } from './GenerateXmlInBatcController'
import { DownloadXmlController } from './download-xml-controller'
import { CreateAtendimentoController } from './create-atendimento'

const generateXmlRoutes = Router()

generateXmlRoutes.post(
  '/generateXmlInBatc',
  new GenerateXmlInBatcController().handle,
)
generateXmlRoutes.post('/download', new DownloadXmlController().handle)
generateXmlRoutes.post(
  '/atendimentos',
  new CreateAtendimentoController().handle,
)

export { generateXmlRoutes }
