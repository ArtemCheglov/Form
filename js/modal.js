const openBtn = document.getElementById("open-modal-btn")
const backdrop = document.getElementById("backdrop")
const closeBtn = document.getElementById("modal__close__button")

openBtn.addEventListener('click', onOpenModal)
closeBtn.addEventListener('click', onCloseModal)
backdrop.addEventListener("click", onBackdropClick)

function onOpenModal() {
    window.addEventListener("keydown", onEscapePress)
    backdrop.classList.add("active")
}

function onCloseModal() {
    window.removeEventListener("keydown", onEscapePress)
    backdrop.classList.remove("active")
}

function onEscapePress(event) {
    console.log(event.code);
    if (event.code === 'Escape') {
        onCloseModal()
    }
}

function onBackdropClick(event) {
    if (event.target === event.currentTarget) {
        onCloseModal()
    }
    console.log(event.currentTarget);
    console.log(event.target);
}