export default function termOfWork(careerLevel: string): string {
  let contractCodes = "";

  if (careerLevel === "career-level-specialist-II" || careerLevel === "career-level-coordinator") {
    contractCodes += `emp - TERMO CARGO DE CONFIANCA 60/40 - MELHOR ENVIO (36716)<br>`;
  }

  contractCodes += `emp - TERMOS COLABORADORES - MELHOR ENVIO (36715)<br>`;

  return contractCodes;
}
