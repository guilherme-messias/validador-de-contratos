import contractMonthlyHours from "./filters/contractMonthlyHours.js";
import termOfWork from "./filters/termOfWork.js";
const btnNewQuery = document.getElementById("btn-new-query");
btnNewQuery.classList.add("hidden");
document.getElementById("contract-details-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const contractType = document.getElementById("contract-type").value;
    const careerLevel = document.getElementById("career-level").value;
    const monthlyHours = document.getElementById("monthly-hours").value;
    const result = contractFilters(contractType, careerLevel, monthlyHours);
    console.log(result);
});
function contractFilters(contractType, careerLevel, monthlyHours) {
    let result = "";
    if (contractType !== "contract-apprentice" && contractType !== "contract-inter") {
        result += `${contractMonthlyHours(monthlyHours)}
    `;
    }
    result += `${termOfWork(careerLevel)}
  `;
    return result;
}
