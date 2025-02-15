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

  const resultCodesAndKit = admissionFilters(contractType, workModality, careerLevel, department);
});

function admissionFilters(
  contractType: string,
  workModality: string,
  careerLevel: string,
  department: string
): string {
  let contractCodes = "";
  let admissionKit = "";

  const [code, kit] = contract(contractType, workModality, department, careerLevel);
  contractCodes += `${code}`;
  admissionKit += `${kit}`;

  contractCodes += `${termOfWork(careerLevel, department)}
  `;

  return `${contractCodes}\n${admissionKit}`;
}
