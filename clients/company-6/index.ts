import termOfWork from "./filters/termOfWork.js";

const btnNewQuery = document.getElementById("btn-new-query") as HTMLButtonElement;
btnNewQuery.classList.add("hidden");

document.getElementById("contract-details-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const contractType = (document.getElementById("contract-type") as HTMLSelectElement).value;
  const workModality = (document.getElementById("work-modality") as HTMLSelectElement).value;
  const careerLevel = (document.getElementById("career-level") as HTMLSelectElement).value;

  const result = contractFilters(contractType, workModality, careerLevel);
  console.log(result);
});

function contractFilters(
  contractType: string,
  workModality: string,
  careerLevel: string,
): string {
  let result = "";

  if (contractType !== "contract-apprentice" && contractType !== "contract-inter") {
    result += `emp - Contrato de Trabalho_Empresa 039 (36255)
  `;
  }

  result += `${termOfWork(careerLevel, department)}
  `;

  return result;
}
