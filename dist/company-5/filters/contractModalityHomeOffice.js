export default function contractModalityHomeOffice(careerLevel, contractType) {
    let contractCodes = "";
    let admissionKit = "";
    if (careerLevel !== "career-level-specialist-II" &&
        careerLevel !== "career-level-coordinator" &&
        contractType !== "contract-temporary") {
        contractCodes += `emp - **CONTRATO DE TRABALHO - TELETRABALHO(30514)\n`;
        admissionKit += `Titulo: COLABORADOR | HOME-OFFICE\n`;
    }
    if ((careerLevel === "career-level-specialist-II" || careerLevel === "career-level-coordinator") &&
        contractType !== "contract-temporary") {
        contractCodes += `emp - **CONTRATO DE TRABALHO - TELETRABALHO CARGO CONFIANÇA 60/40 (30515)\n`;
        admissionKit += `Titulo: COLABORADOR | HOME-OFFICE | 60/40\n`;
    }
    return [contractCodes, admissionKit];
}
