const companyForm = document.querySelector("#company-form") as HTMLFormElement;

companyForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(companyForm);
  const company = Object.fromEntries(formData.entries());
  switch (company["company"]) {
    case "company-1":
      console.log("Empresa 1");
      break;
    case "company-2":
      console.log("Empresa 2");
      break;
    case "company-3":
      console.log("Empresa 3");
      break;
    case "company-4":
      console.log("Empresa 4");
      break;
    case "company-5":
      console.log("Empresa 5");
      break;
    case "company-6":
      console.log("Empresa 6");
      break;
    case "company-7":
      console.log("Empresa 7");
      break;
    case "company-8":
      console.log("Empresa 8");
      break;
    default:
      console.log("Empresa não encontrada");
  }
});
