import termOfWork from "./filters/termOfWork.js";
const btnNewQuery = document.getElementById("btn-new-query");
btnNewQuery.classList.add("hidden");
document.getElementById("contract-details-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const contractType = document.getElementById("contract-type").value;
    const workModality = document.getElementById("work-modality").value;
    const careerLevel = document.getElementById("career-level").value;
    const result = contractFilters(contractType, workModality, careerLevel);
    console.log(result);
});
function contractFilters(contractType, workModality, careerLevel) {
    let result = "";
    if (contractType !== "contract-apprentice" && contractType !== "contract-inter") {
        result += `emp - Contrato de Trabalho_Empresa 039 (36255)
  `;
    }
    result += `${termOfWork(careerLevel, workModality, contractType)}
  `;
    return result;
}
