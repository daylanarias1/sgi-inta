function closeOverlay() {
    let offcanvas = document.querySelector(".offcanvas");
    let overlay = document.querySelector(".overlay");

    if (offcanvas && overlay) {
        offcanvas.classList.remove("active");
        overlay.classList.remove("active");
    }
};

document.querySelector(".button-open-offcanvas").addEventListener("click", () => {
    let offcanvas = document.querySelector(".offcanvas");
    let overlay = document.querySelector(".overlay");

    if (offcanvas && overlay) {
        offcanvas.classList.add("active");
        overlay.classList.add("active");
    }
});

if (document.querySelector(".overlay")) {
    let overlay = document.querySelector(".overlay");
    overlay.addEventListener("click", () => closeOverlay());
    document.querySelector(".button-logout").addEventListener("click", () => closeOverlay());
}

