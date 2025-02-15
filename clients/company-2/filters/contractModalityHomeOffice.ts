export default function contractModalityHomeOffice(
  careerLevel: string,
  contractType: string,
  department: string,
  state: string
): [string, string] {
  let contractCodes = "";
  let admissionKit = "";

  if (
    careerLevel !== "career-level-specialist-II" &&
    careerLevel !== "career-level-coordinator" &&
    contractType !== "contract-temporary"
  ) {
    contractCodes += `emp - **CONTRATO DE TRABALHO - TELETRABALHO(30514)\n`;
    admissionKit +=
      state === "state-curitiba"
        ? `Titulo: COLABORADOR | HOME-OFFICE | CURITIBA\n`
        : `Titulo: COLABORADOR | HOME-OFFICE | OUTROS\n`;
  }

  if (
    (careerLevel === "career-level-specialist-II" || careerLevel === "career-level-coordinator") &&
    contractType !== "contract-temporary"
  ) {
    contractCodes += `emp - **CONTRATO DE TRABALHO - TELETRABALHO CARGO CONFIANÇA 60/40 (30515)\n`;
    admissionKit +=
      state === "state-curitiba"
        ? `Titulo: 60/40 | HOME-OFFICE | CURITIBA\n`
        : `Titulo: 60/40 | HOME-OFFICE | OUTROS\n`;
  }

  return [contractCodes, admissionKit];
}
