export default function contractMonthlyHours(monthlyHours: string): string {
  let contractCodes = "";

  if (monthlyHours === "monthly-hours-200") {
    contractCodes += `emp - CONTRATO 45/45 JORNADA 40 HORAS/200 MENSAIS - MELHOR ENVIO (36718)
    `;
  }

  if (monthlyHours === "monthly-hours-180") {
    contractCodes += `emp - CONTRATO 45/45 JORNADA 36 HORAS/180 MENSAIS - MELHOR ENVIO (36719)
    `;
  }

  if (monthlyHours === "monthly-hours-150") {
    contractCodes += `emp - CONTRATO 45/45 JORNADA 30 HORAS / 150 MENSAIS - MELHOR ENVIO (36717)
    `;
  }

  return contractCodes;
}
