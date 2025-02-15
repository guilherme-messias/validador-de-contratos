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
    const isAdvocate = document.querySelector('input[name="flag"]:checked')
        .value;
    const position = document.getElementById("position").value;
    const resultCodesAndKit = admissionFilters(contractType, workModality, careerLevel, position, isAdvocate);
    divResultCodesAndKit.innerHTML = resultCodesAndKit;
});
function admissionFilters(contractType, workModality, careerLevel, position, isAdvocate) {
    let contractCodes = "";
    let admissionKit = "";
    function normalizePosition(position) {
        return position
            .toUpperCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "-");
    }
    if (contractType !== "contract-apprentice" &&
        careerLevel !== "career-level-director" &&
        contractType !== "contract-inter") {
        if (workModality === "modality-office") {
            const [code, kit] = contractModalityOffice(careerLevel, contractType);
            contractCodes += `${code}<br>`;
            admissionKit += `${kit}<br>`;
        }
        if (workModality === "modality-home-office") {
            const [code, kit] = contractModalityHomeOffice(careerLevel, contractType);
            contractCodes += `${code}<br>`;
            admissionKit += `${kit}<br>`;
        }
        if (workModality === "modality-hybrid") {
            const [code, kit] = contractModalityHybrid(careerLevel, contractType);
            contractCodes += `${code}<br>`;
            admissionKit += `${kit}<br>`;
        }
    }
    if (contractType === "contract-apprentice") {
        admissionKit += `Titulo: APRENDIZ<br>`;
    }
    if (contractType === "contract-inter") {
        admissionKit += `Titulo: ESTAGIARIO<br>`;
    }
    if (careerLevel === "career-level-director") {
        admissionKit += `Titulo: DIRETOR S/ FGTS | SEM CONTRATO<br>`;
    }
    const [code, kit] = termOfWork(contractType, careerLevel, normalizePosition(position), isAdvocate);
    contractCodes += `${code}<br>`;
    admissionKit += `${kit}<br>`;
    return `${contractCodes}<br>${admissionKit}`;
}
