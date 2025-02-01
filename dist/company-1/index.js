const btnNewQuery = document.getElementById("btn-new-query");
btnNewQuery.classList.add("hidden");
document.getElementById("contract-details-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const contractType = document.getElementById("contract-type").value;
    const workModality = document.getElementById("work-modality").value;
    const careerLevel = document.getElementById("career-level").value;
    const isAdvocate = document.querySelector('input[name="flag"]:checked')
        .value;
    const position = document.getElementById("position").value;
});
function contractFilters(contractType, workModality, careerLevel, position) {
    let result = "";
    function normalizePosition(position) {
        return position
            .toUpperCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "-");
    }
    return result;
}
