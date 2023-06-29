// import { ServiceNumberGenerator } from '../../provider/ service-number-generator'
import { PrismaAtendimentosRepository } from '../../repositories/prisma/prisma-atendimentos-repository'
import { CreateAtendimentoUseCase } from '../create-atendimento'

export function makeCreateAtendimentoUseCase() {
  const prismaAtendimentosRepository = new PrismaAtendimentosRepository()
  const createAtendimentoUseCase = new CreateAtendimentoUseCase(
    prismaAtendimentosRepository,
  )

  return createAtendimentoUseCase
}
