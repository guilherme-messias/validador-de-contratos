export function octadeskContractValidation() {
  document.getElementById("submit").addEventListener("click", () => {
    const workModality = document.getElementById("workModality").value;
    const careerLevel = document.getElementById("careerLevel").value;
    const department = document.getElementById("department").value;
    const contractType = document.getElementById("contractType").value;

    const contractCodes = octadeskContractFilters(
      workModality,
      careerLevel,
      department,
      contractType
    );
    document.getElementById("result").innerText = contractCodes;
  });

  function octadeskContractFilters(workModality, careerLevel, department, contractType) {
    let contractCodes = "";
    if (contractType !== "apprentice" && contractType !== "inter") {
      // Validação contratos
      if (workModality === "hybrid") {
        contractCodes += "emp - CONTRATO HÍBRIDO - OCTADESK (34524)" + "\n";
      } else if (workModality === "homeOffice") {
        contractCodes += "emp - CONTRATO TELETRABALHO - OCTADESK (33169)" + "\n";
      } else {
        contractCodes += "CONTRATO NÃO EXISTENTE!" + "\n";
      }

      // Validação aditivos de cargos e departamentos
      if (
        careerLevel === "coordinator" ||
        careerLevel === "manager" ||
        careerLevel === "techLead"
      ) {
        contractCodes += "*Aditivo Cargo de Confiança () - 36545" + "\n";
      }

      if (department === "pre-vendas") {
        contractCodes += "*Aditivo SDR A.E. (cargos diretoria pre vendas) - 36552" + "\n";
      }

      if (department === "vendas" && careerLevel !== "coordinator") {
        contractCodes += "*Aditivo AE (cargos diretoria 'vendas') - 36551" + "\n";
      }

      if (department === "vendas" && careerLevel === "coordinator") {
        contractCodes += "*ADITIVO TEAM LEADER A.E. (coordenador de 'vendas') - 36550" + "\n";
      }
    }
    contractCodes += "emp - TERMOS COLABORADORES - OCTADESK (36546)" + "\n";
    return contractCodes;
  }
}
