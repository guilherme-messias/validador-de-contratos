const companyForm = document.querySelector('#company-form');
companyForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(companyForm);
    const company = Object.fromEntries(formData.entries());
    console.log(company);
});
