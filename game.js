import { quiz_fatoumata_kebe } from "./question.js";
const question = document.querySelector(".question");
const options = document.querySelector(".options");
console.log("question", quiz_fatoumata_kebe);
console.log(
  "1erequestion",
  quiz_fatoumata_kebe.questions[0]
); /*appel de la première question question text bonne réponse*/
const currentQuestion =
  quiz_fatoumata_kebe
    .questions[3]; /*appel de la première question question text bonne réponse*/
question.innerText =
  currentQuestion.text; /* récupère l'emplacement de question pui snous avons changé le texte de la question */
