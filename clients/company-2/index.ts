import contractModalityHomeOffice from "./filters/contractModalityHomeOffice.js";
import contractModalityHybrid from "./filters/contractModalityHybrid.js";
import contractModalityOffice from "./filters/contractModalityOffice.js";
import termOfWork from "./filters/termOfWork.js";

const btnNewQuery = document.getElementById("btn-new-query") as HTMLButtonElement;
btnNewQuery.classList.add("hidden");

document.getElementById("contract-details-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const contractType = (document.getElementById("contract-type") as HTMLSelectElement).value;
  const workModality = (document.getElementById("work-modality") as HTMLSelectElement).value;
  const careerLevel = (document.getElementById("career-level") as HTMLSelectElement).value;
  const department = (document.getElementById("department") as HTMLSelectElement).value;
  const state = (document.getElementById("state") as HTMLSelectElement).value;

  const contractCodes = admissionFilters(contractType, workModality, careerLevel, department, state);
  console.log(contractCodes);
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
      contractCodes += `${contractModalityOffice(careerLevel, contractType, department, state)}
  `;
    }

    if (workModality === "modality-home-office") {
      contractCodes += `${contractModalityHomeOffice(careerLevel, contractType, department, state)}    
      `;
    }

    if (workModality === "modality-hybrid") {
      contractCodes += `${contractModalityHybrid(careerLevel, contractType, department, state)}
        `;
    }
  }

  contractCodes += `${termOfWork(contractType, careerLevel, department)}
  `;

  return `${contractCodes}\n${admissionKit}`;
}
