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
    admissionKit += `Titulo: COLABORADOR | HOME-OFFICE`;
  }

  if (
    (careerLevel === "career-level-specialist-II" || careerLevel === "career-level-coordinator") &&
    contractType !== "contract-temporary"
  ) {
    contractCodes += `emp - **CONTRATO DE TRABALHO - TELETRABALHO CARGO CONFIANÇA 60/40 (30515)`;
    admissionKit += `Titulo: 60/40 | HOME-OFFICE`;
  }

  if (state === "state-curitiba") {
    admissionKit += ` | CURTIBA`;
  } else {
    admissionKit += ` | OUTROS`;
  }

  if (department !== "department-others") {
    admissionKit += ` | VENDAS`;
  }

  return [contractCodes, admissionKit];
}
