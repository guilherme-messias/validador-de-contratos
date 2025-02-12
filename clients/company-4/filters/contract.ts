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
    if (department === "department-other") {
      if (workModality === "modality-hybrid" && careerLevel === "career-level-others") {
        contractCodes += `emp - CONTRATO HÍBRIDO - OCTADESK (34524)\n`;
        admissionKit += `Titulo: COLABORADOR | HIBRIDO\n`;
      }

      if (workModality === "modality-home-office" && careerLevel === "career-level-others") {
        contractCodes += `emp - CONTRATO TELETRABALHO - OCTADESK (33169)\n`;
        admissionKit += `Titulo: COLABORADOR | HOME-OFFICE\n`;
      }
    }

    if (department === "department-i") {
      if (workModality === "modality-hybrid" && careerLevel === "career-level-others") {
        contractCodes += `emp - CONTRATO HÍBRIDO - OCTADESK (34524)\n`;
        admissionKit += `Titulo: COLABORADOR | HIBRIDO | PRE VENDAS\n`;
      }

      if (workModality === "modality-home-office" && careerLevel === "career-level-others") {
        contractCodes += `emp - CONTRATO TELETRABALHO - OCTADESK (33169)\n`;
        admissionKit += `Titulo: COLABORADOR | HOME-OFFICE | PRE VENDAS\n`;
      }
    }

    if (department === "department-ii") {
      if (workModality === "modality-hybrid" && careerLevel === "career-level-others") {
        contractCodes += `emp - CONTRATO HÍBRIDO - OCTADESK (34524)\n`;
        admissionKit += `Titulo: COLABORADOR | HIBRIDO | VENDAS\n`;
      }

      if (workModality === "modality-home-office" && careerLevel === "career-level-others") {
        contractCodes += `emp - CONTRATO TELETRABALHO - OCTADESK (33169)\n`;
        admissionKit += `Titulo: COLABORADOR | HOME-OFFICE | VENDAS\n`;
      }
    }
  }

  if (
    careerLevel === "career-level-coordinator" ||
    careerLevel === "career-level-manager" ||
    careerLevel === "career-level-tech-leader"
  ) {
    if (department === "department-other") {
      if (workModality === "modality-hybrid") {
        contractCodes += `emp - CONTRATO HÍBRIDO - OCTADESK (34524)\n`;
        admissionKit += `Titulo: COLABORADOR | HIBRIDO | 60/40\n`;
      }

      if (workModality === "modality-home-office") {
        contractCodes += `emp - CONTRATO TELETRABALHO - OCTADESK (33169)\n`;
        admissionKit += `Titulo: COLABORADOR | HOME-OFFICE | 60/40\n`;
      }
    }

    if (department === "department-ii") {
      if (workModality === "modality-hybrid" && careerLevel === "career-level-coordinator") {
        contractCodes += `emp - CONTRATO HÍBRIDO - OCTADESK (34524)\n`;
        admissionKit += `Titulo: COLABORADOR | HIBRIDO | 60/40\n`;
      }

      if (workModality === "modality-home-office" && careerLevel === "career-level-coordinator") {
        contractCodes += `emp - CONTRATO TELETRABALHO - OCTADESK (33169)\n`;
        admissionKit += `Titulo: COLABORADOR | HOME-OFFICE | 60/40\n`;
      }
    }
  }

  // aprendiz e estagiario e diretor

  return [contractCodes, admissionKit];
}
