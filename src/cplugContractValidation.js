let contractCodes = "";

function cplugValidation() {
  cplugContractFilters("inter", "p", "i");
  function cplugContractFilters(contractType, carrerLevel, department) {
    if (contractType !== "apprentice" && contractType !== "inter") {
      contractCodes += "NO AGUARDO DO CONTRATO CERTO!!!" + "\n";
    }
    if (carrerLevel === "coordinator" || carrerLevel === "manager") {
      contractCodes += "emp - TERMOS GESTORES - CPLUG (36697) - COORDENACAO E GERENCIA" + "\n";
    }

    if (
      department === "inside-sales" ||
      department === "canais" ||
      department === "gestao-de-relacionamento" ||
      department === "upgrade" ||
      department === "cobranca"
    ) {
      contractCodes += "TERMO ADITIVO AO CONTRATO DE TRABALHO - CONNECTPLUG - 36544" + "\n";
    }

    contractCodes += "emp - TERMOS COLABORADORES - CPLUG (36667)" + "\n";
  }
}

cplugValidation();
console.log(contractCodes);
