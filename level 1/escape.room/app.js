const readline = require("readline-sync");
const name = readline.question("What is your name? ");

let key = false;
let door = false;
let alive = true;

while (alive) {
    const answer = readline.question(`Hello ${name}, you're finally awake! You are in a room with no windows and only one door. You try the handle, but it's locked. You need to find a way to escape.:
a. Put hand in hole. 
b. Find the key.
c. Open the door. 
choose one!`)

    if (answer === "a") {
        console.log(`Your hand was cut off by a sword, you will bleed out to death!`);
        alive = false;
    } else if (answer === "b") {
        const newoptions = readline.question(`You have found an old key, I wonder if you could use it to open the door; what would you like to do: 
a. open the door?
b. be greedy and see what is in the hole?` );
        if (newoptions === "a") {
            console.log(`you have successfully opened the door, run for your life`);
            break;
        } else {
            alive = false;
            console.log(`greed got you killed`);
        };
    } else if (answer === "c") {
        if (door === false) {
            const newoptions = readline.question(`You have found an old key, I wonder if you could use it to open the door; what would you like to do: 
a. open the door?
b. be greedy and see what is in the hole?` );
            if (newoptions === "a") {
                console.log(`you have successfully opened the door, run for your life`);
                break;
            } else {
                alive = false;
                console.log(`greed got you killed`);
            };
        } else {
            console.log(`The door is locked, you should find a key to open it!`)
        }
    } else {
        console.log(`Invalid input, try again!`);
    }
}


