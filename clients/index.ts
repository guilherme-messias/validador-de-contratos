const companyForm = document.querySelector('#company-form') as HTMLFormElement;

companyForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(companyForm);
  const company = Object.fromEntries(formData.entries());
  console.log(company);

  // TODO: entender porque não aparece nome da empresa no console
});