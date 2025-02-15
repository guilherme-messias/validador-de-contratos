export default function contractModalityOffice(
  careerLevel: string,
  contractType: string,
  department: string,
  state: string
): [string, string] {
  let contractCodes = "";
  let admissionKit = "";

  if (
    (careerLevel === "career-level-others" || careerLevel === "career-level-director-CLT") &&
    contractType !== "contract-temporary"
  ) {
    contractCodes += `emp - **CONTRATO DE TRABALHO - INDETERMINADO (30511)<br>`;
    admissionKit += `Titulo: COLABORADOR | PRESENCIAL | CURITIBA`;
  }
  if (
    (careerLevel === "career-level-specialist" || careerLevel === "career-level-tech-leader") &&
    contractType !== "contract-temporary"
  ) {
    contractCodes += `emp - CONTRATO DE TRABALHO - INDETERMINADO CARGO CONFIANÇA 60/40 (30513)<br>`;
    admissionKit += `Titulo: 60/40 | PRESENCIAL | CURITIBA`;
  }

  if (
    (careerLevel === "career-level-coordinator" || careerLevel === "career-level-manager") &&
    contractType !== "contract-temporary"
  ) {
    contractCodes += `emp - CONTRATO DE TRABALHO - INDETERMINADO CARGO CONFIANÇA 60/40 (30513)<br>`;
    admissionKit += `Titulo: 60/40 - LIDER | PRESENCIAL | CURITIBA`;
  }

  if (
    (careerLevel === "career-level-others" || careerLevel === "career-level-director-CLT") &&
    contractType === "contract-temporary"
  ) {
    contractCodes += `emp - **CONTRATO DE TRABALHO - DETERMINADO (30508)<br>`;
  }

  if (
    (careerLevel === "career-level-specialist" ||
      careerLevel === "career-level-tech-leader" ||
      careerLevel === "career-level-coordinator" ||
      careerLevel === "career-level-manager") &&
    contractType === "contract-temporary"
  ) {
    contractCodes += `emp - **CONTRATO DE TRABALHO - DETERMINADO CARGO CONFIANÇA 60/40 (30510)<br>`;
  }

  if (department !== "department-others") {
    admissionKit += ` | VENDAS`;
  }

  return [contractCodes, admissionKit];
}
