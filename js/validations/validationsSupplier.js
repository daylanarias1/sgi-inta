function init() {
    const errorMessages = {
        search: {
            patternMismatch: "No se permiten caracteres especiales",
        },
        name: {
            valueMissing: "Este campo no puede ir vacío",
            patternMismatch: "No se permiten caracteres especiales",
        },
        address: {
            valueMissing: "Este campo no puede ir vacío",
        },
        phone: {
            valueMissing: "Este campo no puede ir vacío",
            patternMismatch: "El formato debe ser XXXX-XXXX",
        }
    };

    setupForm("search-supplier-form", errorMessages);
    setupForm("insert-supplier-form", errorMessages);
    setupForm("update-supplier-form", errorMessages);
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

function setInputErrors(selector) {
    const form = document.getElementById(selector);
    form.querySelectorAll(".span-for-input-error").forEach(span => span.textContent = "");
    form.querySelectorAll(".input, .textarea").forEach(input => input.style.borderColor = "#989aa1");
}

init();