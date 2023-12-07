const {
  inquirer,
  Ask,
  runQueryShowTable, // This function performs any SQL command as a string and shows a table with what's returned
  handleWelcomeChoices,
  sqlCommands,
} = require("./Helpers/imports");

console.clear(); // Resets console for a fresh start

runQueryShowTable(sqlCommands.showAllTables); // Function to run the first query and show the tables we're working with

function startApplication() {
  try {
    // Set a delay using setTimeout before prompting for user input
    setTimeout(function () {
      // Storing user's choice in a variable
      inquirer
        .prompt(Ask.Choices)
        .then((answers) => {
          // Handle user responses
          handleWelcomeChoices(answers.choice);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }, 500); // Minor delay
  } catch (error) {
    console.error("Error:", error);
  }
}


startApplication();
