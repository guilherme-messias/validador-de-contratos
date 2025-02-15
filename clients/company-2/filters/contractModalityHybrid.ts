export default function contractModalityHybrid(
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
    contractCodes += `emp - CONTRATO DE TRABALHO HÍBRIDO lwsa - ATUALIZADO (36619)<br>`;
    admissionKit += `Titulo: COLABORADOR | HIBRIDO`;
  }
  if (
    (careerLevel === "career-level-specialist" || careerLevel === "career-level-tech-leader") &&
    contractType !== "contract-temporary"
  ) {
    contractCodes += `emp - CONTRATO DE TRABALHO HÍBRIDO CARGO DE CONFIANÇA 60.40 LOCAWEB (36549)<br>`;
    admissionKit += `Titulo: 60/40 | HIBRIDO`;
  }

  if (
    (careerLevel === "career-level-coordinator" || careerLevel === "career-level-manager") &&
    contractType !== "contract-temporary"
  ) {
    contractCodes += `emp - CONTRATO DE TRABALHO HÍBRIDO CARGO DE CONFIANÇA 60.40 LOCAWEB (36549)<br>`;
    admissionKit += `Titulo: 60/40 - LIDER | HIBRIDO`;
  }

  if (
    (careerLevel === "career-level-others" || careerLevel === "career-level-director-CLT") &&
    contractType === "contract-temporary"
  ) {
    contractCodes += `emp - CONTRATO DE TRABALHO HÍBRIDO DETERMINADO lwsa - ATUALIZADO (36620)<br>`;
  }

  if (
    (careerLevel === "career-level-specialist" ||
      careerLevel === "career-level-tech-leader" ||
      careerLevel === "career-level-coordinator" ||
      careerLevel === "career-level-manager") &&
    contractType === "contract-temporary"
  ) {
    contractCodes += `emp - CONTRATO DE TRABALHO HÍBRIDO DETERMINADO 60.40 - ATUALIZADO (36621)<br>`;
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
