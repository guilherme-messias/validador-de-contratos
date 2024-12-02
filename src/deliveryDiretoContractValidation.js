export function deliveryDiretoContractValidation() {
  document.getElementById("submit").addEventListener("click", () => {
    const workModality = document.getElementById("workModality").value;
    const contractType = document.getElementById("contractType").value;

    const contractCodes = deliveryDiretoContractFilters(workModality, contractType);
    document.getElementById("result").innerText = contractCodes;
  });

  function deliveryDiretoContractFilters(workModality, contractType) {
    let contractCodes = "";

    if (contractType !== "apprentice" && contractType !== "inter") {
      if (workModality === "hybrid") {
        contractCodes += "emp - CONTRATO HÍBRIDO DELIVERY DIRETO (36844)" + "\n";
      } else {
        contractCodes += "CONTRATO NÃO CADASTRADO!" + "\n";
      }

      contractCodes +=
        "emp - TERMO DE AUTORIZAÇÃO DE DESCONTO VALE REFEICAO - deliveryDireto (36847)" + "\n";
    }
    contractCodes += "emp - TERMOS COLABORADORES - deliveryDireto (36848)" + "\n";

    return contractCodes;
  }
}
