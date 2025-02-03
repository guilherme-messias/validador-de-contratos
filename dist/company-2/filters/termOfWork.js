export default function termOfWork(contractType, careerLevel, department, position) {
    let result = "";
    if (contractType !== "contract-apprentice" && contractType !== "contract-inter" && department !== "department-others") {
        result += `TERMO ADITIVO AO CONTRATO DE TRABALHO - CONNECTPLUG - 36544
     `;
    }
    if (careerLevel === "career-level-coordinator" || careerLevel === "career-level-manager") {
        result += `emp - TERMOS GESTORES - CPLUG (36697) - COORDENACAO E GERENCIA
    `;
    }
    result += `emp - TERMOS COLABORADORES - CPLUG (36667)
  `;
    return result;
}
