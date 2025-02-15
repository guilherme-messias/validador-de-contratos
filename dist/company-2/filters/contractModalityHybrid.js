export default function contractModalityHybrid(careerLevel, contractType, state) {
    let contractCodes = "";
    let admissionKit = "";
    if (careerLevel !== "career-level-specialist-II" &&
        careerLevel !== "career-level-coordinator" &&
        contractType !== "contract-temporary") {
        contractCodes += `emp - CONTRATO DE TRABALHO HÍBRIDO lwsa - ATUALIZADO (36619)\n`;
        admissionKit +=
            state === "state-curitiba"
                ? `Titulo: COLABORADOR | HIBRIDO | CURITIBA\n`
                : `Titulo: COLABORADOR | HIBRIDO | OUTROS\n`;
    }
    if ((careerLevel === "career-level-specialist-II" || careerLevel === "career-level-coordinator") &&
        contractType !== "contract-temporary") {
        contractCodes += `emp - CONTRATO DE TRABALHO HÍBRIDO CARGO DE CONFIANÇA 60.40 LOCAWEB (36549)\n`;
        admissionKit +=
            state === "state-curitiba"
                ? `Titulo: 60/40 | HIBRIDO | CURITIBA\n`
                : `Titulo: 60/40 | HIBRIDO | OUTROS\n`;
    }
    if (careerLevel !== "career-level-specialist-II" &&
        careerLevel !== "career-level-coordinator" &&
        contractType === "contract-temporary") {
        contractCodes += `emp - CONTRATO DE TRABALHO HÍBRIDO DETERMINADO lwsa - ATUALIZADO (36620)\n`;
    }
    if ((careerLevel === "career-level-specialist-II" || careerLevel === "career-level-coordinator") &&
        contractType === "contract-temporary") {
        contractCodes += `emp - CONTRATO DE TRABALHO HÍBRIDO DETERMINADO 60.40 - ATUALIZADO (36621)\n`;
    }
    return [contractCodes, admissionKit];
}
