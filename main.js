#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    { message: "guess a number between 1-6",
        type: "number",
        name: "UserGuessedNumber",
    }
]);
if (answer.UserGuessedNumber === randomNumber) {
    console.log("Congrats ! you guess a right number");
}
else {
    console.log("oops ! you guess a wrong number");
}
