import contract from "./filters/contract.js";
import termOfWork from "./filters/termOfWork.js";

const btnNewQuery = document.getElementById("btn-new-query") as HTMLButtonElement;
btnNewQuery.classList.add("hidden");

document.getElementById("contract-details-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const contractType = (document.getElementById("contract-type") as HTMLSelectElement).value;
  const workModality = (document.getElementById("work-modality") as HTMLSelectElement).value;
  const careerLevel = (document.getElementById("career-level") as HTMLSelectElement).value;
  const department = (document.getElementById("department") as HTMLSelectElement).value;

  const contractCodes = admissionFilters(contractType, workModality, careerLevel, department);
  console.log(contractCodes);
});

function admissionFilters(
  contractType: string,
  workModality: string,
  careerLevel: string,
  department: string
): string {
  let contractCodes = "";

  if (contractType !== "contract-apprentice" && contractType !== "contract-inter") {
    contractCodes += `${contract(workModality)}
  `;
  }

  contractCodes += `${termOfWork(careerLevel, department)}
  `;

  return contractCodes;
}
