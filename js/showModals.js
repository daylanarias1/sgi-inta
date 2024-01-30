function showModal(modalId) {
    const modal = document.getElementById(modalId);
    const close = modal.querySelector(".button-close-modal");
    const modalContent = modal.querySelector(".modal-content");
    modal.classList.add("modal-active");
    modalContent.classList.add("modal-content-active");

    close.addEventListener("click", () => {
        modalContent.classList.remove("modal-content-active");
        modalContent.classList.add("modal-content-closing");
        setTimeout(() => {
            modal.classList.remove("modal-active");
            modalContent.classList.remove("modal-content-closing");
        }, 170);
    });
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    const modalContent = modal.querySelector(".modal-content");
    modalContent.classList.remove("modal-content-active");
    modalContent.classList.add("modal-content-closing");
    setTimeout(() => {
        modal.classList.remove("modal-active");
        modalContent.classList.remove("modal-content-closing");
    }, 170);
}
