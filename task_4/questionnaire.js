export class Questionnaire {
  constructor(questions) {
    if (!(questions instanceof Map)) {
      throw new TypeError("Expected 'questions' to be a Map");
    }
    this.root = questions.values().next().value;
    this.answersHistory = new Map();
    this.questionsQueue = [questions.values().next().value];
  }

  start() {
    while (this.questionsQueue.length) {
      this.askQuestion(this.questionsQueue.shift());
    }
  }

  askQuestion(node) {
    if (!node) return;

    const answer = this.answerQuestion(node.answers);
    this.answersHistory.set(node.question, answer);

    if (node.relatedQuestions) {
      const nextNode = node.relatedQuestions.get(answer);

      this.questionsQueue.push(nextNode);
    }

    if (node.requiredQuestion) {
      const answer = this.answerQuestion(node.requiredQuestion.answers);
      this.answersHistory.set(node.requiredQuestion.question, answer);
    }
  }

  answerQuestion(answers) {
    if (!Array.isArray(answers) || answers.length === 0) {
      throw new Error("Answers array is empty or not an array");
    }
    const randomIndex = Math.floor(Math.random() * answers.length);
    return answers[randomIndex];
  }

  getAnswers() {
    return this.answersHistory;
  }

  getBranches() {
    const branches = [];

    const traverse = (node, currentBranch) => {
      if (!node) {
        branches.push(currentBranch);
        return;
      }

      const answers = node.answers;
      if (!answers || answers.length === 0) {
        branches.push(currentBranch);
        return;
      }

      for (const answer of answers) {
        const newBranch = [...currentBranch, { [node.question]: answer }];

        let nextNode = null;
        if (node.relatedQuestions) {
          nextNode = node.relatedQuestions.get(answer);
        }

        if (nextNode) {
          traverse(nextNode, newBranch);
          continue;
        }
        if (node.requiredQuestion) {
          const requiredNode = node.requiredQuestion;
          for (const requiredAnswer of requiredNode.answers) {
            const branchWithRequired = [
              ...newBranch,
              { [requiredNode.question]: requiredAnswer },
            ];
            branches.push(branchWithRequired);
          }
          continue;
        }
        branches.push(newBranch);
      }
    };

    traverse(this.root, []);

    return {
      paths: {
        number: branches.length,
        list: branches,
      },
    };
  }
}
