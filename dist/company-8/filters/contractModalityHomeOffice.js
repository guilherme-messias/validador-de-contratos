export default function contractModalityHomeOffice(careerLevel, contractType) {
    let contractCodes = "";
    if (careerLevel !== "career-level-specialist-II" &&
        careerLevel !== "career-level-coordinator" &&
        contractType !== "contract-temporary") {
        contractCodes += `emp - **CONTRATO DE TRABALHO - TELETRABALHO(30514)
    `;
    }
    if ((careerLevel === "career-level-specialist-II" || careerLevel === "career-level-coordinator") &&
        contractType !== "contract-temporary") {
        contractCodes += `emp - **CONTRATO DE TRABALHO - TELETRABALHO CARGO CONFIANÇA 60/40 (30515)   
      `;
    }
    return contractCodes;
}
