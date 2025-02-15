import termOfWork from "./filters/termOfWork.js";

const btnNewQuery = document.getElementById("btn-new-query") as HTMLButtonElement;
btnNewQuery.classList.add("hidden");

document.getElementById("contract-details-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const contractType = (document.getElementById("contract-type") as HTMLSelectElement).value;
  const workModality = (document.getElementById("work-modality") as HTMLSelectElement).value;
  const careerLevel = (document.getElementById("career-level") as HTMLSelectElement).value;

  const resultCodesAndKit = admissionFilters(contractType, workModality, careerLevel);
});

function admissionFilters(contractType: string, workModality: string, careerLevel: string): string {
  let contractCodes = "";
  let admissionKit = "";

  if (contractType !== "contract-apprentice" && contractType !== "contract-inter") {
    contractCodes += `emp - Contrato de Trabalho_Empresa 039 (36255)\n`;
  }

  const [code, kit] = termOfWork(careerLevel, workModality, contractType);

  contractCodes += `${code}\n`;
  admissionKit += `${kit}\n`;

  return `${contractCodes}\n${admissionKit}`;
}
