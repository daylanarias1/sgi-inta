function init() {
    const errorMessages = {
        search: {
            patternMismatch: "No se permiten caracteres especiales",
        },
        group: {
            valueMissing: "Este campo no puede ir vacío",
            patternMismatch: "No se permiten caracteres especiales",
        },
        name: {
            valueMissing: "Este campo no puede ir vacío",
            patternMismatch: "No se permiten caracteres especiales",
        },
        "unit-measurement": {
            valueMissing: "Este campo no puede ir vacío",
            patternMismatch: "No se permiten caracteres especiales",
        },
        subgroup: {
            valueMissing: "Este campo no puede ir vacío",
            patternMismatch: "No se permiten caracteres especiales",
        },
        brand: {
            valueMissing: "Este campo no puede ir vacío",
            patternMismatch: "No se permiten caracteres especiales",
        },
        quantity: {
            valueMissing: "Este campo no puede ir vacío",
            patternMismatch: "Solo se permiten valores numéricos",
        },
        "unit-value": {
            valueMissing: "Este campo no puede ir vacío",
            patternMismatch: "El formato debe ser numérico y utilizar solo una coma (,)",
        }
    };

    if (document.getElementById("search-supply-form")) {
        setupForm("search-supply-form", errorMessages);
        document.getElementById("insert-supply-form") && setupForm("insert-supply-form", errorMessages);
    } else setupForm("update-supply-form", errorMessages);
}

function setupForm(formId, errorMessages) {
    const form = document.getElementById(formId);
    const inputs = form.querySelectorAll(".input");
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
    form.querySelectorAll(".input").forEach(input => input.style.borderColor = "#989aa1");
}

init();