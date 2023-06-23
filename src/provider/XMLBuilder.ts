import { Interface } from "readline"
import xmlbuilder from "xmlbuilder"

interface data {
  seloInicial: number
  seloFinal: number
  chave: string
  serieIniCarac: string
  dataAtendimento: string
  numeroAtendimento: string
  cnpj: string
}
function XMLBuilder({ seloInicial,
  seloFinal,
  chave,
  serieIniCarac,
  dataAtendimento,
  numeroAtendimento,
  cnpj }: data) {

  var root = xmlbuilder.create('movimentacao', { encoding: 'UTF-8' })


    .att({ 'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance', 'xsi:noNamespaceSchemaLocation': 'movimentacao.xsd' })
    .ele('codigoServentia', '050011').up()

  for (let i = seloInicial; i <= seloFinal; i++) {
    let chaveCartorio = `${chave}${i}`
    let seloInicialDigito = `${serieIniCarac}${i.toString().padStart(6, '0')}`;


    root.ele('item')
      .ele('chaveCartorio', chaveCartorio).up()
      .ele('data', dataAtendimento).up()
      .ele('ato')
      .ele('codigo', '002021').up()
      .ele('selo')
      .ele('codigo', '14').up()
      .up()
      .up()
      .ele('talao', numeroAtendimento).up()
      .ele('quantidadeAtos', '1').up()
      .ele('quantidadeSelos', '1').up()
      .ele('quantidadeExtra', '0').up()
      .ele('valorDocumento', '0.0').up()
      .ele('serieInicial', seloInicialDigito).up()
      .ele('serieFinal', seloInicialDigito).up()
      .ele('distribuicaoEletronica', 'false').up()
      .ele('tipoGeracao', 'NORMAL').up()
      .ele('tipoCobranca', 'NORMAL').up()
      .ele('tipoMovimentacao', 'RESUMIDA').up()
      .ele('valor')
      .ele('emolumento', '3.6').up()
      .ele('ferc', '1.42').up()
      .ele('fermoju', '0.23').up()
      .up()
      .ele('seloPendente', 'false').up()
      .ele('cpfCnpj', cnpj).up()
      .ele('nrLivro', '0').up()
      .ele('nrFolhaInicial', '0').up()
      .ele('nrFolhaFinal', '0').up()
      .ele('nrCartaoAutografo', '0').up()
      .ele('nrOutorgantes', '1').up()
      .up()

  };

  return root.root().end({ pretty: true });
}

export { XMLBuilder }