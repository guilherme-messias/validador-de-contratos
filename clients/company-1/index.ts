import contractModalityHomeOffice from "./filters/contractModalityHomeOffice.js";
import contractModalityHybrid from "./filters/contractModalityHybrid.js";
import contractModalityOffice from "./filters/contractModalityOffice.js";
import termOfWork from "./filters/termOfWork.js";

const btnNewQuery = document.getElementById("btn-new-query") as HTMLButtonElement;

const divResultCodesAndKit = document.getElementById("result-codes-and-kit") as HTMLDivElement;

document.getElementById("contract-details-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const contractType = (document.getElementById("contract-type") as HTMLSelectElement).value;
  const workModality = (document.getElementById("work-modality") as HTMLSelectElement).value;
  const careerLevel = (document.getElementById("career-level") as HTMLSelectElement).value;
  const isAdvocate = (document.querySelector('input[name="flag"]:checked') as HTMLSelectElement)
    .value;
  const position = (document.getElementById("position") as HTMLSelectElement).value;

  const resultCodesAndKit = admissionFilters(
    contractType,
    workModality,
    careerLevel,
    position,
    isAdvocate
  );

  btnNewQuery.style.display = "flex";

  divResultCodesAndKit.innerHTML = resultCodesAndKit;
});

btnNewQuery.addEventListener("click", () => {
  window.location.reload();
});

function admissionFilters(
  contractType: string,
  workModality: string,
  careerLevel: string,
  position: string,
  isAdvocate: string
): string {
  let contractCodes = "";
  let admissionKit = "";

  function normalizePosition(position: string): string {
    return position
      .toUpperCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "-");
  }

  if (
    contractType !== "contract-apprentice" &&
    careerLevel !== "career-level-director" &&
    contractType !== "contract-inter"
  ) {
    if (workModality === "modality-office") {
      const [code, kit] = contractModalityOffice(careerLevel, contractType);

      contractCodes += `${code}<br>`;
      admissionKit += `${kit}<br>`;
    }

    if (workModality === "modality-home-office") {
      const [code, kit] = contractModalityHomeOffice(careerLevel, contractType);

      contractCodes += `${code}<br>`;
      admissionKit += `${kit}<br>`;
    }

    if (workModality === "modality-hybrid") {
      const [code, kit] = contractModalityHybrid(careerLevel, contractType);

      contractCodes += `${code}<br>`;
      admissionKit += `${kit}<br>`;
    }
  }

  if (contractType === "contract-apprentice") {
    admissionKit += `Titulo: APRENDIZ<br>`;
  }

  if (contractType === "contract-inter") {
    admissionKit += `Titulo: ESTAGIARIO<br>`;
  }

  if (careerLevel === "career-level-director") {
    admissionKit += `Titulo: DIRETOR S/ FGTS | SEM CONTRATO<br>`;
  }

  const [code, kit] = termOfWork(
    contractType,
    careerLevel,
    normalizePosition(position),
    isAdvocate
  );

  contractCodes += `${code}<br>`;
  admissionKit += `${kit}<br>`;

  return `${contractCodes}<br>${admissionKit}`;
}
