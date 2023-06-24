import dayjs from 'dayjs'

export class ServiceNumberGenerator {
  private contador: number

  constructor() {
    this.contador = 0
  }

  private obterNumeroDia(data: dayjs.Dayjs): string {
    const ano: string = data.format('YYYY')
    const mes: string = data.format('MM')
    const dia: string = data.format('DD')
    return ano + mes + dia
  }

  private incrementarContador(): void {
    this.contador++
    if (this.contador > 999999) {
      this.contador = 1000
    }
  }

  public gerarNumeroAtendimento(numero?: string): string {
    const dataAtual: dayjs.Dayjs = dayjs()

    const numeroDiaAtual: string = this.obterNumeroDia(dataAtual)

    if (!numero || !numero.startsWith(numeroDiaAtual)) {
      this.contador = 1000
    } else {
      const contadorStr: string = numero.substr(-6)
      this.contador = parseInt(contadorStr, 10)
    }

    this.incrementarContador()

    const contadorStr: string = this.contador.toString().padStart(6, '0')
    const numeroGerado: string = numeroDiaAtual + contadorStr

    return numeroGerado
  }

  public gerarNumeroAtendimentoComData(data: dayjs.Dayjs): string {
    const numeroDia: string = this.obterNumeroDia(data)
    this.contador = 1000
    this.incrementarContador()
    const contadorStr: string = this.contador.toString().padStart(6, '0')
    const numeroGerado: string = numeroDia + contadorStr
    return numeroGerado
  }
}
