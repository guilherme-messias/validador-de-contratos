export default function termOfWork(
  contractType: string,
  careerLevel: string,
  position: string
): string {
  let result = "";
  if (contractType !== "contract-apprentice" && contractType !== "contract-inter") {
    result += `VR: emp - *AUTORIZAÇÃO DE DESCONTO VALE REFEIÇÃO (30518)
     `;
  }

  if (careerLevel === "career-level-director-CLT" || careerLevel === "career-level-director") {
    result += `DIRETORES - emp - TERMO DE SOLICITAÇÃO DE VEÍCULO CORPORATIVO - LWSA (36797)
    `;
  }

  if (position.includes("CONSULTOR DE VENDAS ONLINE")) {
    result += `ADITIVO AO CONTRATO DE TRABALHO_Consultor de Vendas Inside Sales - 36755"   
      `;
  }

  if (position.includes("EXECUTIVO DE VENDAS ONLINE I")) {
    result += `ADITIVO AO CONTRATO DE TRABALHO_Executivo de Vendas Inside Sales - 36756"      
      `;
  }

  if (position.includes("COORDENADOR DE VENDAS ONLINE II")) {
    result += `ADITIVO AO CONTRATO DE TRABALHO_Coordenadores Inside Sales - 36757" + "\n
      `;
  }
  if (
    position.includes("CONSULTOR DE RETENCAO") ||
    position.includes("EXECUTIVO DE RETENCAO") ||
    position.includes("COORDENADOR DE RETENCAO")
  ) {
    result += `ADITIVO NOVOS CONTRATADOS - COSTUMER CARE  2023 + POLÍTICA - 36758" + "\n
      `;
  }

  result += `emp - TERMOS COLABORADORES - LWSA (36833)
  `;

  return result;
}
