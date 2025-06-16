const openBtn = document.getElementById("open-modal-btn")
const backdrop = document.getElementById("backdrop")
const closeBtn = document.getElementById("modal__close__button")

openBtn.addEventListener('click', toggleModal)
closeBtn.addEventListener('click', toggleModal)

function toggleModal() {
    backdrop.classList.toggle("active")
}

const form = document.querySelector(".form")

form.addEventListener("submit", onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault()
        // console.dir(event.currentTarget.elements.value);
}

const jsInput = document.querySelector(".js-input")
jsInput.addEventListener("focus", onInputFocus)
jsInput.addEventListener("blur", onInputBlur)

function onInputFocus() {
    console.log(`инпут получил focus`);
}

function onInputBlur() {
    console.log(`инпут потерял focus`);
}