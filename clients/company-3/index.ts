import contractMonthlyHours from "./filters/contractMonthlyHours.js";
import termOfWork from "./filters/termOfWork.js";

const btnNewQuery = document.getElementById("btn-new-query") as HTMLButtonElement;
btnNewQuery.classList.add("hidden");

document.getElementById("contract-details-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const contractType = (document.getElementById("contract-type") as HTMLSelectElement).value;
  const careerLevel = (document.getElementById("career-level") as HTMLSelectElement).value;
  const monthlyHours = (document.getElementById("monthly-hours") as HTMLSelectElement).value;

  const contractCodes = contractFilters(contractType, careerLevel, monthlyHours);
  console.log(contractCodes);
});

function contractFilters(contractType: string, careerLevel: string, monthlyHours: string): string {
  let contractCodes = "";

  if (contractType !== "contract-apprentice" && contractType !== "contract-inter") {
    contractCodes += `${contractMonthlyHours(monthlyHours)}
    `;
  }

  contractCodes += `${termOfWork(careerLevel)}
  `;

  return contractCodes;
}
