export default function contractModalityHomeOffice(
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
    contractCodes += `emp - **CONTRATO DE TRABALHO - TELETRABALHO(30514)<br>`;
    admissionKit += `Titulo: COLABORADOR | HOME-OFFICE<br>`;
  }

  if (
    (careerLevel === "career-level-specialist-II" || careerLevel === "career-level-coordinator") &&
    contractType !== "contract-temporary"
  ) {
    contractCodes += `emp - **CONTRATO DE TRABALHO - TELETRABALHO CARGO CONFIANÇA 60/40 (30515)<br>`;
    admissionKit += `Titulo: COLABORADOR | HOME-OFFICE | 60/40<br>`;
  }

  return [contractCodes, admissionKit];
}
