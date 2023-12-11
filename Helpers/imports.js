const colors = require("jbassard97nodecolors"); //My module, will be implemented LAST
const Ask = require("./promptDirectory"); 
const runQueryShowTable = require("./runQueryShowTable");
const handleChoices = require("./choiceHandling");
// const sqlCommands = require("./sqlCommandLib");

module.exports = {
  colors,
  Ask,
  runQueryShowTable,
  handleChoices,
};
