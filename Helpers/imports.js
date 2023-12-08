// const inquirer = require("inquirer");
const colors = require("jbassard97nodecolors"); //My module, will be implemented LAST
const Ask = require("./promptDirectory"); //Works
const runQueryShowTable = require("./runQueryShowTable"); //imports mysql2 inside function
const handleChoices = require("./choiceHandling");
// const sqlCommands = require("./sqlCommandLib");


module.exports = {
  // inquirer,
  colors,
  Ask,
  runQueryShowTable,
  handleChoices,
  // sqlCommands,
};
