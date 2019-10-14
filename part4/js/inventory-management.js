/*eslint-env browser*/
function displayMenu() {
    "use strict";
    window.console.log("Welcome to the Product Inventory Management System");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("show - Show all the products");
    window.console.log("update - Update existing product inventory");
    window.console.log("exit - Exit");
    window.console.log("");
}
function display(inventory) {
    "use strict";
    inventory.forEach(function (product) {
        window.console.log(product[0] +" " + product[1] + " " + "(" + product[2] + ")" + " $" + product[3] + "\n");
    }); 
}
function update(inventory) {
    "use strict";
    var sku = parseInt(window.prompt("Enter the SKU number"),10);
    var productFound = false;
    for (var i in inventory) {
        var tempSku = inventory[i][0];
        if ( tempSku === sku) { 
            productFound = true;
            var count = parseInt(window.prompt("Enter the new quantity"),10);
            if(isNaN(count))
                windown.console.log("Please enter a valid quantity:")
            else{
                inventory[i][2] = count;
                window.console.log(inventory[i] + " was succesfully updated.");
            }
        }
    }
    if(!productFound)
        window.console.log("There were no matching products found with the SKU number: "+ sku);
    return inventory;
}

function main() {
    "use strict";
    var command;

    displayMenu();

    var inventory = [[4824, "Shirt", 10, 15.99],
    [6343, "Jeans", 22, 39.99],
    [223, "Socks", 36, 9.99],
    [2233, "Hat", 12, 14.99],
    [9382, "Jacket", 5, 49.99]];

    while (true) {
        command = window.prompt("Enter command");
        if (command !== null) {
            if (command === "show") {
                display(inventory);
            } else if (command === "update") {
                update(inventory);
            } else if (command === "exit") {
                break;
            } else {
                window.alert("That is not a valid command.");
            }
        } else {
            break;
        }
    }
    window.console.log("Program terminated.");
}
main();
