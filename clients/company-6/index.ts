import termOfWork from "./filters/termOfWork.js";

const btnNewQuery = document.getElementById("btn-new-query") as HTMLButtonElement;
btnNewQuery.classList.add("hidden");

document.getElementById("contract-details-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const contractType = (document.getElementById("contract-type") as HTMLSelectElement).value;
  const workModality = (document.getElementById("work-modality") as HTMLSelectElement).value;
  const careerLevel = (document.getElementById("career-level") as HTMLSelectElement).value;

  const contractCodes = admissionFilters(contractType, workModality, careerLevel);
  console.log(contractCodes);
});

function admissionFilters(contractType: string, workModality: string, careerLevel: string): string {
  let contractCodes = "";
  let admissionKit = "";

  if (contractType !== "contract-apprentice" && contractType !== "contract-inter") {
    contractCodes += `emp - Contrato de Trabalho_Empresa 039 (36255)\n`;
  }

  if (contractType === "contract-apprentice") {
    admissionKit += `emp - Contrato de Aprendizagem_Empresa 039 (36256)\n`;
  }

  contractCodes += `${termOfWork(careerLevel, workModality, contractType)}
  `;

  return `${contractCodes}\n${admissionKit}`;
}
