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

  public incrementaNumeroAtendimento(numero?: string): string {
    const doDia = numero.substr(0, 8)
    const contadorSt: string = numero.substr(-6)

    this.contador = parseInt(contadorSt, 10)

    this.incrementarContador()

    const contadorStr: string = this.contador.toString().padStart(6, '0')
    const numeroGerado: string = doDia + contadorStr

    return numeroGerado
  }

  public geraNumeroAtendimento(data: dayjs.Dayjs): string {
    const numeroDia: string = this.obterNumeroDia(data)
    this.contador = 1000
    this.incrementarContador()
    const contadorStr: string = this.contador.toString().padStart(6, '0')
    const numeroGerado: string = numeroDia + contadorStr
    return numeroGerado
  }
}
