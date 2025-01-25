export function melhorEnvioContractValidation() {
  document.getElementById("submit").addEventListener("click", () => {
    const monthlyHours = document.getElementById("monthlyHours").value;
    const trustedPosition = document.getElementById("trustedPosition").value;
    const contractType = document.getElementById("contractType").value;

    const contractCodes = melhorEnvioContractFilters(
      Number(monthlyHours),
      trustedPosition,
      contractType
    );
    document.getElementById("result").innerText = contractCodes;
  });

  function melhorEnvioContractFilters(monthlyHours, trustedPosition, contractType) {
    let contractCodes = "";
    if (contractType !== "apprentice" && contractType !== "inter") {
      // Validação contratos
      if (monthlyHours === 150) {
        contractCodes +=
          "emp - CONTRATO 45/45 JORNADA 30 HORAS / 150 MENSAIS - MELHOR ENVIO (36717)" + "\n";
      } else if (monthlyHours === 180) {
        contractCodes +=
          "emp - CONTRATO 45/45 JORNADA 36 HORAS/180 MENSAIS - MELHOR ENVIO (36719)" + "\n";
      } else if (monthlyHours === 200) {
        contractCodes +=
          "emp - CONTRATO 45/45 JORNADA 40 HORAS/200 MENSAIS - MELHOR ENVIO (36718)" + "\n";
      } else {
        contractCodes += "CONTRATO NÃO EXISTE!" + "\n";
      }

      // Validação aditivos de cargos
      if (trustedPosition === "yes") {
        contractCodes += "emp - TERMO CARGO DE CONFIANCA 60/40 - MELHOR ENVIO (36716)" + "\n";
      }
    }
    contractCodes += "emp - TERMOS COLABORADORES - MELHOR ENVIO (36715)" + "\n";
    return contractCodes;
  }
}
