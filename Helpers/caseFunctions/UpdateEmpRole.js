const runQueryShowTable = require("../runQueryShowTable");
const sqlCommands = require("../sqlCommandLib");
const inquirer = require("inquirer");
const Ask = require("../promptDirectory");
const queryWithparams = require("../queryWithparams");

function updateEmpRole() {
  const handleChoices = require("../choiceHandling");
  console.clear();
  runQueryShowTable(sqlCommands.viewAllEmployees, () => {
    inquirer
      .prompt(Ask.UpdateEmployeeRole)
      .then((answers) => {
        let paramsArray = [answers.roleTitle, answers.lastName];

        queryWithparams(sqlCommands.updateEmployeeRole, paramsArray)
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

module.exports = updateEmpRole;
