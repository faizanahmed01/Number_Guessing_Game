import inquirer from "inquirer";
const systemGeneratedNo = Math.round(Math.random() * 10);
const asnwers = await inquirer.prompt([
    {
        message: "Write your Guess between 1 to 10: ",
        name: "userGuess",
        type: "number",
    },
]);
const { userGuess } = asnwers;
console.log(userGuess, "userGuess", systemGeneratedNo, 'Sys');
if (userGuess === systemGeneratedNo) {
    console.log("Your answer is correct \n you win!");
}
else {
    console.log("Please try again better luck next time..!!");
}
//console.log(asnwers.userGuess);
//console.log(systemGeneratedNo);
