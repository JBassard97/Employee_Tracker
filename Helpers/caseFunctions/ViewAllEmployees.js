const runQueryShowTable = require("../runQueryShowTable");
const sqlCommands = require("../sqlCommandLib");
const inquirer = require("inquirer");
const Ask = require("../promptDirectory");

function viewAllEmployees() {
  const handleChoices = require("../choiceHandling");
  console.clear();
  runQueryShowTable(sqlCommands.viewAllEmployees, () => {
    // This callback is executed after the query is completed
    inquirer
      .prompt(Ask.Choices)
      .then((answers) => {
        // Handle the user's answers
        handleChoices(answers.choice);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
}

module.exports = viewAllEmployees;
