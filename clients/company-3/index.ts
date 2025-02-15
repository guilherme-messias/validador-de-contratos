import contract from "./filters/contract.js";
import termOfWork from "./filters/termOfWork.js";

const btnNewQuery = document.getElementById("btn-new-query") as HTMLButtonElement;
btnNewQuery.classList.add("hidden");

document.getElementById("contract-details-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const contractType = (document.getElementById("contract-type") as HTMLSelectElement).value;
  const careerLevel = (document.getElementById("career-level") as HTMLSelectElement).value;
  const monthlyHours = (document.getElementById("monthly-hours") as HTMLSelectElement).value;

  const resultCodesAndKit = admissionFilters(contractType, careerLevel, monthlyHours);
});

function admissionFilters(contractType: string, careerLevel: string, monthlyHours: string): string {
  let contractCodes = "";
  let admissionKit = "";

  const [code, kit] = contract(monthlyHours, careerLevel, contractType);
  contractCodes += `${code}`;
  admissionKit += `${kit}`;

  contractCodes += `${termOfWork(careerLevel)}`;

  return `${contractCodes}\n${admissionKit}`;
}
