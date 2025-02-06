export default function termOfWork(
  careerLevel: string,
  workModality: string,
  contractType: string
): string {
  let result = "";

  if (contractType !== "contract-inter") {
    if (workModality === "modality-hybrid") {
      result += `TERMO DE TRABALHO HIBRIDO (30822)
      `;
    }

    if (workModality === "modality-home-office") {
      result += `TERMO DE TELETRABALHO HOME OFFICE (30824)
      `;
    }

    if (workModality === "modality-remote") {
      result += `TERMO DE TELETRABALHO INTEGRAL (36910)
      `;
    }

    result += `sis - AUTORIZAÇÃO PARA DESCONTO DE BENEFÍCIOS (31)
    `;
  }

  // if (
  //   careerLevel === "career-level-coordinator" ||
  //   careerLevel === "career-level-manager" ||
  //   careerLevel === "career-level-tech-leader"
  // ) {
  //   result += `Aditivo Cargo de Confiança () - 36545
  //   `;
  // }

  // if (department === "department-i") {
  //   result += `Aditivo SDR A.E. (cargos diretoria pre vendas) - 36552
  //     `;
  // }

  // if (department === "department-ii" && careerLevel !== "career-level-coordinator") {
  //   result += `Aditivo AE (cargos diretoria 'vendas') - 36551
  //     `;
  // }

  // if (department === "department-ii" && careerLevel === "career-level-coordinator") {
  //   result += `ADITIVO TEAM LEADER A.E. (coordenador de 'vendas') - 36550
  //     `;
  // }

  result += `emp - TERMOS COLABORADORES - OCTADESK (36546)
  `;

  return result;
}
