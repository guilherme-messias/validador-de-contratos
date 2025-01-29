const companyForm = document.querySelector("#company-form") as HTMLFormElement;

companyForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(companyForm);
  const company = Object.fromEntries(formData.entries());
  switch (company["company"]) {
    case "company-1":
      window.location.href = '../clients/company-1/index.html';
      break;
    case "company-2":
      window.location.href = '../clients/company-2/index.html';
      break;
    case "company-3":
      window.location.href = '../clients/company-3/index.html';
      break;
    case "company-4":
      window.location.href = '../clients/company-4/index.html';
      break;
    case "company-5":
      window.location.href = '../clients/company-5/index.html';
      break;
    case "company-6":
      window.location.href = '../clients/company-6/index.html';
      break;
    case "company-7":
      window.location.href = '../clients/company-7/index.html';
      break;
    case "company-8":
      window.location.href = '../clients/company-8/index.html';
      break;
    default:
      console.log("Empresa não encontrada");
  }
});
