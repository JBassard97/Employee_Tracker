const runQueryShowTable = require("../runQueryShowTable");
const sqlCommands = require("../sqlCommandLib");
const inquirer = require("inquirer");
const Ask = require("../promptDirectory");

function viewAllDeps() {
  const handleChoices = require("../choiceHandling");
  console.clear();
  runQueryShowTable(sqlCommands.viewAllDepartments, () => {
    inquirer
      .prompt(Ask.Choices)
      .then((answers) => {
        handleChoices(answers.choice);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
}

module.exports = viewAllDeps;
