import fs from 'fs'
import { XMLBuilder } from '../provider/xml-builder'
import { AppError } from '../erros/AppError'
import { validateCNPJ } from '../provider/validate-CNPJ'
import { validateCPF } from '../provider/validate-CPF'

interface GenerateXmlInBatchUseCaseRequest {
  numeroAtendimento: String
  chave: String
  dataAtendimento: String
  serieInicial: String
  serieFinal: String
  documento: String
}

export class GenerateXmlUseCase {
  async execute({
    numeroAtendimento,
    chave,
    dataAtendimento,
    serieInicial,
    serieFinal,
    documento,
  }: GenerateXmlInBatchUseCaseRequest) {
    // const numeros = serieInicial.split(/\d/,)
    const [serieIniCarac, serieIniNum] = serieInicial.match(/[a-zA-Z]+|\d+/g)
    const [serieFinCarac, serieFinNum] = serieFinal.match(/[a-zA-Z]+|\d+/g)

    if (serieIniCarac !== serieFinCarac) {
      throw new AppError('serie divergente.')
    }

    const seloInicial = parseInt(serieIniNum)
    const seloFinal = parseInt(serieFinNum)

    if (seloInicial > seloFinal) {
      throw new AppError('serie inicial não pode ser maior que a seria final.')
    }

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

    const feed = await XMLBuilder({
      seloInicial,
      seloFinal,
      chave,
      serieIniCarac,
      dataAtendimento,
      numeroAtendimento,
      documento,
    })

    fs.writeFileSync(`./src/tmp/${numeroAtendimento}.xml`, feed)

    return `xml gerado com sucesso!`
  }
}
