const runQueryShowTable = require("../runQueryShowTable");
const sqlCommands = require("../sqlCommandLib");
const inquirer = require("inquirer");
const Ask = require("../promptDirectory");
const fillQueryWithParams = require("../fillQueryWithParams");

function viewEmployeesByManager() {
    const handleChoices = require("../choiceHandling");
    console.clear();
    runQueryShowTable(sqlCommands.viewAllEmployees, () => {
      inquirer.prompt(Ask.ViewEmployeesByManager).then((answers) => {
        let paramsArray = [answers.empID];
        console.clear();
        runQueryShowTable(
          fillQueryWithParams(sqlCommands.viewEmployeesByManager, paramsArray),
          () => {
            inquirer.prompt(Ask.Choices).then((newAnswers) => {
              handleChoices(newAnswers.choice);
            });
          }
        );
      });
    });
}

module.exports = viewEmployeesByManager;
