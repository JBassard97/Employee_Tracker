// const { sqlCommands, runQueryShowTable, inquirer } = require("./imports");
const sqlCommands = require("./sqlCommandLib");
const runQueryShowTable = require("./runQueryShowTable");
const inquirer = require("inquirer");
const Ask = require("./promptDirectory"); // Adjust the import path
const queryWithparams = require("./queryWithparams");
const fillQueryWithParams = require("./fillQueryWithParams");

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
    case "Delete Employee":
      console.clear();
      runQueryShowTable(sqlCommands.viewAllEmployees, () => {
        // This callback is executed after the query is completed
        inquirer
          .prompt(Ask.DeleteEmployee)
          .then((answers) => {
            let paramsArray = [];
            paramsArray.push(answers.empLastName);
            paramsArray.push(answers.empID);

            // Handle the user's answers
            queryWithparams(sqlCommands.deleteEmployee, paramsArray)
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
    case "Delete Department":
      console.clear();
      runQueryShowTable(sqlCommands.viewAllDepartments, () => {
        // This callback is executed after the query is completed
        inquirer
          .prompt(Ask.DeleteDepartment)
          .then((answers) => {
            let paramsArray = [];
            paramsArray.push(answers.depName);

            // Handle the user's answers
            queryWithparams(sqlCommands.deleteDepartment, paramsArray)
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
    case "Delete Role":
      console.clear();
      runQueryShowTable(sqlCommands.viewAllRoles, () => {
        // This callback is executed after the query is completed
        inquirer
          .prompt(Ask.DeleteRole)
          .then((answers) => {
            let paramsArray = [];
            paramsArray.push(answers.roleName);

            // Handle the user's answers
            queryWithparams(sqlCommands.deleteRole, paramsArray)
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
    case "Update Employee Managers":
      console.clear();
      runQueryShowTable(sqlCommands.viewAllEmployees, () => {
        // This callback is executed after the query is completed
        inquirer
          .prompt(Ask.UpdateEmployeeManager)
          .then((answers) => {
            let paramsArray = [];
            paramsArray.push(answers.newManagerID);
            paramsArray.push(answers.empLastName);
            paramsArray.push(answers.empID);

            // Handle the user's answers
            queryWithparams(sqlCommands.updateEmployeeManager, paramsArray)
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
    case "View Employees By Manager":
      console.clear();
      runQueryShowTable(sqlCommands.viewAllEmployees, () => {
        // This callback is executed after the query is completed
        inquirer.prompt(Ask.ViewEmployeesByManager).then((answers) => {
          let paramsArray = [];
          paramsArray.push(answers.empID);
          console.clear();
          runQueryShowTable(
            fillQueryWithParams(
              sqlCommands.viewEmployeesByManager,
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
      break;
    case "View Employees By Department":
      console.clear();
      runQueryShowTable(sqlCommands.viewAllDepartments, () => {
        // This callback is executed after the query is completed
        inquirer.prompt(Ask.ViewEmployeesByDepartment).then((answers) => {
          let paramsArray = [];
          paramsArray.push(answers.depName);
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
      break;
    case "View Labor Budget":
      console.clear();
      runQueryShowTable(sqlCommands.viewLaborBudget, () => {
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
    case "Quit":
      break;
  }
}

module.exports = handleChoices;
