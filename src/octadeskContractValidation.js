let contractCodes = "";

function octadeskContractValidation() {
   document.getElementById("submit").addEventListener("click", () => {
      const workModality = document.getElementById("workModality").value;
      const careerLevel = document.getElementById("careerLevel").value;
      const department = document.getElementById("department").value;

     console.log(workModality, careerLevel, department); 
     octadeskContractFilters(workModality, careerLevel, department);
      console.log(contractCodes);
      contractCodes = "" + "\n" + "emp - TERMOS COLABORADORES - OCTADESK (36546)" + "\n";
    });
    function octadeskContractFilters(workModality, careerLevel, department, contractType) {
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
  
        if (department === "preSales") {
          contractCodes += "*Aditivo SDR A.E. (cargos diretoria pre vendas) - 36552" + "\n";
        }
  
        if (department === "sales" && careerLevel !== "coordinator") {
          contractCodes += "*Aditivo AE (cargos diretoria 'vendas') - 36551" + "\n";
        }
  
        if (department === "sales" && careerLevel === "coordinator") {
          contractCodes += "*ADITIVO TEAM LEADER A.E. (coordenador de 'vendas') - 36550" + "\n";
        }
      }
      contractCodes += "emp - TERMOS COLABORADORES - OCTADESK (36546)" + "\n";
    }
  
    return contractCodes;
  }


module.exports = octadeskContractValidation;
