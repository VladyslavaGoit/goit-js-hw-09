const buttonStart = document.querySelector('button[data-start]')
const buttonStop = document.querySelector('button[data-stop]')
const body = document.querySelector('body')
let timerId

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function clickStart(event) {
    timerId = setInterval(() => body.style.backgroundColor = getRandomHexColor(), 1000)
    
    buttonStart.disabled = true
}
buttonStart.addEventListener('click', clickStart)

function clickStop(event) {
    clearInterval(timerId)
    
    buttonStart.disabled = false
}
buttonStop.addEventListener('click', clickStop)

