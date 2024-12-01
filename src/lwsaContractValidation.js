let contractCodes = "";

function lwsaContractValidation() {
  // function processUserInputForValidation() {
  //  document.querySelector("#submit").addEventListener("click", () => {
  //     const workModality = document.querySelector("#workModality").value;
  //     const careerLevel = document.querySelector("#careerLevel").value;
  //     const department = document.querySelector("#department").value;
  //      const contractType = document.querySelector("#contractType").value;
  //        const position = document.querySelector("#position").value;

  //     lwsaContractFilters(workModality, careerLevel, department, contractType, position);
  //     console.log(contractCodes);
  //     contractCodes = "" + "\n" + "emp - TERMOS COLABORADORES - LWSA (36833)" + "\n";
  //   });
  // }

  // EXEMPLO PROVISÓRIO PARA ACIONAR A LÓGICA DE VALIDAÇÃO
  lwsaContractFilters("office", "director", "nextios", "permanent", "CONSULTOR DE RETENCAO");

  function lwsaContractFilters(workModality, careerLevel, department, contractType, position) {
    // Formatar valor contendo a função para que seja possível comparar com o valor esperado
    function normalizePosition(position) {
      return position
        .toUpperCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "-");
    }

    // Validação contratos
    function lwsaContractFiltersHybrid(careerLevel, contractType) {
      if (
        careerLevel !== "specialist-II" &&
        careerLevel !== "coordinator" &&
        contractType !== "temporary"
      ) {
        contractCodes += "emp - CONTRATO DE TRABALHO HÍBRIDO lwsaSA - ATUALIZADO (36619)" + "\n";
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
          "emp - CONTRATO DE TRABALHO HÍBRIDO DETERMINADO lwsaSA - ATUALIZADO (36620)" + "\n";
      }
      if (
        contractType === "temporary" &&
        (careerLevel === "specialist-II" || careerLevel === "coordinator")
      ) {
        contractCodes +=
          "emp - CONTRATO DE TRABALHO HÍBRIDO DETERMINADO 60.40 - ATUALIZADO (36621)" + "\n";
      }
    }

    function lwsaContractFiltersHomeOffice(careerLevel, contractType) {
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

    function lwsaContractFiltersOffice(careerLevel, contractType) {
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

    if (contractType !== "apprentice" && contractType !== "inter") {
      // Validação de contratos por modalidade de trabalho
      if (workModality === "hybrid") {
        lwsaContractFiltersHybrid(careerLevel, contractType);
      }

      if (workModality === "homeOffice") {
        lwsaContractFiltersHomeOffice(careerLevel, contractType);
      }

      if (workModality === "office") {
        lwContractFiltersOffice(careerLevel, contractType);
      }

      // Validação termos por nível de carreira
      if (careerLevel === "director") {
        contractCodes +=
          "DIRETORES - emp - TERMO DE SOLICITAÇÃO DE VEÍCULO CORPORATIVO - LWSA (36797)" + "\n";
      }

      // Validação de aditivos por meio da nomenclatura de cargo
      if (normalizePosition(position).includes("CONSULTOR DE VENDAS ONLINE")) {
        contractCodes +=
          "ADITIVO AO CONTRATO DE TRABALHO_Consultor de Vendas Inside Sales - 36755" + "\n";
      }

      if (normalizePosition(position).includes("EXECUTIVO DE VENDAS ONLINE I")) {
        contractCodes +=
          "ADITIVO AO CONTRATO DE TRABALHO_Executivo de Vendas Inside Sales - 36756" + "\n";
      }

      if (normalizePosition(position).includes("COORDENADOR DE VENDAS ONLINE II")) {
        contractCodes +=
          "ADITIVO AO CONTRATO DE TRABALHO_Coordenadores Inside Sales - 36757" + "\n";
      }

      if (
        normalizePosition(position).includes("CONSULTOR DE RETENCAO") ||
        normalizePosition(position).includes("EXECUTIVO DE RETENCAO") ||
        normalizePosition(position).includes("COORDENADOR DE RETENCAO")
      ) {
        contractCodes +=
          "ADITIVO NOVOS CONTRATADOS - COSTUMER CARE  2023 + POLÍTICA - 36758" + "\n";
      }

      if (
        (normalizePosition(position).includes("COMERCIAL") && department === "nextios") ||
        (normalizePosition(position).includes("VENDAS") && department === "nextios")
      ) {
        contractCodes += "ADITIVO COMERCIAL NEXTIOS + POLÍTICA COMERCIAL NEXTIOS - 36760" + "\n";
      }

      if (normalizePosition(position).includes("PRE VENDAS") && department === "nextios") {
        contractCodes += "ADITIVO LOCAWEB RV TSP + POLÍTICA TSP - 36759" + "\n";
      }

      contractCodes += "VR: emp - *AUTORIZAÇÃO DE DESCONTO VALE REFEIÇÃO (30518)" + "\n";
    }

    contractCodes += "emp - TERMOS COLABORADORES - LWSA (36833)" + "\n";
  }
  return contractCodes;
}

module.exports = lwsaContractValidation;
