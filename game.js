import { quiz_fatoumata_kebe } from "./question.js";

const questionElement = document.querySelector("#question-text");
const optionsElement = document.querySelector("#options-container");
const nextButton = document.querySelector("#next-button");

let currentQuestionIndex = 0;
let correctAnswersCount = 0;
let wrongAnswersCount = 0;

function showQuestion() {
  const currentQuestion = quiz_fatoumata_kebe.questions[currentQuestionIndex];
  questionElement.innerHTML = currentQuestion.text;
  optionsElement.innerHTML = "";

  currentQuestion.options.forEach((optionsText) => {
    const optionButton = document.createElement("button");
    optionButton.innerText = optionsText;
    optionsElement.appendChild(optionButton);
    optionButton.addEventListener("click", () => {
      checkAnswer(optionsText, currentQuestion.correct_answer);
    });
    optionsElement.appendChild(optionButton);
  });
  nextButton.style.display = "none";
}

function checkAnswer(selectedOption, correctAnswer) {
  if (selectedOption === correctAnswer) {
    correctAnswersCount++;
  } else {
    wrongAnswersCount++;
  }

  nextButton.style.display = "block";
}

function showResults() {
  questionElement.innerText = "quiz terminé";
  optionsElement.innerHTML = `Vous avez obtenu ${correctAnswersCount} bonnes réponses et ${wrongAnswersCount} mauvaises réponses.`;
  if (correctAnswersCount > 2) {
    optionsElement.innerHTML += "Bravo, vous avez réussi !";
  } else {
    optionsElement.innerHTML += "Désolé, essayez encore";
  }

  const restartButton = document.createElement("button");
  restartButton.innerText = "Recommencer le quiz";
  restartButton.addEventListener("click", () => {
    currentQuestionIndex = 0;
    correctAnswersCount = 0;
    wrongAnswersCount = 0;
    nextButton.style.display = "none";
    showQuestion();
  });
  optionsElement.appendChild(restartButton);
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < quiz_fatoumata_kebe.questions.length) {
    showQuestion();
  } else {
    showResults();
  }
});

showQuestion();
