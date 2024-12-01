// const cplugContractValidation = require("./cplugContractValidation");
// const deliveryDiretoContractValidation = require("./deliveryDiretoContractValidation");
// const kinghostContractValidation = require("./kinghostContractValidation");
// const lwsaContractValidation = require("./lwsaContractValidation");
// const melhorEnvioContractValidation = require("./melhorEnvioContractValidation");
// const octadeskContractValidation = require("./octadeskContractValidation");

// De acordo com a unidade selecionada, o sistema deve exibir os campos de acordo com a necessidade de cada unidade.
const units = document.getElementById("units");
units.addEventListener("change", function () {
  // Ocultar todos os campos
  let contractTypeDiv = document.getElementById("contractTypeDiv");
  let workModalityDiv = document.getElementById("workModalityDiv");
  let careerLevelDiv = document.getElementById("careerLevelDiv");
  let departmentDiv = document.getElementById("departmentDiv");
  let positionDiv = document.getElementById("positionDiv");
  let trustedPositionDiv = document.getElementById("trustedPositionDiv");
  let monthlyHoursDiv = document.getElementById("monthlyHoursDiv");
  let buttonDiv = document.getElementById("buttonDiv");

  contractTypeDiv.classList.add("hidden");
  workModalityDiv.classList.add("hidden");
  buttonDiv.classList.add("hidden");
  careerLevelDiv.classList.add("hidden");
  departmentDiv.classList.add("hidden");
  positionDiv.classList.add("hidden");
  trustedPositionDiv.classList.add("hidden");
  monthlyHoursDiv.classList.add("hidden");

  // Exibir os campos de acordo com a unidade selecionada
  if (units.value === "octadesk") {
    contractTypeDiv.classList.remove("hidden");
    careerLevelDiv.classList.remove("hidden");
    departmentDiv.classList.remove("hidden");
    workModalityDiv.classList.remove("hidden");
    buttonDiv.classList.remove("hidden");
  }

  if (units.value === "cplug") {
    contractTypeDiv.classList.remove("hidden");
    careerLevelDiv.classList.remove("hidden");
    departmentDiv.classList.remove("hidden");
    buttonDiv.classList.remove("hidden");
  }

  if (units.value === "deliveryDireto") {
    workModalityDiv.classList.remove("hidden");
    contractTypeDiv.classList.remove("hidden");
    buttonDiv.classList.remove("hidden");
  }

  if (units.value === "kinghost") {
    workModalityDiv.classList.remove("hidden");
    careerLevelDiv.classList.remove("hidden");
    contractTypeDiv.classList.remove("hidden");
    buttonDiv.classList.remove("hidden");
  }

  if (units.value === "lwsa") {
    workModalityDiv.classList.remove("hidden");
    careerLevelDiv.classList.remove("hidden");
    departmentDiv.classList.remove("hidden");
    contractTypeDiv.classList.remove("hidden");
    positionDiv.classList.remove("hidden");
    buttonDiv.classList.remove("hidden");
  }

  if (units.value === "melhorEnvio") {
    monthlyHoursDiv.classList.remove("hidden");
    contractTypeDiv.classList.remove("hidden");
    trustedPositionDiv.classList.remove("hidden");
    buttonDiv.classList.remove("hidden");
  }
});

// De acordo com a unidade selecionada, o sistema deve acionar a função de validação da unidade.
units.addEventListener("change", () => {
  if (units.value === "octadesk") {
    octadeskContractValidation();
  }
  if (units.value === "cplug") {
    cplugContractValidation();
  }
  if (units.value === "deliveryDireto") {
    deliveryDiretoContractValidation();
  }
  if (units.value === "kinghost") {
    kinghostContractValidation();
  }
  if (units.value === "lwsa") {
    lwsaContractValidation();
  }
  if (units.value === "melhorEnvio") {
    melhorEnvioContractValidation();
  }
});
