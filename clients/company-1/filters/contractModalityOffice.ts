export default function contractModalityOffice(careerLevel: string, contractType: string): string {
  let result = "";
  if (
    careerLevel !== "career-level-specialist-II" &&
    careerLevel !== "career-level-coordinator" &&
    contractType !== "contract-temporary"
  ) {
    result += `emp - **CONTRATO DE TRABALHO - INDETERMINADO (30511)   
    `;
  }
  if (
    (careerLevel === "career-level-specialist-II" || careerLevel === "career-level-coordinator") &&
    contractType !== "contract-temporary"
  ) {
    result += `emp - CONTRATO DE TRABALHO - INDETERMINADO CARGO CONFIANÇA 60/40 (30513)   
      `;
  }

  if (
    careerLevel !== "career-level-specialist-II" &&
    careerLevel !== "career-level-coordinator" &&
    contractType === "contract-temporary"
  ) {
    result += `emp - **CONTRATO DE TRABALHO - DETERMINADO (30508)    
      `;
  }

  if (
    (careerLevel === "career-level-specialist-II" || careerLevel === "career-level-coordinator") &&
    contractType === "contract-temporary"
  ) {
    result += `emp - **CONTRATO DE TRABALHO - DETERMINADO CARGO CONFIANÇA 60/40 (30510)      
      `;
  }

  return result;
}
