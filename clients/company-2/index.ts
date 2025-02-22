import contractModalityHomeOffice from "./filters/contractModalityHomeOffice.js";
import contractModalityHybrid from "./filters/contractModalityHybrid.js";
import contractModalityOffice from "./filters/contractModalityOffice.js";
import termOfWork from "./filters/termOfWork.js";

const btnNewQuery = document.getElementById("btn-new-query") as HTMLButtonElement;
btnNewQuery.classList.add("hidden");

const divResultCodesAndKit = document.getElementById("result-codes-and-kit") as HTMLDivElement;

document.getElementById("contract-details-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const contractType = (document.getElementById("contract-type") as HTMLSelectElement).value;
  const workModality = (document.getElementById("work-modality") as HTMLSelectElement).value;
  const careerLevel = (document.getElementById("career-level") as HTMLSelectElement).value;
  const department = (document.getElementById("department") as HTMLSelectElement).value;
  const state = (document.getElementById("state") as HTMLSelectElement).value;

  const resultCodesAndKit = admissionFilters(
    contractType,
    workModality,
    careerLevel,
    department,
    state
  );

  btnNewQuery.style.display = "block";

  divResultCodesAndKit.innerHTML = resultCodesAndKit;
});

btnNewQuery.addEventListener("click", () => {
  window.location.reload();
});

function admissionFilters(
  contractType: string,
  workModality: string,
  careerLevel: string,
  department: string,
  state: string
): string {
  let contractCodes = "";
  let admissionKit = "";

  if (contractType !== "contract-apprentice" && contractType !== "contract-inter") {
    if (workModality === "modality-office") {
      const [code, kit] = contractModalityOffice(careerLevel, contractType, department, state);

      contractCodes += `${code}`;
      admissionKit += `${kit}`;
    }

    if (workModality === "modality-home-office") {
      const [code, kit] = `${contractModalityHomeOffice(
        careerLevel,
        contractType,
        department,
        state
      )}`;

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

  return `${contractCodes}<br>${admissionKit}`;
}
