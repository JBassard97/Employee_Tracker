const runQueryShowTable = require("../runQueryShowTable");
const sqlCommands = require("../sqlCommandLib");
const inquirer = require("inquirer");
const Ask = require("../promptDirectory");
const fillQueryWithParams = require("../fillQueryWithParams");

function viewEmployeesByDepartment() {
    const handleChoices = require("../choiceHandling");
    console.clear();
    runQueryShowTable(sqlCommands.viewAllDepartments, () => {
      inquirer.prompt(Ask.ViewEmployeesByDepartment).then((answers) => {
        let paramsArray = [answers.depName];
        console.clear();
        runQueryShowTable(
          fillQueryWithParams(
            sqlCommands.viewEmployeesByDepartment,
            paramsArray
          ),
          () => {
            inquirer.prompt(Ask.Choices).then((newAnswers) => {
              handleChoices(newAnswers.choice);
            });
          }
        );
      });
    });
}

module.exports = viewEmployeesByDepartment;