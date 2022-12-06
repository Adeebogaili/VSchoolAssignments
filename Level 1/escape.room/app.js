const readline = require("readline-sync");
const name = readline.question("What is your name? ");

key = false;
door = false;
alive = true;

const answer = readline.question(`Hello ${name}, you're finally awake! Here are your options:
a. Put hand in hole. 
b. Find the key.
c. Open the door. 
choose one!`)


while (alive) {
    if (answer == "a"){
        console.log(`Your hand was cut off by a sword, you will bleed out to death!`);
        alive = false;
    } else if (answer == "b"){
        
        const newoptions = readline.question(`You have found an old key, I wonder if you could use it to open the door; what would you like to do: 
        a. open the door?
        b. be greedy and see what is in the hole?` );
        if (newoptions == "a"){
            console.log(`you have successfully opned the door, run for your life`);
            break;
        } else {
            alive = false;
            console.log(`greed got you killed`);
        };
        } else if (answer == "c"){
        console.log(`The door is looked, you should find a key to open it!`)
        if (door = false){
            const newoptions = readline.question(`You have found an old key, I wonder if you could use it to open the door; what would you like to do: 
        a. open the door?
        b. be greedy and see what is in the hole?` );
        if (newoptions == "a"){
            console.log(`you have successfully opned the door, run for your life`);
            break;
        } else {
            alive = false;
            console.log(`greed got you killed`);
        };
        }
    } else if (answer == "a" && answer == "b"){
        console.log(`you have opened the door, you are free to leave`)
    }
}


   
     
