import { Request, Response } from 'express'
import { makeCreateAtendimentoUseCase } from '../use-cases/factories/make-create-atendimento'

export class CreateAtendimentoController {
  async handle(request: Request, response: Response) {
    const { dataAtendimento } = request.body

    const createAtendimentoUseCase = makeCreateAtendimentoUseCase()

    const createAtendimento = await createAtendimentoUseCase.execute({
      dataAtendimento,
    })

    return response.json(createAtendimento)
  }
}
