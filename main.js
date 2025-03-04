const companyForm = document.querySelector("#company-form");
companyForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(companyForm);
  const company = Object.fromEntries(formData.entries());
  switch (company["company"]) {
    case "company-1":
      window.location.href = "./dist/company-1/index.html";
      break;
    case "company-2":
      window.location.href = "./dist/company-2/index.html";
      break;
    case "company-3":
      window.location.href = "./dist/company-3/index.html";
      break;
    case "company-4":
      window.location.href = "./dist/company-4/index.html";
      break;
    case "company-5":
      window.location.href = "./dist/company-5/index.html";
      break;
    case "company-6":
      window.location.href = "./dist/company-6/index.html";
      break;
    case "company-7":
      window.location.href = "./dist/company-7/index.html";
      break;
    case "company-8":
      window.location.href = "./dist/company-8/index.html";
      break;
    default:
      alert("Empresa não encontrada");
  }
});
