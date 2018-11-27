// Require these
require("dotenv").config();
var keys = require("./keys.js");
var inquirer = require("inquirer");
var mysql = require("mysql");

// mySQL Password
var mySQLPass = keys.mySQLPass;

// mySQL connection (add your own user info and password)
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: mySQLPass,
    database: "bamazon_db"
});

connection.connect(function(err) {
    if (err) throw err;

    console.log("Connected as ID " + connection.threadId);
    listProducts();
    buyProducts();
    connection.end();
});

// This function lists all available products
function listProducts() {
    console.log("Items available for purchase:");
    connection.query("SELECT * FROM products", function(err, data) {
        console.log("-----------------------------------");
        for (var i = 0; i < data.length; i++) {
            console.log(data[i].product_name + " - $" + data[i].price + " - ID: " + data[i].item_id);
        }
        console.log("-----------------------------------");
    });
}

// This function allows the user to purchase products
function buyProducts() {

}
