import termOfWork from "./filters/termOfWork.js";
const btnNewQuery = document.getElementById("btn-new-query");
btnNewQuery.classList.add("hidden");
document.getElementById("contract-details-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const contractType = document.getElementById("contract-type").value;
    const workModality = document.getElementById("work-modality").value;
    const careerLevel = document.getElementById("career-level").value;
    const contractCodes = admissionFilters(contractType, workModality, careerLevel);
    console.log(contractCodes);
});
function admissionFilters(contractType, workModality, careerLevel) {
    let contractCodes = "";
    if (contractType !== "contract-apprentice" && contractType !== "contract-inter") {
        contractCodes += `emp - Contrato de Trabalho_Empresa 039 (36255)
  `;
    }
    contractCodes += `${termOfWork(careerLevel, workModality, contractType)}
  `;
    return contractCodes;
}
