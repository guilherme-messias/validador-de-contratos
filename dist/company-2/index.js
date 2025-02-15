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
    const state = document.getElementById("state").value;
    const contractCodes = admissionFilters(contractType, workModality, careerLevel, department, state);
    console.log(contractCodes);
});
function admissionFilters(contractType, workModality, careerLevel, department, state) {
    let contractCodes = "";
    let admissionKit = "";
    if (contractType !== "contract-apprentice" && contractType !== "contract-inter") {
        if (workModality === "modality-office") {
            contractCodes += `${contractModalityOffice(careerLevel, contractType, state)}
  `;
        }
        if (workModality === "modality-home-office") {
            contractCodes += `${contractModalityHomeOffice(careerLevel, contractType, state)}    
      `;
        }
        if (workModality === "modality-hybrid") {
            contractCodes += `${contractModalityHybrid(careerLevel, contractType, state)}
        `;
        }
    }
    contractCodes += `${termOfWork(contractType, careerLevel, department)}
  `;
    return `${contractCodes}\n${admissionKit}`;
}
