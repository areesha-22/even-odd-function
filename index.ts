import inquirer from "inquirer"
const answer=await inquirer.prompt([
{
    message:"give any number",type:"number",name:"n1"     //to take user input
},
])
function result(n1:number){
    if(n1 %2===0){                     //modulas divide the number
    return console.log("the number is even")
}
else{
    return console.log("the number is odd")
}
}
result(5)