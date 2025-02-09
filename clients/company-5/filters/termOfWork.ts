export default function termOfWork(
  contractType: string,
  careerLevel: string,
  position: string,
  isAdvocate: string
): [string, string] {
  let contractCodes = "";
  let admissionKit = "";

  if (contractType !== "contract-apprentice" && contractType !== "contract-inter") {
    contractCodes += `VR: emp - *AUTORIZAÇÃO DE DESCONTO VALE REFEIÇÃO (30518)\n`;
  }

  if (careerLevel === "career-level-director-CLT" || careerLevel === "career-level-director") {
    contractCodes += `DIRETORES - emp - TERMO DE SOLICITAÇÃO DE VEÍCULO CORPORATIVO - LWSA (36797)\n`;
    admissionKit += `Incluir no kit de admissão: TERMO DE SOLICITAÇÃO DE VEÍCULO CORPORATIVO - LWSA\n`;
  }

  if (position.includes("CONSULTOR DE VENDAS ONLINE")) {
    contractCodes += `ADITIVO AO CONTRATO DE TRABALHO_Consultor de Vendas Inside Sales - 36755\n`;
    admissionKit += `Incluir no kit de admissão: ADITIVO AO CONTRATO DE TRABALHO_Consultor de Vendas Inside Sales - 36755\n`;
  }

  if (position.includes("EXECUTIVO DE VENDAS ONLINE I")) {
    contractCodes += `ADITIVO AO CONTRATO DE TRABALHO_Executivo de Vendas Inside Sales - 36756\n`;
    admissionKit += `Incluir no kit de admissão: ADITIVO AO CONTRATO DE TRABALHO_Executivo de Vendas Inside Sales - 36756\n`;
  }

  if (position.includes("COORDENADOR DE VENDAS ONLINE II")) {
    contractCodes += `ADITIVO AO CONTRATO DE TRABALHO_Coordenadores Inside Sales - 36757\n`;
    admissionKit += `Incluir no kit de admissão: ADITIVO AO CONTRATO DE TRABALHO_Coordenadores Inside Sales - 36757\n`;
  }
  if (
    position.includes("CONSULTOR DE RETENCAO") ||
    position.includes("EXECUTIVO DE RETENCAO") ||
    position.includes("COORDENADOR DE RETENCAO")
  ) {
    contractCodes += `ADITIVO NOVOS CONTRATADOS - COSTUMER CARE  2023 + POLÍTICA - 36758\n`;
    admissionKit += `Incluir no kit de admissão: ADITIVO NOVOS CONTRATADOS - COSTUMER CARE  2023 + POLÍTICA - 36758\n`;
  }

  if (isAdvocate === "advocate-yes") {
    admissionKit += `Incluir no kit de admissão: OAB\n`;
  }

  contractCodes += `emp - TERMOS COLABORADORES - LWSA (36833)\n`;

  return [contractCodes, admissionKit];
}
