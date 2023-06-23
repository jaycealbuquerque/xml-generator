import { Router } from "express";
import { GenerateXmlInBatcController } from "./GenerateXmlInBatcController";
import { DownloadXmlController } from "./download-xml-controller";


const generateXmlRoutes = Router()

generateXmlRoutes.post('/generateXmlInBatc', new GenerateXmlInBatcController().handle)
generateXmlRoutes.post('/download', new DownloadXmlController().handle)

export { generateXmlRoutes }