export default function termOfWork(contractType, careerLevel, department) {
    let contractCodes = "";
    if (contractType !== "contract-apprentice" &&
        contractType !== "contract-inter" &&
        department !== "department-others") {
        contractCodes += `TERMO ADITIVO AO CONTRATO DE TRABALHO - CONNECTPLUG - 36544\n`;
    }
    if (careerLevel === "career-level-coordinator" || careerLevel === "career-level-manager") {
        contractCodes += `emp - TERMOS GESTORES - CPLUG (36697) - COORDENACAO E GERENCIA\n`;
    }
    contractCodes += `emp - TERMOS COLABORADORES - CPLUG (36667)\n`;
    return contractCodes;
}
