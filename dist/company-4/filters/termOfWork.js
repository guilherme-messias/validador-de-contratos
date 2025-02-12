export default function termOfWork(careerLevel, department) {
    let contractCodes = "";
    if (careerLevel === "career-level-coordinator" ||
        careerLevel === "career-level-manager" ||
        careerLevel === "career-level-tech-leader") {
        contractCodes += `Aditivo Cargo de Confiança () - 36545\n`;
    }
    if (department === "department-i") {
        contractCodes += `Aditivo SDR A.E. (cargos diretoria pre vendas) - 36552\n`;
    }
    if (department === "department-ii" && careerLevel !== "career-level-coordinator") {
        contractCodes += `Aditivo AE (cargos diretoria 'vendas') - 36551\n`;
    }
    if (department === "department-ii" && careerLevel === "career-level-coordinator") {
        contractCodes += `ADITIVO TEAM LEADER A.E. (coordenador de 'vendas') - 36550\n`;
    }
    contractCodes += `emp - TERMOS COLABORADORES - OCTADESK (36546)\n`;
    return contractCodes;
}
