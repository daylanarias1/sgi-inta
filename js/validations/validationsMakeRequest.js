function init() {
    const errorMessages = {
        search: {
            patternMismatch: "No pueden ir caracteres especiales",
        },
        description: {
            valueMissing: "Este campo no puede ir vacío",
        },
    };

    setupForm("search-supply-form", errorMessages);
    setupForm("make-request-form", errorMessages);
}

function setupForm(formId, errorMessages) {
    const form = document.getElementById(formId);
    const inputs = form.querySelectorAll(".input, .textarea");
    inputs.forEach(input => input.addEventListener("input", () => validate(input, errorMessages)));
    form.querySelector("button[type='submit']").addEventListener("click", e => submitForm(e, form, inputs, errorMessages));
}

function validate(input, errorMessages) {
    const span = input.parentElement.querySelector(".span-for-input-error");
    span.textContent = Object.keys(errorMessages[input.name])
        .filter(error => input.validity[error])
        .map(error => errorMessages[input.name][error])
        .join(" ");
    input.style.borderColor = span.textContent ? "#f41d1d" : "#849a30";
}

function submitForm(e, form, inputsForm, errorMessages) {
    inputsForm.forEach(input => validate(input, errorMessages));
    Array.from(form.querySelectorAll(".span-for-input-error")).some(span => span.textContent !== "") && e.preventDefault()
}

init();