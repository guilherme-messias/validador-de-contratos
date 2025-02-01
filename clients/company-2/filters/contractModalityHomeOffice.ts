export default function contractModalityHomeOffice(
  careerLevel: string,
  contractType: string
): string {
  let result = "";

  if (
    careerLevel !== "career-level-specialist-II" &&
    careerLevel !== "career-level-coordinator" &&
    contractType !== "contract-temporary"
  ) {
    result += `emp - **CONTRATO DE TRABALHO - TELETRABALHO(30514)
    `;
  }

  if (
    (careerLevel === "career-level-specialist-II" || careerLevel === "career-level-coordinator") &&
    contractType !== "contract-temporary"
  ) {
    result += `emp - **CONTRATO DE TRABALHO - TELETRABALHO CARGO CONFIANÇA 60/40 (30515)   
      `;
  }

  return result;
}
