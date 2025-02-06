import contractModalityHomeOffice from "./filters/contractModalityHomeOffice.js";
import contractModalityHybrid from "./filters/contractModalityHybrid.js";
import contractModalityOffice from "./filters/contractModalityOffice.js";
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
        if (workModality === "modality-office") {
            result += `${contractModalityOffice(careerLevel, contractType)}
  `;
        }
        if (workModality === "modality-home-office") {
            result += `${contractModalityHomeOffice(careerLevel, contractType)}    
      `;
        }
        if (workModality === "modality-hybrid") {
            result += `${contractModalityHybrid(careerLevel, contractType)}
        `;
        }
    }
    result += `${termOfWork(contractType, careerLevel, department)}
  `;
    return result;
}
