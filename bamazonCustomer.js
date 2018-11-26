// Require these
require("dotenv").config();
var keys = require("./keys.js");
var inquirer = require("inquirer");
var mysql = require("mysql");

// mySQL Password
var mySQLPass = keys.mySQLPass;

console.log(mySQLPass);