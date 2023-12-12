const runQueryShowTable = require("../runQueryShowTable");
const sqlCommands = require("../sqlCommandLib");
const inquirer = require("inquirer");
const Ask = require("../promptDirectory");
const queryWithparams = require("../queryWithparams");

function deleteDep() {
  const handleChoices = require("../choiceHandling");
  console.clear();
  runQueryShowTable(sqlCommands.viewAllDepartments, () => {
    inquirer
      .prompt(Ask.DeleteDepartment)
      .then((answers) => {
        let paramsArray = [];
        paramsArray.push(answers.depName);

        queryWithparams(sqlCommands.deleteDepartment, paramsArray)
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

module.exports = deleteDep;
