import express from 'express'
import { generateXmlRoutes } from './controller/routes'

const app = express()

app.use(express.json())

app.use(generateXmlRoutes)

app.listen(3333, () => console.log('🚀 Server Running!'))