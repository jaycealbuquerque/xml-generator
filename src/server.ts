import express from 'express'
import { generateXmlRoutes } from './controller/routes'
import { env } from './env'

const app = express()

app.use(express.json())

BigInt.prototype.toJSON = function () {
  return this.toString()
}

app.use(generateXmlRoutes)

app.listen(env.PORT, () => console.log('🚀 Server Running!'))
