let contractCodes = "";

function ddContractValidation() {
  ddContractFilters("office", "i");
  function ddContractFilters(workModality, contractType) {
    if (contractType !== "apprentice" && contractType !== "inter") {
      if (workModality === "hybrid") {
        contractCodes += "emp - CONTRATO HÍBRIDO DELIVERY DIRETO (36844)" + "\n";
      } else {
        contractCodes += "CONTRATO NÃO CADASTRADO!" + "\n";
      }

      contractCodes += "emp - TERMO DE AUTORIZAÇÃO DE DESCONTO VALE REFEICAO - DD (36847)" + "\n";
    }
    contractCodes += "emp - TERMOS COLABORADORES - DD (36848)" + "\n";
  }
  return contractCodes;
}

module.exports = ddContractValidation;