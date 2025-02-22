import contract from "./filters/contract.js";
import termOfWork from "./filters/termOfWork.js";
const btnNewQuery = document.getElementById("btn-new-query");
btnNewQuery.classList.add("hidden");
const divResultCodesAndKit = document.getElementById("result-codes-and-kit");
document.getElementById("contract-details-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const contractType = document.getElementById("contract-type").value;
    const workModality = document.getElementById("work-modality").value;
    const careerLevel = document.getElementById("career-level").value;
    const department = document.getElementById("department").value;
    const resultCodesAndKit = admissionFilters(contractType, workModality, careerLevel, department);
    btnNewQuery.style.display = "block";
    divResultCodesAndKit.innerHTML = resultCodesAndKit;
});
btnNewQuery.addEventListener("click", () => {
    window.location.reload();
});
function admissionFilters(contractType, workModality, careerLevel, department) {
    let contractCodes = "";
    let admissionKit = "";
    const [code, kit] = contract(contractType, workModality, department, careerLevel);
    contractCodes += `${code}`;
    admissionKit += `${kit}`;
    contractCodes += `${termOfWork(careerLevel, department)}
  `;
    return `${contractCodes}<br>${admissionKit}`;
}
