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
    const contractCodes = admissionFilters(contractType, workModality, careerLevel, department);
    console.log(contractCodes);
});
function admissionFilters(contractType, workModality, careerLevel, department) {
    let contractCodes = "";
    let admissionKit = "";
    const [code, kit] = contract(contractType, workModality, department, careerLevel);
    contractCodes += `${code}`;
    admissionKit += `${kit}`;
    contractCodes += `${termOfWork(careerLevel, department)}
  `;
    return `${contractCodes}\n${admissionKit}`;
}
