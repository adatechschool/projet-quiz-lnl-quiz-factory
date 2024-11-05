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
    optionsButton.appendChild(optionButton);
  });
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
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
