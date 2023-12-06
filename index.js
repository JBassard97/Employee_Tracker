const {
  mysql,
  inquirer,
  colors,
  Ask,
  runQueryShowTable,
} = require("./Helpers/imports");

let sqlQuery = "SELECT * FROM Roles";

// Example usage:
// runQueryShowTable(sqlQuery);

// Prompt for user input
inquirer
  .prompt(Ask.welcomeCoices)
  .then((answers) => {
    // Handle user responses
    console.log("User responses:", answers.choice);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
