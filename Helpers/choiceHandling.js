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
      console.clear();
      runQueryShowTable(sqlCommands.viewAllEmployees, () => {
        // This callback is executed after the query is completed
        inquirer
          .prompt(Ask.AddEmployee)
          .then((answers) => {
            let paramsArray = [];
            paramsArray.push(answers.empFirstName);
            paramsArray.push(answers.empLastName);
            paramsArray.push(answers.empRole);
            paramsArray.push(answers.managersID);
            // Handle the user's answers
            queryWithparams(sqlCommands.addEmployee, paramsArray)
              .then(() => {
                // This block is executed after queryWithparams is completed
                console.clear();
                console.log("Success!");
                return inquirer.prompt(Ask.Choices);
              })
              .then((newAnswers) => {
                handleChoices(newAnswers.choice);
              })
              .catch((error) => {
                console.error("Error:", error);
              });
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      });
      break;
    case "Update Employee Role":
      console.clear();
      runQueryShowTable(sqlCommands.viewAllEmployees, () => {
        // This callback is executed after the query is completed
        inquirer
          .prompt(Ask.UpdateEmployeeRole)
          .then((answers) => {
            let paramsArray = [];
            paramsArray.push(answers.roleTitle);
            paramsArray.push(answers.lastName);

            // Handle the user's answers
            queryWithparams(sqlCommands.updateEmployeeRole, paramsArray)
              .then(() => {
                // This block is executed after queryWithparams is completed
                console.clear();
                console.log("Success!");
                return inquirer.prompt(Ask.Choices);
              })
              .then((newAnswers) => {
                handleChoices(newAnswers.choice);
              })
              .catch((error) => {
                console.error("Error:", error);
              });
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      });
      break;
    case "Add Role":
      console.clear();
      runQueryShowTable(sqlCommands.viewAllRoles, () => {
        // This callback is executed after the query is completed
        inquirer
          .prompt(Ask.AddRole)
          .then((answers) => {
            let paramsArray = [];
            paramsArray.push(answers.roleName);
            paramsArray.push(answers.roleSalary);
            paramsArray.push(answers.roleDepartment);
            // Handle the user's answers
            queryWithparams(sqlCommands.addRole, paramsArray)
              .then(() => {
                // This block is executed after queryWithparams is completed
                console.clear();
                console.log("Success!");
                return inquirer.prompt(Ask.Choices);
              })
              .then((newAnswers) => {
                handleChoices(newAnswers.choice);
              })
              .catch((error) => {
                console.error("Error:", error);
              });
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      });
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
            queryWithparams(sqlCommands.addDepartment, paramsArray)
              .then(() => {
                // This block is executed after queryWithparams is completed
                console.clear();
                console.log("Success!");
                return inquirer.prompt(Ask.Choices);
              })
              .then((newAnswers) => {
                handleChoices(newAnswers.choice);
              })
              .catch((error) => {
                console.error("Error:", error);
              });
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      });
      break;

    // case "Add Department":
    //   console.clear();
    //   runQueryShowTable(sqlCommands.viewAllDepartments, () => {
    //     // This callback is executed after the query is completed
    //     inquirer
    //       .prompt(Ask.AddDepartment)
    //       .then((answers) => {
    //         let paramsArray = [];
    //         paramsArray.push(answers.choice);
    //         // Handle the user's answers
    //         queryWithparams(sqlCommands.addDepartment, paramsArray);
    //       })
    //       .catch((error) => {
    //         console.error("Error:", error);
    //       });
    //   });
    //   break;
    case "Quit":
      break;
  }
}

module.exports = handleChoices;
