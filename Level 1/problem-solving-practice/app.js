// Write a function that takes an array of numbers and returns the largest (without using Math.max()
// test data


function largest(a){
    let num = 0;
    for (let i = 0; i < a.length; i++){
      if (a[i] >= num){
        num = a[i];
      }
    }
    return num;
  }
  
  console.log(largest([6, 13, 250, 3])) // => 250
  console.log(largest([3, 5, 2, 8, 1])) // => 8
  console.log(largest([-13, 40, 3, 0, 19, 22])) // => 40)


  // Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.
 function isDivisible (num1, num2) {
  if (num1 % num2 === 0) {
    return true;
  } else 
  return false;
 }

console.log(isDivisible(4, 2)) // => true
console.log(isDivisible(9, 3)) // => true
console.log(isDivisible(15, 4)) // => false
