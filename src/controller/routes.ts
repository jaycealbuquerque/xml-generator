import { Router } from "express";
import { GenerateXmlInBatcController } from "./GenerateXmlInBatcController";


const generateXmlRoutes = Router()

generateXmlRoutes.post('/generateXmlInBatc', new GenerateXmlInBatcController().handle)

export { generateXmlRoutes }