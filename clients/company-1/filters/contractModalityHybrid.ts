export default function contractModalityHybrid(careerLevel: string, contractType: string): string {
  let result = "";

  if (
    careerLevel !== "career-level-specialist-II" &&
    careerLevel !== "career-level-coordinator" &&
    contractType !== "contract-temporary"
  ) {
    result += `emp - CONTRATO DE TRABALHO HÍBRIDO lwsa - ATUALIZADO (36619)  
    `;
  }
  if (
    (careerLevel === "career-level-specialist-II" || careerLevel === "career-level-coordinator") &&
    contractType !== "contract-temporary"
  ) {
    result += `emp - CONTRATO DE TRABALHO HÍBRIDO CARGO DE CONFIANÇA 60.40 LOCAWEB (36549)     
      `;
  }

  if (
    careerLevel !== "career-level-specialist-II" &&
    careerLevel !== "career-level-coordinator" &&
    contractType === "contract-temporary"
  ) {
    result += `emp - CONTRATO DE TRABALHO HÍBRIDO DETERMINADO lwsa - ATUALIZADO (36620)      
      `;
  }

  if (
    (careerLevel === "career-level-specialist-II" || careerLevel === "career-level-coordinator") &&
    contractType === "contract-temporary"
  ) {
    result += `emp - CONTRATO DE TRABALHO HÍBRIDO DETERMINADO 60.40 - ATUALIZADO (36621)
      `;
  }

  return result;
}
