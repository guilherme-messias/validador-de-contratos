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
        contractCodes += `emp - CONTRATO HÍBRIDO - OCTADESK (34524)<br>`;
        admissionKit += `Titulo: COLABORADOR | HIBRIDO<br>`;
      }

      if (workModality === "modality-home-office" && careerLevel === "career-level-others") {
        contractCodes += `emp - CONTRATO TELETRABALHO - OCTADESK (33169)<br>`;
        admissionKit += `Titulo: COLABORADOR | HOME-OFFICE<br>`;
      }
    }

    if (department === "department-i") {
      if (workModality === "modality-hybrid" && careerLevel === "career-level-others") {
        contractCodes += `emp - CONTRATO HÍBRIDO - OCTADESK (34524)<br>`;
        admissionKit += `Titulo: COLABORADOR | HIBRIDO | PRE VENDAS<br>`;
      }

      if (workModality === "modality-home-office" && careerLevel === "career-level-others") {
        contractCodes += `emp - CONTRATO TELETRABALHO - OCTADESK (33169)<br>`;
        admissionKit += `Titulo: COLABORADOR | HOME-OFFICE | PRE VENDAS<br>`;
      }
    }

    if (department === "department-ii") {
      if (workModality === "modality-hybrid" && careerLevel === "career-level-others") {
        contractCodes += `emp - CONTRATO HÍBRIDO - OCTADESK (34524)<br>`;
        admissionKit += `Titulo: COLABORADOR | HIBRIDO | VENDAS<br>`;
      }

      if (workModality === "modality-home-office" && careerLevel === "career-level-others") {
        contractCodes += `emp - CONTRATO TELETRABALHO - OCTADESK (33169)<br>`;
        admissionKit += `Titulo: COLABORADOR | HOME-OFFICE | VENDAS<br>`;
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
        contractCodes += `emp - CONTRATO HÍBRIDO - OCTADESK (34524)<br>`;
        admissionKit += `Titulo: LIDER | HIBRIDO | 60/40<br>`;
      }

      if (workModality === "modality-home-office") {
        contractCodes += `emp - CONTRATO TELETRABALHO - OCTADESK (33169)<br>`;
        admissionKit += `Titulo: LIDER | HOME-OFFICE | 60/40<br>`;
      }
    }

    if (department === "department-ii") {
      if (workModality === "modality-hybrid" && careerLevel === "career-level-coordinator") {
        contractCodes += `emp - CONTRATO HÍBRIDO - OCTADESK (34524)<br>`;
        admissionKit += `Titulo: COORDENADOR VENDAS | HIBRIDO | 60/40<br>`;
      }

      if (workModality === "modality-home-office" && careerLevel === "career-level-coordinator") {
        contractCodes += `emp - CONTRATO TELETRABALHO - OCTADESK (33169)<br>`;
        admissionKit += `Titulo: COORDENADOR VENDAS | HOME-OFFICE | 60/40<br>`;
      }
    }
  }

  if (contractType === "contract-apprentice") {
    admissionKit += `Titulo: APRENDIZ<br>`;
  }

  if (contractType === "contract-inter") {
    admissionKit += `Titulo: ESTAGIARIO<br>`;
  }

  if (careerLevel === "career-level-director") {
    admissionKit += `Titulo: DIRETOR S/ FGTS | SEM CONTRATO<br>`;
  }

  return [contractCodes, admissionKit];
}
