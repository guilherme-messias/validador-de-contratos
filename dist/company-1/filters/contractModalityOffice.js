export default function contractModalityOffice(careerLevel, contractType) {
    let contractCodes = "";
    let admissionKit = "";
    if (careerLevel !== "career-level-specialist-II" &&
        careerLevel !== "career-level-coordinator" &&
        contractType !== "contract-temporary") {
        contractCodes += `emp - **CONTRATO DE TRABALHO - INDETERMINADO (30511)\n`;
        admissionKit += `Titulo: COLABORADOR | PRESENCIAL\n`;
    }
    if ((careerLevel === "career-level-specialist-II" || careerLevel === "career-level-coordinator") &&
        contractType !== "contract-temporary") {
        contractCodes += `emp - CONTRATO DE TRABALHO - INDETERMINADO CARGO CONFIANÇA 60/40 (30513)\n`;
        admissionKit += `COLABORADOR | PRESENCIAL | 60/40\n`;
    }
    if (careerLevel !== "career-level-specialist-II" &&
        careerLevel !== "career-level-coordinator" &&
        contractType === "contract-temporary") {
        contractCodes += `emp - **CONTRATO DE TRABALHO - DETERMINADO (30508)\n`;
        admissionKit += `Sem KIT\n`;
    }
    if ((careerLevel === "career-level-specialist-II" || careerLevel === "career-level-coordinator") &&
        contractType === "contract-temporary") {
        contractCodes += `emp - **CONTRATO DE TRABALHO - DETERMINADO CARGO CONFIANÇA 60/40 (30510)\n`;
        admissionKit += `Sem KIT\n`;
    }
    return [contractCodes, admissionKit];
}
