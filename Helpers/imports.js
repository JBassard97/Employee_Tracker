const mysql = require("mysql2");
const inquirer = require("inquirer");
const colors = require("jbassard97nodecolors");
const Ask = require("./promptDirectory");
const runQueryShowTable = require("./runQueryShowTable");

module.exports = { mysql, inquirer, colors, Ask, runQueryShowTable };