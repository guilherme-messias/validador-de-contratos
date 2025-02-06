export default function termOfWork(
  contractType: string,
  careerLevel: string,
  department: string
): string {
  let contractCodes = "";
  if (
    contractType !== "contract-apprentice" &&
    contractType !== "contract-inter" &&
    department !== "department-others"
  ) {
    contractCodes += `TERMO ADITIVO AO CONTRATO DE TRABALHO - CONNECTPLUG - 36544
     `;
  }

  if (careerLevel === "career-level-coordinator" || careerLevel === "career-level-manager") {
    contractCodes += `emp - TERMOS GESTORES - CPLUG (36697) - COORDENACAO E GERENCIA
    `;
  }

  contractCodes += `emp - TERMOS COLABORADORES - CPLUG (36667)
  `;

  return contractCodes;
}
