const { inquirer, Ask, handleWelcomeChoices } = require("./imports");

function askQuestions() {
    inquirer
      .prompt(Ask.Choices)
      .then((answers) => {
        // Handle the user's answers
        handleWelcomeChoices(answers.choice);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
}

module.exports = askQuestions;
