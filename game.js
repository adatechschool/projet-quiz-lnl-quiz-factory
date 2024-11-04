import { quiz_fatoumata_kebe } from "./question.js";

const question = document.querySelector(".question");
const options = document.querySelector(".options");

console.log("question", quiz_fatoumata_kebe);
console.log("1erequestion", quiz_fatoumata_kebe.questions[1]);
/*appel de la première question question text bonne réponse*/

const currentQuestion = quiz_fatoumata_kebe.questions[0];
/*appel de la première question question text bonne réponse*/

question.innerText = currentQuestion.text;
/* récupère l'emplacement de question puis nous avons changé le texte de la question */

currentQuestion.options.forEach((optionText) => {
  const optionButton = document.createElement("button");
  optionButton.innerText = optionText;

  // optionButton.classList.add(optionText);
  // BLOQUE CERTAINES QUESTIONS ET REPONSES

  options.appendChild(optionButton);
});
