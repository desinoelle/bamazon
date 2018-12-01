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
        buyProducts();
    });
}

// This function allows the user to purchase products
function buyProducts() {

    inquirer.prompt([
        // Get product ID
        {
            type: "input",
            message: "Please enter the ID of the product:",
            name: "productID"
        },
        // Get units
        {
            type: "input",
            message: "Number of units:",
            name: "units"
        },
        // Confirm order
        {
            type: "confirm",
            message: "Confirm purchase?",
            name: "confirm",
            default: true
        }
    ]).then(function(response) {

        // Product ID and units
        var productID = parseInt(response.productID);
        var units = parseInt(response.units);

        // Get the user's order if they would like to purchase a product
        if (response.confirm) {

            // Check for valid id and units
            checkProduct(productID, units);
            
        }
        else {
            console.log("That's okay! See you soon!");
        }
    });
}

// Check product for valid id and quantity
function checkProduct(id, quantity) {

    connection.query("SELECT * FROM products", function(err, data) {
        for (var i = 0; i < data.length; i++) {
            
            // Check data to see if id is valid
            if (data[i].item_id === id) {

                // Check data to see if quantity is valid
                if (data[i].stock_quantity >= quantity) {
                    console.log("Your product is available for purchase!");
                    console.log("You have purchased " + quantity + " units of " + data[i].product_name + " for a total of $" + (data[i].price * quantity) + ".");
                }
                else {
                    console.log("Sorry! Item is out of stock.");
                }
            }
            else {
                console.log("Invalid product ID.")
            }
        }
    });
}

// Update the product quantity
function updateProduct(quantity) {
}
