import contractModalityHomeOffice from "./filters/contractModalityHomeOffice.js";
import contractModalityHybrid from "./filters/contractModalityHybrid.js";
import contractModalityOffice from "./filters/contractModalityOffice.js";
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
    const state = document.getElementById("state").value;
    const resultCodesAndKit = admissionFilters(contractType, workModality, careerLevel, department, state);
    divResultCodesAndKit.innerHTML = `${resultCodesAndKit[0]}<br>${resultCodesAndKit[1]}`;
});
function admissionFilters(contractType, workModality, careerLevel, department, state) {
    let contractCodes = "";
    let admissionKit = "";
    if (contractType !== "contract-apprentice" && contractType !== "contract-inter") {
        if (workModality === "modality-office") {
            const [code, kit] = contractModalityOffice(careerLevel, contractType, department, state);
            contractCodes += `${code}`;
            admissionKit += `${kit}`;
        }
        if (workModality === "modality-home-office") {
            const [code, kit] = `${contractModalityHomeOffice(careerLevel, contractType, department, state)}`;
            contractCodes += `${code}`;
            admissionKit += `${kit}`;
        }
        if (workModality === "modality-hybrid") {
            const [code, kit] = `${contractModalityHybrid(careerLevel, contractType, department, state)}`;
            contractCodes += `${code}`;
            admissionKit += `${kit}`;
        }
    }
    contractCodes += `${termOfWork(contractType, careerLevel, department)}
  `;
    return [contractCodes, admissionKit];
}
