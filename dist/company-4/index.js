import contract from "./filters/contract.js";
import termOfWork from "./filters/termOfWork.js";
const btnNewQuery = document.getElementById("btn-new-query");
btnNewQuery.classList.add("hidden");
document.getElementById("contract-details-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const contractType = document.getElementById("contract-type").value;
    const workModality = document.getElementById("work-modality").value;
    const careerLevel = document.getElementById("career-level").value;
    const department = document.getElementById("department").value;
    const result = contractFilters(contractType, workModality, careerLevel, department);
    console.log(result);
});
function contractFilters(contractType, workModality, careerLevel, department) {
    let result = "";
    if (contractType !== "contract-apprentice" && contractType !== "contract-inter") {
        result += `${contract(workModality)}
  `;
    }
    // todo: finalizar preenchimento da lógica termos octa
    result += `${termOfWork(careerLevel, department)}
  `;
    return result;
}
