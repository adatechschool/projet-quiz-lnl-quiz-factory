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
      // En plus de donner à la fonction le texte de la réponse donnée, et de la bonne réponse, on lui donne aussi le bouton cliqué
      checkAnswer(optionsText, currentQuestion.correct_answer, optionButton);
    });
    optionsElement.appendChild(optionButton);
  });
  nextButton.style.display = "none";
}

function checkAnswer(selectedOption, correctAnswer, optionButton) {
  // En plus d'incrémenter les conteurs de bonne et mauvaise réponse, on ajoute une classe au bouton sélectionnée
  optionButton.classList.add("selected-option");
  const optionsButton = optionsElement.querySelectorAll("button");
  optionsButton.forEach((button) => (button.disabled = true));

  // Attention - si jamais vous voulez bloquer les autres boutons, plusieurs options s'offrent à vous...
  // 1. retirer les EventListener sur les autres boutons
  // 2. ajouter l'attribut "disabled" aux boutons pour bloquer le clic

  if (selectedOption === correctAnswer) {
    optionButton.style.border = "5px solid chartreuse";
    optionButton.style.boxShadow = "5px 5px 8px chartreuse";
    correctAnswersCount++;
  } else {
    optionButton.style.border = "5px solid #FF0800";
    optionButton.style.boxShadow = "5px 5px 8px #FF0800";
    wrongAnswersCount++;
  }

  nextButton.style.display = "block";
}

function showResults() {
  questionElement.innerText = "Fin du Quiz !";
  nextButton.style.display = "none";
  function randomInRange(min, max) {
    return Math.random() * (max - min) + min * 26;
  }

  confetti({
    angle: randomInRange(55, 125),
    spread: randomInRange(50, 70),
    particleCount: randomInRange(50, 100),
    origin: { y: 0.6 },
  });
  // au lieu de modifier directement optionsElement, vous pouvez créer un élément qui contiendra les résultats de votre quizz
  // optionsElement.innerHTML = `Vous avez obtenu ${correctAnswersCount} bonnes réponses et ${wrongAnswersCount} mauvaises réponses.`;
  // if (correctAnswersCount > 2) {
  //   optionsElement.innerHTML += "Bravo, vous avez réussi !";
  // } else {
  //   optionsElement.innerHTML += "Désolé, essayez encore";
  // }

  // on vide optionsElement, afin de pouvoir lui mettre des stats
  optionsElement.innerHTML = "";
  // on fait l'élément pour les résultats
  const resultsBox = document.createElement("div");
  resultsBox.classList.add("results-box"); // on lui met une classe pour pouvoir lui mettre un style CSS
  // on lui fait la même chose que vous aviez fait dans le optionsElement
  resultsBox.innerHTML = `Vous avez obtenu ${correctAnswersCount} bonnes réponses et ${wrongAnswersCount} mauvaises réponses.`;
  resultsBox.innerHTML += `<br>`; // j'ajoute un ptit saut de ligne pour le style
  if (correctAnswersCount > 3) {
    resultsBox.innerHTML += "Bravo, vous avez réussi !";
  } else {
    resultsBox.innerHTML += "Essaie encore !";
  }
  // puis on l'ajoute à optionsElement
  optionsElement.appendChild(resultsBox);

  const restartButton = document.createElement("button");
  restartButton.innerText = "Recommencer le Quiz";
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
