export default function contractMonthlyHours(monthlyHours, careerLevel, contractType) {
    let contractCodes = "";
    let admissionKit = "";
    if (contractType !== "contract-apprentice" && contractType !== "contract-inter") {
        if (careerLevel !== "career-level-specialist-II" &&
            careerLevel !== "career-level-coordinator") {
            if (monthlyHours === "monthly-hours-200") {
                contractCodes += `emp - CONTRATO 45/45 JORNADA 40 HORAS/200 MENSAIS - MELHOR ENVIO (36718)\n`;
                admissionKit = `Titulo: COLABORADOR | 200H - ME\n`;
            }
            if (monthlyHours === "monthly-hours-180") {
                contractCodes += `emp - CONTRATO 45/45 JORNADA 36 HORAS/180 MENSAIS - MELHOR ENVIO (36719)\n`;
                admissionKit = `Titulo: COLABORADOR | 180H - ME\n`;
            }
            if (monthlyHours === "monthly-hours-150") {
                contractCodes += `emp - CONTRATO 45/45 JORNADA 30 HORAS / 150 MENSAIS - MELHOR ENVIO (36717)\n`;
                admissionKit = `Titulo: COLABORADOR | 150H - ME\n`;
            }
        }
        if (careerLevel === "career-level-specialist-II" ||
            careerLevel === "career-level-coordinator") {
            if (monthlyHours === "monthly-hours-200") {
                contractCodes += `emp - CONTRATO 45/45 JORNADA 40 HORAS/200 MENSAIS - MELHOR ENVIO (36718)\n`;
                admissionKit = `Titulo: LIDER | 60/40 | 200H - ME\n`;
            }
        }
    }
    if (contractType === "contract-apprentice") {
        admissionKit += `Titulo: APRENDIZ\n`;
    }
    if (contractType === "contract-inter") {
        admissionKit += `Titulo: ESTAGIARIO\n`;
    }
    if (careerLevel === "career-level-director") {
        admissionKit += `Titulo: DIRETOR S/ FGTS | SEM CONTRATO\n`;
    }
    return [contractCodes, admissionKit];
}
