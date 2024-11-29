let contractCodes = "emp - TERMOS COLABORADORES - LWSA (36833)" + "\n";

function lwContractValidation() {
  // function processUserInputForValidation() {
  //  document.querySelector("#submit").addEventListener("click", () => {
  //     const workModality = document.querySelector("#workModality").value;
  //     const careerLevel = document.querySelector("#careerLevel").value;
  //     const department = document.querySelector("#department").value;
  //      const contractType = document.querySelector("#contractType").value;
  //        const position = document.querySelector("#position").value;

  //     lwContractFilters(workModality, careerLevel, department, contractType, position);
  //     console.log(contractCodes);
  //     contractCodes = "" + "\n" + "emp - TERMOS COLABORADORES - LWSA (36833)" + "\n";
  //   });
  // }

  lwContractFilters("office", "coordinator", "sales");
  function lwContractFilters(workModality, careerLevel, department, contractType, position) {
    // Validação contratos
    function lwContractFiltersHybrid(careerLevel, contractType) {
      if (
        careerLevel !== "specialist-II" &&
        careerLevel !== "coordinator" &&
        contractType !== "temporary"
      ) {
        contractCodes += "emp - CONTRATO DE TRABALHO HÍBRIDO LWSA - ATUALIZADO (36619)" + "\n";
      }
      if (
        contractType !== "temporary" &&
        (careerLevel === "specialist-II" || careerLevel === "coordinator")
      ) {
        contractCodes +=
          "emp - CONTRATO DE TRABALHO HÍBRIDO CARGO DE CONFIANÇA 60.40 LOCAWEB (36549)" + "\n";
      }
      if (
        careerLevel !== "specialist-II" &&
        careerLevel !== "coordinator" &&
        contractType === "temporary"
      ) {
        contractCodes +=
          "emp - CONTRATO DE TRABALHO HÍBRIDO DETERMINADO LWSA - ATUALIZADO (36620)" + "\n";
      }
      if (
        contractType === "temporary" &&
        (careerLevel === "specialist-II" || careerLevel === "coordinator")
      ) {
        contractCodes +=
          "emp - CONTRATO DE TRABALHO HÍBRIDO DETERMINADO 60.40 - ATUALIZADO (36621)" + "\n";
      }
    }

    function lwContractFiltersHomeOffice(careerLevel, contractType) {
      if (
        careerLevel !== "specialist-II" &&
        careerLevel !== "coordinator" &&
        contractType !== "temporary"
      ) {
        contractCodes += "emp - **CONTRATO DE TRABALHO - TELETRABALHO(30514)" + "\n";
      }
      if (
        contractType !== "temporary" &&
        (careerLevel === "specialist-II" || careerLevel === "coordinator")
      ) {
        contractCodes +=
          "emp - **CONTRATO DE TRABALHO - TELETRABALHO CARGO CONFIANÇA 60/40 (30515)" + "\n";
      }
    }

    function lwContractFiltersOffice(careerLevel, contractType) {
      if (
        careerLevel !== "specialist-II" &&
        careerLevel !== "coordinator" &&
        contractType !== "temporary"
      ) {
        contractCodes += "emp - **CONTRATO DE TRABALHO - INDETERMINADO (30511)" + "\n";
      }
      if (
        contractType !== "temporary" &&
        (careerLevel === "specialist-II" || careerLevel === "coordinator")
      ) {
        contractCodes +=
          "emp - **CONTRATO DE TRABALHO - INDETERMINADO CARGO CONFIANÇA 60/40 (30513)" + "\n";
      }
      if (
        careerLevel !== "specialist-II" &&
        careerLevel !== "coordinator" &&
        contractType === "temporary"
      ) {
        contractCodes += " emp - **CONTRATO DE TRABALHO - DETERMINADO (30508)" + "\n";
      }
      if (
        contractType === "temporary" &&
        (careerLevel === "specialist-II" || careerLevel === "coordinator")
      ) {
        contractCodes +=
          "emp - **CONTRATO DE TRABALHO - DETERMINADO CARGO CONFIANÇA 60/40 (30510)" + "\n";
      }
    }

    // Validação aditivos de cargos e departamentos
    if (contractType !== "apprentice" && contractType !== "inter") {
      contractCodes += "VR: emp - *AUTORIZAÇÃO DE DESCONTO VALE REFEIÇÃO (30518)" + "\n";
    }

    if (careerLevel === "director") {
      contractCodes +=
        "DIRETORES - emp - TERMO DE SOLICITAÇÃO DE VEÍCULO CORPORATIVO - LWSA (36797)" + "\n";
    }

    // TODO seguir com validação dos aditivos lw

  }

  // TODO acionar todas as mini funções de validação
}

lwContractValidation();
