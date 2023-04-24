const throttle = require('lodash.throttle');
let userDate = JSON.parse(localStorage.getItem("feedback-form-state"))||{}
const form = document.querySelector('.feedback-form')
form.addEventListener('input', throttle(onInput,500))
form.addEventListener('submit', onSubmit)
function onInput(event) {
    userDate[event.target.name] = event.target.value
    // console.log(userDate)
    localStorage.setItem("feedback-form-state", JSON.stringify(userDate))
}
function checkLocalStorage() {
    if (userDate) {
        const { email, message } = userDate
        form.email.value = email||''
        form.message.value = message||''
    }
}
checkLocalStorage()
function onSubmit(event) {
    event.preventDefault()
    if (!(form.email.value && form.message.value)) {
        return alert(`Заповніть всі поля!`)
    }
    console.log(JSON.parse(localStorage.getItem("feedback-form-state")))
    localStorage.removeItem("feedback-form-state")
    event.target.reset()
    userDate = {}
}

