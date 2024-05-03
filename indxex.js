#! /usr/bin/env node
import inquirer from "inquirer";
let mybalance = 10000;
let myPin = 1234;
console.log("your current balance is " + mybalance);
let pinanswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your Pin.",
        type: "number"
    }
]);
if (pinanswer.pin === myPin) {
    console.log("Pin code is correct!!!");
    let operationAns = await inquirer.prompt({
        name: "operation",
        message: "please select options",
        type: "list",
        choices: ["withdrawl", "check balance"]
    });
    console.log("operation");
    if (operationAns.operation === "withdrawl") {
        let amountAns = await inquirer.prompt({
            name: "amount",
            message: "enter yout amount",
            type: "number"
        });
        mybalance -= amountAns.amount;
        console.log("your remaining balance is : " + mybalance);
    }
    else
        (operationAns.operation === "check balance");
    {
        console.log("Your balance is : " + mybalance);
    }
}
else
    (console.log("pin code is incorrect!!"));
