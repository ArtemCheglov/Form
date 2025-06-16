// 1.Напиши скрипт в якому є три радіобатони зі значенями кольрів. При обиранніна будь якого колір фону боді змінюється відповідно.
const form = document.getElementById("form-task3")

form.addEventListener("change", onRadioClick)

function onRadioClick(event) {
    console.log(event.target.value);
    document.body.style.backgroundColor = event.target.value;
}