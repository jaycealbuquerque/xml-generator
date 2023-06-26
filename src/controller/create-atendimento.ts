import { Request, Response } from 'express'
import { CreateAtendimentoUseCase } from '../use-cases/create-atendimento'

export class CreateAtendimentoController {
  async handle(request: Request, response: Response) {
    const { dataAtendimento } = request.body

    const createAtendimentoUseCase = new CreateAtendimentoUseCase()

    const createAtendimento = await createAtendimentoUseCase.execute({
      dataAtendimento,
    })

    return response.json(createAtendimento)
  }
}
