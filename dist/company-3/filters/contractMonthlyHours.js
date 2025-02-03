export default function contractMonthlyHours(monthlyHours) {
    let result = "";
    if (monthlyHours === "monthly-hours-200") {
        result += `emp - CONTRATO 45/45 JORNADA 40 HORAS/200 MENSAIS - MELHOR ENVIO (36718)
    `;
    }
    if (monthlyHours === "monthly-hours-180") {
        result += `emp - CONTRATO 45/45 JORNADA 36 HORAS/180 MENSAIS - MELHOR ENVIO (36719)
    `;
    }
    if (monthlyHours === "monthly-hours-150") {
        result += `emp - CONTRATO 45/45 JORNADA 30 HORAS / 150 MENSAIS - MELHOR ENVIO (36717)
    `;
    }
    return result;
}
