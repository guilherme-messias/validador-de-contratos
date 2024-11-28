const octadeskContractValidation = require("./octadeskContractValidation");

// De acordo com a unidade selecionada, o sistema deve exibir os campos de acordo com a necessidade de cada unidade.
const units = document.getElementById("units");
units.addEventListener("change", function () {
  let buttonDiv = document.getElementById("buttonDiv");
  let workModalityDiv = document.getElementById("workModalityDiv");
  let careerLevelDiv = document.getElementById("careerLevelDiv");
  let departmentDiv = document.getElementById("departmentDiv");

  workModalityDiv.classList.add("hidden");
  buttonDiv.classList.add("hidden");
  careerLevelDiv.classList.add("hidden");
  departmentDiv.classList.add("hidden");

  if (units.value === "octadesk") {
    buttonDiv.classList.remove("hidden");
    careerLevelDiv.classList.remove("hidden");
    departmentDiv.classList.remove("hidden");
    workModalityDiv.classList.remove("hidden");
  } else if (units.value === "cplug") {
    workModalityDiv.classList.remove("hidden");
    buttonDiv.classList.remove("hidden");
  } else {
    buttonDiv.classList.add("hidden");
  }
});

octadeskContractValidation();

// criar a logica dos modulos para cada unidade
// adicionar demais unidades
// fazer filtro de campos para cada unidade
