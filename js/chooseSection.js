if (document.getElementById("unit-insert")) {
    const toggleElement = (flag, targetElement) => (flag !== 0 ? (targetElement.style.display = "block") : (targetElement.style.display = "none"));

    const unitInsert = document.getElementById("unit-insert");
    const unitsInsert = document.getElementById("units-insert");
    const departmentInsert = document.getElementById("department-insert");
    const departmentsInsert = document.getElementById("departments-insert");

    const unitUpdate = document.getElementById("unit-update");
    const unitsUpdate = document.getElementById("units-update");
    const departmentUpdate = document.getElementById("department-update");
    const departmentsUpdate = document.getElementById("departments-update");

    unitInsert.addEventListener("change", () => {
        toggleElement(1, unitsInsert);
        toggleElement(0, departmentsInsert);
    });

    departmentInsert.addEventListener("change", () => {
        toggleElement(0, unitsInsert);
        toggleElement(1, departmentsInsert);
    });

    unitUpdate.addEventListener("change", () => {
        toggleElement(1, unitsUpdate);
        toggleElement(0, departmentsUpdate);
    });

    departmentUpdate.addEventListener("change", () => {
        toggleElement(0, unitsUpdate);
        toggleElement(1, departmentsUpdate);
    });

}