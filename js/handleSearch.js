if (document.getElementById("search")) {
    let search = document.getElementById("search");
    let clearButton = document.getElementById("clear-button");

    search.addEventListener("input", () => (search.value.length > 0 ? (clearButton.style.display = "grid") : (clearButton.style.display = "none")));

    clearButton.addEventListener("click", () => {
        search.value = "";
        clearButton.style.display = "none";
    });
}