var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));

// function to encrypt the input phrase
function encrypt(input) {
    let encrypted = ""
    // loop through each character of the input
    for (let i=0; i <input.length; i++) {
        let asciiNum = input[i].charCodeAt()
        // check if the character is a lowercase letter
        if(asciiNum >= 97 && asciiNum <= 122) {
            // shift the character by shift value
            let shifted = (asciiNum - 97 + shift) % 26 + 97;
            // add the shifted character to the encrypted string
            encrypted += String.fromCharCode(shifted);
        } else {
            // if the character is not a letter, add it as is to the encrypted string
            encrypted += input[i];
        }
    }
    // return the encrypted string
    return encrypted;
}
console.log(encrypt(input));
