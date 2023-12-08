// const { sqlCommands, runQueryShowTable, inquirer } = require("./imports");
const sqlCommands = require("./sqlCommandLib");
const runQueryShowTable = require("./runQueryShowTable");
const inquirer = require("inquirer");
const Ask = require("./promptDirectory"); // Adjust the import path
const queryWithparams = require("./queryWithparams");

function handleChoices(choice) {
  switch (choice) {
    case "View All Employees":
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
      break;
    case "View All Roles":
      console.clear();
      runQueryShowTable(sqlCommands.viewAllRoles, () => {
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
      break;
    case "View All Departments":
      console.clear();
      runQueryShowTable(sqlCommands.viewAllDepartments, () => {
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
      break;
    case "Add Employee":
      break;
    case "Update Employee Role":
      break;
    case "Add Role":
      break;
    case "Add Department":
      console.clear();
      runQueryShowTable(sqlCommands.viewAllDepartments, () => {
        // This callback is executed after the query is completed
        inquirer
          .prompt(Ask.AddDepartment)
          .then((answers) => {
            let paramsArray = [];
            paramsArray.push(answers.choice);
            // Handle the user's answers
            queryWithparams(sqlCommands.addDepartment, paramsArray);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      });
      break;
    case "Quit":
      break;
  }
}

module.exports = handleChoices;
