const runQueryShowTable = require("../runQueryShowTable");
const sqlCommands = require("../sqlCommandLib");
const inquirer = require("inquirer");
const Ask = require("../promptDirectory");
const queryWithparams = require("../queryWithparams");


function addRole() {
  const handleChoices = require("../choiceHandling");
  console.clear();
  runQueryShowTable(sqlCommands.viewAllRoles, () => {
    inquirer
      .prompt(Ask.AddRole)
      .then((answers) => {
        let paramsArray = [
          answers.roleName,
          answers.roleSalary,
          answers.roleDepartment,
        ];

        queryWithparams(sqlCommands.addRole, paramsArray)
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

module.exports = addRole;
