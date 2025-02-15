export default function contractModalityOffice(careerLevel, contractType, department, state) {
    let contractCodes = "";
    let admissionKit = "";
    if (careerLevel !== "career-level-specialist-II" &&
        careerLevel !== "career-level-coordinator" &&
        contractType !== "contract-temporary") {
        contractCodes += `emp - **CONTRATO DE TRABALHO - INDETERMINADO (30511)\n`;
        admissionKit += `Titulo: COLABORADOR | PRESENCIAL | CURITIBA\n`;
    }
    if ((careerLevel === "career-level-specialist-II" || careerLevel === "career-level-coordinator") &&
        contractType !== "contract-temporary") {
        contractCodes += `emp - CONTRATO DE TRABALHO - INDETERMINADO CARGO CONFIANÇA 60/40 (30513)\n`;
        admissionKit += `Titulo: 60/40 | PRESENCIAL | CURITIBA\n`;
    }
    if (careerLevel !== "career-level-specialist-II" &&
        careerLevel !== "career-level-coordinator" &&
        contractType === "contract-temporary") {
        contractCodes += `emp - **CONTRATO DE TRABALHO - DETERMINADO (30508)\n`;
    }
    if ((careerLevel === "career-level-specialist-II" || careerLevel === "career-level-coordinator") &&
        contractType === "contract-temporary") {
        contractCodes += `emp - **CONTRATO DE TRABALHO - DETERMINADO CARGO CONFIANÇA 60/40 (30510)\n`;
    }
    if (department !== "department-others") {
        admissionKit += ` | VENDAS`;
    }
    return [contractCodes, admissionKit];
}
