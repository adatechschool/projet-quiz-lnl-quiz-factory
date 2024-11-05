import { quiz_fatoumata_kebe } from "./script";

// Récupérer les emplacements pour afficher la question et les options
const questionElement = document.querySelector("#question-text"); // Élément pour la question
const optionsElement = document.querySelector("#options-container"); // Élément pour les options
const nextButton = document.querySelector("#next-button"); // Bouton "Suivant"

let currentQuestionIndex = 0; // Index de la question actuelle
let correctAnswersCount = 0; // Compteur pour les bonnes réponses
let wrongAnswersCount = 0; // Compteur pour les mauvaises réponses

function loadQuestion() {
  console.log(
    "on charge la quetion " +
      currentQuestionIndex +
      "(currentQuestionIndex) avec laodQuestion() "
  );
  optionsElement.innerHTML = "";

  const currentQuestion = quiz_fatoumata_kebe.questions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.text;
  currentQuestion.options.forEach((optionsText) => {
    const optionButton = document.createElement("button");
    optionButton.innerText = optionsText;
    optionsElement.appendChild(optionButton);
  });
}
