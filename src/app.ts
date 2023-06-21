import xmlbuilder from "xmlbuilder"
import fs from "fs"



const dataAtendimento = '2023-07-17'
const numeroAtendimento = 20230612010004
const chave = 20230612
const seloInicial = 926663
const seloFinal = 926858
const cnpj = '04798469001140'



var useXmlBuilder = function () {

  var root = xmlbuilder.create('movimentacao', { encoding: 'UTF-8' })


    .att({ 'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance', 'xsi:noNamespaceSchemaLocation': 'movimentacao.xsd' })
    .ele('codigoServentia', '050011').up()

  for (let i = seloInicial; i <= seloFinal; i++) {
    let chaveCartorio = `${chave}${i}`
    let seloInicialDigito = `AI${i}`;


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

const feed = useXmlBuilder()

fs.writeFileSync(`${dataAtendimento}.xml`, feed)
