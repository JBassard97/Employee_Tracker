const runQueryShowTable = require("../runQueryShowTable");
const sqlCommands = require("../sqlCommandLib");
const inquirer = require("inquirer");
const Ask = require("../promptDirectory");
const queryWithparams = require("../queryWithparams");

function updateEmployeeManager() {
  const handleChoices = require("../choiceHandling");
  console.clear();
  runQueryShowTable(sqlCommands.viewAllEmployees, () => {
    inquirer
      .prompt(Ask.UpdateEmployeeManager)
      .then((answers) => {
        let paramsArray = [
          answers.newManagerID,
          answers.empLastName,
          answers.empID,
        ];

        queryWithparams(sqlCommands.updateEmployeeManager, paramsArray)
          .then(() => {
            console.clear();
            console.log("Success!");

            return inquirer.prompt(Ask.Choices);
          })
          .then((newAnswers) => {
            handleChoices(newAnswers.choice);
          });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
}

module.exports = updateEmployeeManager;
