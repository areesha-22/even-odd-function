import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        message: "give any number", type: "number", name: "n1"
    },
]);
function result(n1) {
    if (n1 % 2 === 0) {
        return console.log("the number is even");
    }
    else {
        return console.log("the number is odd");
    }
}
result(5);
