const form = document.getElementById("quiz-form")
const answer = Array.from(document.querySelectorAll(".answer"))
const questions = document.querySelectorAll(".question-item")
const alert = document.getElementById("alert")

//create event listener to listen to when answers are submitted
form.addEventListener("submit", e => {
  e.preventDefault()
  //make unanswered questions red/wrong
  questions.forEach(questionItem => {
    questionItem.classList.remove("correct")
    questionItem.classList.add("incorrect")
  })
  //score questions
  score()
  //refresh page after submission
  setTimeout(() => {
    window.location.reload()
  }, 3000)
})

function score() {
  let j = 0
  const filtered = answer.filter(answer => answer.checked)
  for (let i = 0; i < filtered.length; i++) {
    j += 1
    if (filtered[i].value == "true") {
      questions[i].classList.remove("incorrect")
      questions[i].classList.add("correct")

      if (j == questions.length) {
        alert.classList.add("active")

        setTimeout(() => {
          alert.classList.remove("active")
        }, 1000)
      }
    } else {
      j = 0
    }
  }
}
