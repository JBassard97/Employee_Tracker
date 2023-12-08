const {
  // inquirer,
  Ask,
  handleChoices,
  // sqlCommands,
} = require("./Helpers/imports");
const inquirer = require("inquirer");
const runQueryShowTable = require("./Helpers/runQueryShowTable");
const sqlCommands = require("./Helpers/sqlCommandLib");

console.clear(); // Resets console for a fresh start

async function startApplication() {
  try {
    // Run the first query and show the tables we're working with
    await runQueryShowTable(sqlCommands.showAllTables);

    // Set a delay using setTimeout before prompting for user input
    await new Promise((resolve) => setTimeout(resolve, 200));

    // Prompt for user input
    const answers = await inquirer.prompt(Ask.Choices);

    // Handle user responses
    handleChoices(answers.choice);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Call the async function
startApplication();