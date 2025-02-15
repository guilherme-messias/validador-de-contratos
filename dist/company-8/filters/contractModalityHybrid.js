export default function contractModalityHybrid(careerLevel, contractType) {
    let contractCodes = "";
    let admissionKit = "";
    if (careerLevel !== "career-level-specialist-II" &&
        careerLevel !== "career-level-coordinator" &&
        contractType !== "contract-temporary") {
        contractCodes += `emp - CONTRATO DE TRABALHO HÍBRIDO lwsa - ATUALIZADO (36619)<br>`;
        admissionKit += `Titulo: COLABORADOR | HIBRIDO<br>`;
    }
    if ((careerLevel === "career-level-specialist-II" || careerLevel === "career-level-coordinator") &&
        contractType !== "contract-temporary") {
        contractCodes += `emp - CONTRATO DE TRABALHO HÍBRIDO CARGO DE CONFIANÇA 60.40 LOCAWEB (36549)<br>`;
        admissionKit += `Titulo: COLABORADOR | HIBRIDO | 60/40<br>`;
    }
    if (careerLevel !== "career-level-specialist-II" &&
        careerLevel !== "career-level-coordinator" &&
        contractType === "contract-temporary") {
        contractCodes += `emp - CONTRATO DE TRABALHO HÍBRIDO DETERMINADO lwsa - ATUALIZADO (36620)<br>`;
        admissionKit += `SEM KIT<br>`;
    }
    if ((careerLevel === "career-level-specialist-II" || careerLevel === "career-level-coordinator") &&
        contractType === "contract-temporary") {
        contractCodes += `emp - CONTRATO DE TRABALHO HÍBRIDO DETERMINADO 60.40 - ATUALIZADO (36621)<br>`;
        admissionKit += `SEM KIT<br>`;
    }
    return [contractCodes, admissionKit];
}
