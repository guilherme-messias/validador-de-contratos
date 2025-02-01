import contractModalityHomeOffice from "./filters/contractModalityHomeOffice.js";
import contractModalityHybrid from "./filters/contractModalityHybrid.js";
import contractModalityOffice from "./filters/contractModalityOffice.js";

const btnNewQuery = document.getElementById("btn-new-query") as HTMLButtonElement;
btnNewQuery.classList.add("hidden");

document.getElementById("contract-details-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const contractType = (document.getElementById("contract-type") as HTMLSelectElement).value;
  const workModality = (document.getElementById("work-modality") as HTMLSelectElement).value;
  const careerLevel = (document.getElementById("career-level") as HTMLSelectElement).value;
  const isAdvocate = (document.querySelector('input[name="flag"]:checked') as HTMLSelectElement)
    .value;
  const position = (document.getElementById("position") as HTMLSelectElement).value;
});

function contractFilters(
  contractType: string,
  workModality: string,
  careerLevel: string,
  position: string
): string {
  let result = "";

  function normalizePosition(position: string): string {
    return position
      .toUpperCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "-");
  }

  if (contractType !== "contract-apprentice" && contractType !== "contract-inter") {
    if (workModality === "modality-office") {
      result += `${contractModalityOffice(careerLevel, contractType)}
    
  `;
    }

    if (workModality === "modality-home-office") {
      result += `${contractModalityHomeOffice(careerLevel, contractType)}
      
      `;
    }

    if (workModality === "modality-hybrid") {
      result += `${contractModalityHybrid(careerLevel, contractType)}
        
        `;
    }
  }

  return result;
}
