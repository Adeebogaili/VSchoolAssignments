/* Create a new JavaScript file and put these two arrays at the beginning. You will write a single function that performs many operations on them. */

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// 1. Remove the last item from the vegetable array.
let removeLastItem = fruit.pop();

// 2. Remove the first item from the fruit array.
let removeFirstItem = fruit.shift();

// 3. Find the index of "orange."
let findItemIndex = fruit.indexOf("orange");

// 4. Add that number to the end of the fruit array.
let addNumber = fruit.push(findItemIndex)

// 5. Use the length property to find the length of the vegetable array.
let vegetableArrayLength = vegetables.length;

// 6. Add that number to the end of the vegetable array.
let addNumberToVegetables = vegetables.push(vegetableArrayLength)


// 7. Put the two arrays together into one array. Fruit first. Call the new Array "food".
let food = fruit.concat(vegetables);

// 8. Remove 2 elements from your new array starting at index 4 with one method.

let removeItems = food.splice(3, 2)

// 9. Reverse your array.

let reverseArray = food.reverse();
// 10. Turn the array into a string and return it.

let arrayToString = food.toString()
console.log(arrayToString)

// If you've done everything correctly, the last step should print the following string to the console:
