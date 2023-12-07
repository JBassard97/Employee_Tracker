function handleWelcomeChoices(choice) {
  const { sqlCommands, runQueryShowTable, inquirer } = require("./imports");
  const Ask = require("./promptDirectory"); // Adjust the import path
  const askQuestions = require("./AskQuestions");

  switch (choice) {
    case "View All Employees":
      console.clear();
      runQueryShowTable(sqlCommands.viewAllEmployees, () => {
        // This callback is executed after the query is completed
        inquirer
          .prompt(Ask.Choices)
          .then((answers) => {
            // Handle the user's answers
            handleWelcomeChoices(answers.choice);
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
            handleWelcomeChoices(answers.choice);
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
            handleWelcomeChoices(answers.choice);
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
      break;
    case "Quit":
      break;
  }
}

module.exports = handleWelcomeChoices;
