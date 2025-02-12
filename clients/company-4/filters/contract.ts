export default function contract(
  contractType: string,
  workModality: string,
  department: string,
  careerLevel: string
): [string, string] {
  let contractCodes = "";
  let admissionKit = "";

  if (
    careerLevel === "career-level-others" &&
    contractType !== "contract-apprentice" &&
    contractType !== "contract-inter"
  ) {
    // puxar cargos normais e diretor clt
    if (department === "department-other") {
      if (workModality === "modality-hybrid" || careerLevel === "career-level-others") {
        contractCodes += `emp - CONTRATO HÍBRIDO - OCTADESK (34524)\n`;
        admissionKit += `Titulo: COLABORADOR | HIBRIDO\n`;
      }
    }
  }

  // aprendiz e estagiario e diretor

  return [contractCodes, admissionKit];
}
