const runQueryShowTable = require("../runQueryShowTable");
const sqlCommands = require("../sqlCommandLib");
const inquirer = require("inquirer");
const Ask = require("../promptDirectory");
const queryWithparams = require("../queryWithparams");

function deleteEmp() {
  const handleChoices = require("../choiceHandling");
  console.clear();
  runQueryShowTable(sqlCommands.viewAllEmployees, () => {
    inquirer
      .prompt(Ask.DeleteEmployee)
      .then((answers) => {
        let paramsArray = [];
        paramsArray.push(answers.empLastName);
        paramsArray.push(answers.empID);

        queryWithparams(sqlCommands.deleteEmployee, paramsArray)
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

module.exports = deleteEmp;
