export default function termOfWork(careerLevel: string, department: string): string {
  let contractCodes = "";

  if (
    careerLevel === "career-level-coordinator" ||
    careerLevel === "career-level-manager" ||
    careerLevel === "career-level-tech-leader"
  ) {
    contractCodes += `Aditivo Cargo de Confiança () - 36545
    `;
  }

  if (department === "department-i") {
    contractCodes += `Aditivo SDR A.E. (cargos diretoria pre vendas) - 36552   
      `;
  }

  if (department === "department-ii" && careerLevel !== "career-level-coordinator") {
    contractCodes += `Aditivo AE (cargos diretoria 'vendas') - 36551      
      `;
  }

  if (department === "department-ii" && careerLevel === "career-level-coordinator") {
    contractCodes += `ADITIVO TEAM LEADER A.E. (coordenador de 'vendas') - 36550      
      `;
  }

  contractCodes += `emp - TERMOS COLABORADORES - OCTADESK (36546)
  `;

  return contractCodes;
}
