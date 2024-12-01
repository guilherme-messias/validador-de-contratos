export function cplugContractValidation() {
  document.getElementById("submit").addEventListener("click", () => {
    const careerLevel = document.getElementById("careerLevel").value;
    const department = document.getElementById("department").value;
    const contractType = document.getElementById("contractType").value;

    const contractCodes = cplugContractFilters(contractType, careerLevel, department);
    console.log(contractCodes);
  });
}

function cplugContractFilters(contractType, careerLevel, department) {
  let contractCodes = "";

  if (contractType !== "apprentice" && contractType !== "inter") {
    contractCodes += "NO AGUARDO DO CONTRATO CERTO!!!" + "\n";
  }
  if (careerLevel === "coordinator" || careerLevel === "manager") {
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

  return contractCodes;
}
