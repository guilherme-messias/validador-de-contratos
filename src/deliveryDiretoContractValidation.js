let contractCodes = "";

export function ddContractValidation() {
  deliveryDiretoContractFilters("office", "i");
  function deliveryDiretoContractFilters(workModality, contractType) {
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
  }
  return contractCodes;
}
