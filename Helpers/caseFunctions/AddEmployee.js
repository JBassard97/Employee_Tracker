const runQueryShowTable = require("../runQueryShowTable");
const sqlCommands = require("../sqlCommandLib");
const inquirer = require("inquirer");
const Ask = require("../promptDirectory");
const queryWithparams = require("../queryWithparams");


function addEmployee() {
  const handleChoices = require("../choiceHandling");
  console.clear();
  runQueryShowTable(sqlCommands.viewAllEmployees, () => {
    inquirer
      .prompt(Ask.AddEmployee)
      .then((answers) => {
        // Creating an array to store parameters, used to run queryWithParams
        let paramsArray = [
          answers.empFirstName,
          answers.empLastName,
          answers.empRole,
          answers.managersID,
        ];

        queryWithparams(sqlCommands.addEmployee, paramsArray)
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

module.exports = addEmployee;