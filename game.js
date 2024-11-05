import { quiz_fatoumata_kebe } from "./question.js";

const questionElement = document.querySelector("#question-text");
const optionsElement = document.querySelector("#options-container");
const nextButton = document.querySelector("#next-button");

let currentQuestionIndex = 0;
let correctAnswersCount = 0;
let wrongAnswersCount = 0;

function loadQuestion() {
  optionsElement.innerText = "";
  const currentQuestion = quiz_fatoumata_kebe.questions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.text;

  currentQuestion.options.forEach((optionsText) => {
    const optionButton = document.createElement("button");
    optionButton.innerText = optionsText;
    optionsButton.appendChild(optionButton);
  });
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;

});

if (currentQuestionIndex < quiz_fatoumata_kebe.questions.length) {
  loadQuestion();
} else {
  questionElement.innerText = "fin";
  optionsElement.innerHTML = "";
  nextButton.style.display = "none";
}


  console.log(
    "currentQuestionIndex est maintenant égal a " + currentQuestionIndex
  );

  console.log(
    "Est-ce que il reste des questions ? (" +
      currentQuestionIndex +
      " < " +
      quiz_fatoumata_kebe.questions.length +
      " = " +
      (currentQuestionIndex < quiz_fatoumata_kebe.questions.length) +
      ")"
  );
  if (currentQuestionIndex < quiz_fatoumata_kebe.questions.length) {
    loadQuestion();
  } else {
    console.log("On indique la fin du quiz !");
    questionElement.innerText = "Fin !";
    optionsElement.innerHTML = "";
    nextButton.style.display = "none";
  }
});


loadQuestion();
