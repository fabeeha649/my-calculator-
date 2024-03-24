#! /usr/bin/env node
import inquirer from "inquirer";

const answer=await inquirer.prompt([
    {message: "Enter first number" , type:"number" , name: "firstNumber" },
    {message : "Enter second number" , type: "number" , name: "secondNumber"} ,
    {message: "Select one of the operators to perform action",
     type: "list", 
     name:"operator",
    choices:["Addition", "Subtraction", "multiplication" ,"Division", "percentage", "modulus","exponent"],
},

]);
//conditional statment 
if(answer.operator === "Addition") {
    console.log(answer.firstNumber +answer.secondNumber);
}else if(answer.operator === "Subtraction") {
    console.log(answer.firstNumber -answer.secondNumber);
}
else if(answer.operator === "multiplication"){

 console.log(answer.firstNumber * answer.secondNumber);

}

else if(answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
    else if(answer.operator === "percentage") {
        console.log(answer.firstNumber / answer.secondNumber *100);
    }
        else if(answer.operator === "modulus") {
            console.log(answer.firstNumber % answer.secondNumber);
        }
            else if(answer.operator === "exponent") {
                console.log(answer.firstNumber ** answer.secondNumber);
}else {
    console.log("Please select valid operators")
}
