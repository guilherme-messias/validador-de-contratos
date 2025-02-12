import contract from "./filters/contract.js";
import termOfWork from "./filters/termOfWork.js";
const btnNewQuery = document.getElementById("btn-new-query");
btnNewQuery.classList.add("hidden");
document.getElementById("contract-details-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const contractType = document.getElementById("contract-type").value;
    const careerLevel = document.getElementById("career-level").value;
    const monthlyHours = document.getElementById("monthly-hours").value;
    const contractCodes = admissionFilters(contractType, careerLevel, monthlyHours);
    console.log(contractCodes);
});
function admissionFilters(contractType, careerLevel, monthlyHours) {
    let contractCodes = "";
    let admissionKit = "";
    const [code, kit] = contract(monthlyHours, careerLevel, contractType);
    contractCodes += `${code}`;
    admissionKit += `${kit}`;
    contractCodes += `${termOfWork(careerLevel)}`;
    return `${contractCodes}\n${admissionKit}`;
}
