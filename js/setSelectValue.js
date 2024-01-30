function setChooseSection(unitSelectorName, departmentSelectorName, unitId, departmentId) {
    document.querySelector(unitSelectorName).style.display = unitId == 0 ? "none" : "block";
    document.querySelector(departmentSelectorName).style.display = departmentId == 0 ? "none" : "block";

    const unitCheck = document.getElementById("unit-update");
    const departmentCheck = document.getElementById("department-update");

    unitCheck.checked = false;
    departmentCheck.checked = false;

    if (unitId != 0) {
        unitCheck.checked = true;
    } else if (departmentId != 0) {
        departmentCheck.checked = true;
    }

    setSelectValue(departmentSelectorName, departmentId);
    setSelectValue(unitSelectorName, unitId);
}

function setSelectValue(name, value) {
    document.querySelector(name).value = value;
}