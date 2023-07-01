export function validateCPF(cpf: string): boolean {
  // Remove caracteres não numéricos
  cpf = cpf.replace(/[^\d]+/g, '')

  // Verifica se possui 11 dígitos
  if (cpf.length !== 11) {
    return false
  }

  // Verifica se todos os dígitos são iguais (ex: 00000000000)
  if (/^(\d)\1+$/.test(cpf)) {
    return false
  }

  // Validação do primeiro dígito verificador
  let sum = 0
  let weight = 10

  for (let i = 0; i < 9; i++) {
    sum += parseInt(cpf.charAt(i)) * weight
    weight--
  }

  let digit = sum % 11 < 2 ? 0 : 11 - (sum % 11)
  if (parseInt(cpf.charAt(9)) !== digit) {
    return false
  }

  // Validação do segundo dígito verificador
  sum = 0
  weight = 11

  for (let i = 0; i < 10; i++) {
    sum += parseInt(cpf.charAt(i)) * weight
    weight--
  }

  digit = sum % 11 < 2 ? 0 : 11 - (sum % 11)
  if (parseInt(cpf.charAt(10)) !== digit) {
    return false
  }

  return true
}
