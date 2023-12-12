const runQueryShowTable = require("../runQueryShowTable");
const sqlCommands = require("../sqlCommandLib");
const inquirer = require("inquirer");
const Ask = require("../promptDirectory");
const queryWithparams = require("../queryWithparams");

function addDep() {
  const handleChoices = require("../choiceHandling");
  console.clear();
  runQueryShowTable(sqlCommands.viewAllDepartments, () => {
    inquirer
      .prompt(Ask.AddDepartment)
      .then((answers) => {
        let paramsArray = [answers.choice];

        queryWithparams(sqlCommands.addDepartment, paramsArray)
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

module.exports = addDep;
