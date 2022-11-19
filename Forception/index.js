let people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let alphabetArray = alphabet.toUpperCase().split("");

const result = []; 

for (let i = 0; i < people.length; i++){
    result.push(people[i]);
        for (let j = 0; j < alphabetArray.length; j++){
           result.push(alphabetArray[j]);
}
}

console.log(result)