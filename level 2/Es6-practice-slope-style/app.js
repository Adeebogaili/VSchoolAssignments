// /* Use the Rest Operator to help this function return an array of animals, 
// no matter how many animals are passed to it:*/

function collectAnimals(...animals) {  
    console.log(animals)
}

collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"); 
// // ["dog", "cat", "mouse", "jackolope", "platypus"]

/////////////////////////////////////////////////////////////////////////////////////////
// /* Write a function that returns a food object with the array names as properties. 
// You'll use an ES6 shorthand syntax that becomes useful when a variable name is mentioned
//  twice in both the name and value of properties in your object: */

 function combineFruit(fruit, sweets, vegetables){
    return {fruit, sweets, vegetables}
}

console.log(combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"]))

             
// // {
// //         fruit: ["apple", "pear"],
// //         sweets: ["cake", "pie"],
// //         vegetables: ["carrot"]
// //      }

/////////////////////////////////////////////////////////////////////////////////////////
// // Use destructuring to use the property names as variables. Destructure the object in the parameter:

//  function parseSentence(opts){
//     let location = opts.location;
//     let duration = opts.duration;
//     return `We're going to have a good time in ${location} for ${duration}`
//   }

//   console.log(parseSentence({
//     location: "Burly Idaho",
//     duration: "2 weeks"
//   })); 

  function parseSentence({location = "Burly Idaho", duration = "2 weeks"}){
    return `We're going to have a good time in ${location} for ${duration}`
  }
  console.log(parseSentence(location, name))

/////////////////////////////////////////////////////////////////////////////////////////
// // Use array destructuring to make this code ES6:
function returnFirst(items){
    let [firstItem, secondItem] = items; /*change this line to be es6*/
    return firstItem
}
console.log(returnFirst(["flower", "cup"]))

/////////////////////////////////////////////////////////////////////////////////////////
// /*Write destructuring code to assign variables that will help us return 
// the expected string. Also, change the string to be using Template literals: */

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    let [firstFav, secondFav, thirdFav] = arr;
    return `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}.`
}

console.log(returnFavorites(favoriteActivities))

/////////////////////////////////////////////////////////////////////////////////////////
/* Use the Rest and Spread Operator to help take any number of arrays, and return one array. 
 You will need to change how the arrays are passed in. You may write it assuming you will always recieve
 three arrays if you would like to. */

 function combineAnimals(...animals) {
    return animals
 }
 
 const realAnimals = ["dog", "cat", "mouse"];
 const magicalAnimals = ["jackolope",];
 const mysteriousAnimals = ["platypus"];
 
 console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));
 
 // ["dog", "cat", "mouse", "jackolope", "platypus"]

/////////////////////////////////////////////////////////////////////////////////////////
//  Try to make the following function more ES6y:

function product(a, b, c, d, e) {
  var numbers = [a,b,c,d,e];

  return numbers.reduce((acc, number) => acc * number, 1)
}

console.log(product(1, 2, 4, 4, 5))
/////////////////////////////////////////////////////////////////////////////////////////
// Make the following function more ES6y. Use at least both the rest and spread operators:

function unshift(array, a, b, c, d, e) {
    return [a, b, c, d, e, ...array];
  }
  var arg = [6, 7, 8]
 console.log(unshift([...arg], 1, 2, 3, 4, 5))

 /////////////////////////////////////////////////////////////////////////////////////////
 /* Write some destructuring code to help this function out. Use the ES6 shorthand that helps make the syntax
  look less redundant to simplify it: */

  function populatePeople(names){
    return names.map(name => {
        name = name.split(" ");
        return {
            firstName: name[0], 
            lastName: name[1]
        }
    })
}

let fullName = [["Frank Peterson", "Suzy Degual", "Liza Jones"]]
console.log(populatePeople(...fullName))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]


  