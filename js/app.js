import "../css/style.scss"

const box = document.querySelector(".typing")
const text = [
  "Hello, what's up?",
  "It's nice you're here.",
  "You're watching right now use of GSAP library.^It helps to animate any property of any object.",
  "Let's make some cool stuff!",
]
let wordIndex = 0
let textIndex = 0
let oldTime = 0
const speed = 80
const stop = 3000
let activeDomElement = box

const typing = (newTime) => {
  if (newTime - oldTime > speed) {
    const letter = text[textIndex].substr(wordIndex, 1)
    if (wordIndex === text[textIndex].length) {
      if (textIndex === text.length - 1) {
        return
      }
      return setTimeout(() => {
        box.textContent = ""
        textIndex++
        wordIndex = 0
        requestAnimationFrame(typing)
      }, stop)
    } else if (wordIndex === 0 || letter === "^") {
      const p = document.createElement("p")
      box.appendChild(p)
      activeDomElement = p
    }

    if (letter !== "^") {
      activeDomElement.textContent += letter
    }

    oldTime = newTime
    wordIndex++
  }

  requestAnimationFrame(typing)
}

typing()
