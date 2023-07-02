import dayjs from 'dayjs'
import fs from 'fs'
import { XMLBuilder } from '../provider/xml-builder'
import { ServiceNumberGenerator } from '../provider/ service-number-generator'
import { prisma } from '../lib/prisma'
import { AppError } from '../erros/AppError'
import { validateCNPJ } from '../provider/validate-CNPJ'
import { validateCPF } from '../provider/validate-CPF'

interface GenerateXmlInBatchUseCaseRequest {
  dataAtendimento: String
  serieInicial: String
  serieFinal: String
  cpf: String
}

export class GenerateXmlInBatchUseCase {
  async execute({
    dataAtendimento,
    serieInicial,
    serieFinal,
    cpf,
  }: GenerateXmlInBatchUseCaseRequest) {
    // const numeros = serieInicial.split(/\d/,)
    const [serieIniCarac, serieIniNum] = serieInicial.match(/[a-zA-Z]+|\d+/g)
    const [serieFinCarac, serieFinNum] = serieFinal.match(/[a-zA-Z]+|\d+/g)

    if (serieIniCarac !== serieFinCarac) {
      throw new AppError('serie divergente.')
    }
    const dataHoje = dayjs().format('YYYY-MM-DD')

    const seloInicial = parseInt(serieIniNum)
    const seloFinal = parseInt(serieFinNum)

    if (seloInicial > seloFinal) {
      throw new AppError('serie inicial não pode ser maior que a seria final.')
    }

    // const numeroAtendimento = '20230612010004'
    // const chave = '20230612'

    // const feed = XMLBuilder({
    //   seloInicial,
    //   seloFinal,
    //   chave,
    //   serieIniCarac,
    //   dataAtendimento,
    //   numeroAtendimento,
    //   cnpj,
    // })

    // fs.writeFileSync(`${dataAtendimento}.xml`, feed)

    function validarDocumento(documento: string): void {
      const digitos = documento.replace(/[^\d]+/g, '')

      if (digitos.length === 11) {
        const cpfValido = validateCPF(digitos)
        if (cpfValido) {
          throw new AppError('CPF válido')
        } else {
          throw new AppError('CPF inválido')
        }
      } else if (digitos.length === 14) {
        const cnpjValido = validateCNPJ(digitos)
        if (cnpjValido) {
          throw new AppError('CNPJ válido')
        } else {
          throw new AppError('CNPJ inválido')
        }
      } else {
        throw new AppError('Número de dígitos inválido')
      }
    }

    return validarDocumento(cpf)
  }
}
