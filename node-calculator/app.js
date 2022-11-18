const readline = require("readline-sync")

var num1 = readline.questionInt("Please enter your first number ");
var num2 = readline.questionInt("Please enter your second number ");
var operation = readline.question("Please enter the operation to perform: add, sub, mul, div ");

var add = num1 + num2;
 
var sub = num1 - num2
 
var div = num1 / num2
 
var mul = num1 * num2

if(operation == "add"){
    console.log(`The sum of ${num1} and ${num2} is ${add}`)
} else if (operation == "sub") {
    console.log(`The subtraction of ${num1} and ${num2} is ${sub}`)
} else if (operation == "div") {
    console.log(`The division of ${num1} and ${num2} is ${div}`)
} else if (operation == "mult") {
    console.log(`The multipication of ${num1} and ${num2} is ${mul}`)
} else {
    console.log(`This operation is invalid, please enter add, sub, mul, or div`)
}

