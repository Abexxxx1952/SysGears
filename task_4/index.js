import { questions } from "./questions.js";
import { Questionnaire } from "./questionnaire.js";
function main() {
  const questionnaire = new Questionnaire(questions);
  /*  ---- Generate an arbitrary branch and output to the console ---- */
  questionnaire.start();
  for (const [question, answer] of questionnaire.getAnswers()) {
    console.log(`${question}: ${answer}`);
  }

  /*  ---- Generate all possible branches  ---- */
  return questionnaire.getBranches();
}

main();
