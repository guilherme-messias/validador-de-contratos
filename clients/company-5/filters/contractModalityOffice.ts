export default function contractModalityOffice(
  careerLevel: string,
  contractType: string
): [string, string] {
  let contractCodes = "";
  let admissionKit = "";

  if (
    careerLevel !== "career-level-specialist-II" &&
    careerLevel !== "career-level-coordinator" &&
    contractType !== "contract-temporary"
  ) {
    contractCodes += `emp - **CONTRATO DE TRABALHO - INDETERMINADO (30511)<br>`;
    admissionKit += `Titulo: COLABORADOR | PRESENCIAL<br>`;
  }
  if (
    (careerLevel === "career-level-specialist-II" || careerLevel === "career-level-coordinator") &&
    contractType !== "contract-temporary"
  ) {
    contractCodes += `emp - CONTRATO DE TRABALHO - INDETERMINADO CARGO CONFIANÇA 60/40 (30513)<br>`;
    admissionKit += `COLABORADOR | PRESENCIAL | 60/40<br>`;
  }

  if (
    careerLevel !== "career-level-specialist-II" &&
    careerLevel !== "career-level-coordinator" &&
    contractType === "contract-temporary"
  ) {
    contractCodes += `emp - **CONTRATO DE TRABALHO - DETERMINADO (30508)<br>`;
    admissionKit += `Sem KIT<br>`;
  }

  if (
    (careerLevel === "career-level-specialist-II" || careerLevel === "career-level-coordinator") &&
    contractType === "contract-temporary"
  ) {
    contractCodes += `emp - **CONTRATO DE TRABALHO - DETERMINADO CARGO CONFIANÇA 60/40 (30510)<br>`;
    admissionKit += `Sem KIT<br>`;
  }

  return [contractCodes, admissionKit];
}
