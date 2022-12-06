// Write a function that accepts two numbers as parameters, and returns the sum.
function sum(num1, num2) {
    return num1 + num2;
}
sum(4, 6);

// Write a function that accepts three numbers as parameters, and returns the largest of those numbers.
function getMax(num1, num2, num3) {
   return Math.max(num1, num2, num3);
}
getMax(20, 35, 15);

// Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd")
function evenOrOdd(num) {
   if (num % 2 === 0) {
       return "The number is even!"
   } else {
       return "The number is odd!"
   }
}
evenOrOdd(5);