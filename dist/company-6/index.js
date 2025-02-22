import termOfWork from "./filters/termOfWork.js";
const btnNewQuery = document.getElementById("btn-new-query");
btnNewQuery.classList.add("hidden");
const divResultCodesAndKit = document.getElementById("result-codes-and-kit");
document.getElementById("contract-details-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const contractType = document.getElementById("contract-type").value;
    const workModality = document.getElementById("work-modality").value;
    const careerLevel = document.getElementById("career-level").value;
    const resultCodesAndKit = admissionFilters(contractType, workModality, careerLevel);
    btnNewQuery.style.display = "block";
    divResultCodesAndKit.innerHTML = resultCodesAndKit;
});
btnNewQuery.addEventListener("click", () => {
    window.location.reload();
});
function admissionFilters(contractType, workModality, careerLevel) {
    let contractCodes = "";
    let admissionKit = "";
    if (contractType !== "contract-apprentice" && contractType !== "contract-inter") {
        contractCodes += `emp - Contrato de Trabalho_Empresa 039 (36255)<br>`;
    }
    const [code, kit] = termOfWork(careerLevel, workModality, contractType);
    contractCodes += `${code}<br>`;
    admissionKit += `${kit}<br>`;
    return `${contractCodes}<br>${admissionKit}`;
}
