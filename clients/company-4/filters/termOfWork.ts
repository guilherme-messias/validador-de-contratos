export default function termOfWork(careerLevel: string, department: string): string {
  let result = "";

  if (
    careerLevel === "career-level-coordinator" ||
    careerLevel === "career-level-manager" ||
    careerLevel === "career-level-tech-leader"
  ) {
    result += `Aditivo Cargo de Confiança () - 36545
    `;
  }

  if (department === "department-i") {
    result += `Aditivo SDR A.E. (cargos diretoria pre vendas) - 36552   
      `;
  }

  if (department === "department-ii" && careerLevel !== "career-level-coordinator") {
    result += `Aditivo AE (cargos diretoria 'vendas') - 36551      
      `;
  }

  if (department === "department-ii" && careerLevel === "career-level-coordinator") {
    result += `ADITIVO TEAM LEADER A.E. (coordenador de 'vendas') - 36550      
      `;
  }

  result += `emp - TERMOS COLABORADORES - OCTADESK (36546)
  `;

  return result;
}
