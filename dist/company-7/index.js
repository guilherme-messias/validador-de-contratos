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
    const isAdvocate = document.querySelector('input[name="flag"]:checked')
        .value;
    const position = document.getElementById("position").value;
    const contractCodes = admissionFilters(contractType, workModality, careerLevel, position);
    console.log(contractCodes);
});
function admissionFilters(contractType, workModality, careerLevel, position) {
    let contractCodes = "";
    function normalizePosition(position) {
        return position
            .toUpperCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "-");
    }
    if (contractType !== "contract-apprentice" && contractType !== "contract-inter") {
        if (workModality === "modality-office") {
            contractCodes += `${contractModalityOffice(careerLevel, contractType)}
  `;
        }
        if (workModality === "modality-home-office") {
            contractCodes += `${contractModalityHomeOffice(careerLevel, contractType)}    
      `;
        }
        if (workModality === "modality-hybrid") {
            contractCodes += `${contractModalityHybrid(careerLevel, contractType)}
        `;
        }
    }
    contractCodes += `${termOfWork(contractType, careerLevel, normalizePosition(position))}
  `;
    return contractCodes;
}
