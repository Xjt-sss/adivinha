const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1
function handleTryClick (e) {
  e.preventDefault()
  const inputNumber = document.querySelector("#inputNumber")
  if (Number(inputNumber) == randomNumber) {
    screen1.classList.add("hide")
    screen2.classList.remove("hide")
    screen2.querySelector("h2").innerText = "Você assertou em " + xAttempts + " tentativas!"
  }
  inputNumber = ""
  xAttempts++
}

const btnTry = document.querySelector("btnTry")
const btnReset = document.querySelector("btnReset")

btnTry.addEventListener('click', handleTryClick(e))
btnReset.addEventListener('click', function() {
  screen1.classList.remove("hide")
  screen2.classList.add("hide")
  xAttempts = 1
})