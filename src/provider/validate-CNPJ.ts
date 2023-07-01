export function validateCNPJ(cnpj: string): boolean {
  // Remove caracteres não numéricos
  cnpj = cnpj.replace(/[^\d]+/g, '')

  // Verifica se possui 14 dígitos
  if (cnpj.length !== 14) {
    return false
  }

  // Verifica se todos os dígitos são iguais (ex: 00000000000000)
  if (/^(\d)\1+$/.test(cnpj)) {
    return false
  }

  // Validação do primeiro dígito verificador
  let sum = 0
  let weight = 5

  for (let i = 0; i < 12; i++) {
    sum += parseInt(cnpj.charAt(i)) * weight
    weight--
    if (weight < 2) {
      weight = 9
    }
  }

  let digit = sum % 11 < 2 ? 0 : 11 - (sum % 11)
  if (parseInt(cnpj.charAt(12)) !== digit) {
    return false
  }

  // Validação do segundo dígito verificador
  sum = 0
  weight = 6

  for (let i = 0; i < 13; i++) {
    sum += parseInt(cnpj.charAt(i)) * weight
    weight--
    if (weight < 2) {
      weight = 9
    }
  }

  digit = sum % 11 < 2 ? 0 : 11 - (sum % 11)
  if (parseInt(cnpj.charAt(13)) !== digit) {
    return false
  }

  return true
}
