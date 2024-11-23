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

let contractCodes = "emp - TERMOS COLABORADORES - OCTADESK (36546)" + "\n";

const button = document.querySelector("#submit");

button.addEventListener("click", () => {
  const workModality = document.querySelector("#workModality").value;
  const careerLevel = document.querySelector("#careerLevel").value;
  const department = document.querySelector("#department").value;

  octadeskValidationContract(workModality);
  octadeskValidationContractualAmendments(careerLevel, department);

  console.log(contractCodes);
  contractCodes = "" + "\n" + "emp - TERMOS COLABORADORES - OCTADESK (36546)" + "\n";
});

function octadeskValidationContract(workModality) {
  if (workModality === "hybrid") {
    contractCodes += "emp - CONTRATO HÍBRIDO - OCTADESK (34524)" + "\n";
  } else if (workModality === "homeOffice") {
    contractCodes += "emp - CONTRATO TELETRABALHO - OCTADESK (33169)" + "\n";
  } else {
    contractCodes += "CONTRATO NÃO EXISTENTE!" + "\n";
  }
}

function octadeskValidationContractualAmendments(careerLevel, department) {
  if (careerLevel === "coordinator" || careerLevel === "manager" || careerLevel === "techLead") {
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

// criar a logica dos modulos para cada unidade
// adicionar demais unidades
// fazer filtro de campos para cada unidade
