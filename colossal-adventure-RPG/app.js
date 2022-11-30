const readlineSync = require("readline-sync");

// Console must ask for the hero's name and store it.
const name = readlineSync.question('What is your name? ');

// Console must greet player with a fun message
readlineSync.question(`Hello ${name}, welcome to Colossal RPG... Press Enter to begin.`);

// hero's health
let heroHealth = 30;

// monster health
let monsterHealth = 30;

// Array of monster to fight. 
const monsters = ['Morncat', 'Doomfoot', 'Coffingolem'];

// Array of loot 
const loot = ['Sowrd', 'Shield'];

// Inventory 
let inventory = [];

// game options
const options = ['Walk', 'Exit', 'Print'];

// second options 
const options2 = ['Run', 'Attack']

// summon random monster from monsters array 
let monster = monsters[Math.floor(Math.random() * monsters.length)];

// pick up loot
let pickUp = loot[Math.floor(Math.random()*loot.length)];


function game() {

    // ask hero to choose an option
    const index1 = readlineSync.keyInSelect(options, `What would you like to do next?`);

    if (options[index1] == 'Exit') { // Exit game 
        return heroHealth = 0;
    } else if (options[index1] == 'Print') { // check inventory
        console.log(`${name}, Your current health is at: ${heroHealth}. Your loot: ${inventory}`);
    } else if (options[index1] == 'Walk') { // walk 
        let walking = Math.random();
        if (walking <= 0.3) {
            console.log('Walking and exploring the map, no sign of danger here.')
        } else if (walking >= 0.3) {
            console.log(monster + 'has appeared.');
        }

        // When fighting a monster
        while (monsterHealth > 0 && heroHealth > 0) {
            const index2 = readlineSync.keyInSelect(options2, 'What would you like to do?');

            // generate random hero attack power
            let heroAttackPower = Math.floor(Math.random() * 10) + 1;

            // generate random monster attack power
            let monsterAttackPower = Math.floor(Math.random() * 8) + 1;
            if (options2[index2] == 'Run') {
                const run = Math.random();
                if (run < 0.5) {
                    console.log(`Before you can run away ${monster} attacks you with ${monsterAttackPower} attack power`);
                } else {
                    console.log('You have ran away successfully!');
                }
            } else if (options2[index2] == 'Attack') {
                monsterHealth -= heroAttackPower
                console.log(`You attacked ${monster} with ${heroAttackPower} attack power`);
                heroHealth -= monsterAttackPower
                console.log(`Monster just attacked you with ${monsterAttackPower} attack power`);

                if (monsterHealth <= 0) {
                    console.log(`You killed ${monster}. ${monster} dropped ${pickUp}`);
                    let drop = Math.random();
                    if (drop <= .3) {
                        inventory.push(pickUp);
                    } 
                } else if (heroHealth <= 0) {
                    console.log(`${monster} defeated you. You are dead.`)
                }
            }

        }
    }
}

while (heroHealth > 0) {
    heroRestore = function () {
        heroActive = true;
        heroHealth = 30; 
        game();
    };
    heroRestore();  
}