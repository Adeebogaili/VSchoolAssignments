var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

// 1. Returns a list of everyone older than 18, which is

function sortedOfAge(arr){
    // your code here
     return arr.filter((adult) => {
      if (adult.age > 18)  
       return adult
     })
  }

 console.log(sortedOfAge(peopleArray));

// 2. sorted alphabetically by last name, and where

function sortedOfAge(arr){
    // your code where
     return arr.sort((a, b) => {
      if (a.lastName < b.lastName){
       return -1
      }
     })
  }

 console.log(sortedOfAge(peopleArray));

// 3. each name and age is embedded in a string that looks like an HTML <li> element.

function sortedOfAge(arr){
    // your code where
     return arr.map((people) => {
      return `"<li>${people.firstName} ${people.lastName} is ${people.age}</li>"`     
     })
  }

 console.log(sortedOfAge(peopleArray));

// 4. Create another array of one or more individuals and add it to the original array.

function sortedOfAge(arr){
    // your code where
     return arr.push({firstName: "Will", lastName: "Smith",age: 53})
  }

 console.log(sortedOfAge(peopleArray));

// 5. Create a function that filters out all people who's last names end with "y" or "a" and save those people in another array.

function sortedOfAge(arr){
    // your code where
     return arr.filter((people) => {
      let str = people.lastName;
      let res = str.charAt(str.length-1);
      if (res == "y" || res == "a") {
       return people
      }     
     })
  }

 console.log(sortedOfAge(peopleArray));

// 6. Remove the second individual from the array. 

function sortedOfAge(arr){
    // your code where
     return arr.splice(1, 1)
  }

 console.log(sortedOfAge(peopleArray));

// 7. Return the array in reverse order.

function sortedOfAge(arr){
    // your code where
     return arr.reverse()
  }

 console.log(sortedOfAge(peopleArray));








 


 
 