export default function termOfWork(contractType, careerLevel, department) {
    let contractCodes = "";
    if (contractType !== "contract-apprentice" &&
        contractType !== "contract-inter" &&
        department !== "department-others") {
        contractCodes += `TERMO ADITIVO AO CONTRATO DE TRABALHO - CONNECTPLUG - 36544<br>`;
    }
    if (careerLevel === "career-level-coordinator" || careerLevel === "career-level-manager") {
        contractCodes += `emp - TERMOS GESTORES - CPLUG (36697) - COORDENACAO E GERENCIA<br>`;
    }
    contractCodes += `emp - TERMOS COLABORADORES - CPLUG (36667)<br>`;
    return contractCodes;
}
