export default function contract(contractType, workModality, department, careerLevel) {
    let contractCodes = "";
    let admissionKit = "";
    if (careerLevel === "career-level-others" &&
        contractType !== "contract-apprentice" &&
        contractType !== "contract-inter") {
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
    if (careerLevel === "career-level-coordinator" ||
        careerLevel === "career-level-manager" ||
        careerLevel === "career-level-tech-leader") {
        if (department === "department-other") {
            if (workModality === "modality-hybrid") {
                contractCodes += `emp - CONTRATO HÍBRIDO - OCTADESK (34524)\n`;
                admissionKit += `Titulo: LIDER | HIBRIDO | 60/40\n`;
            }
            if (workModality === "modality-home-office") {
                contractCodes += `emp - CONTRATO TELETRABALHO - OCTADESK (33169)\n`;
                admissionKit += `Titulo: LIDER | HOME-OFFICE | 60/40\n`;
            }
        }
        if (department === "department-ii") {
            if (workModality === "modality-hybrid" && careerLevel === "career-level-coordinator") {
                contractCodes += `emp - CONTRATO HÍBRIDO - OCTADESK (34524)\n`;
                admissionKit += `Titulo: COORDENADOR VENDAS | HIBRIDO | 60/40\n`;
            }
            if (workModality === "modality-home-office" && careerLevel === "career-level-coordinator") {
                contractCodes += `emp - CONTRATO TELETRABALHO - OCTADESK (33169)\n`;
                admissionKit += `Titulo: COORDENADOR VENDAS | HOME-OFFICE | 60/40\n`;
            }
        }
    }
    if (contractType === "contract-apprentice") {
        admissionKit += `Titulo: APRENDIZ\n`;
    }
    if (contractType === "contract-inter") {
        admissionKit += `Titulo: ESTAGIARIO\n`;
    }
    if (careerLevel === "career-level-director") {
        admissionKit += `Titulo: DIRETOR S/ FGTS | SEM CONTRATO\n`;
    }
    return [contractCodes, admissionKit];
}
