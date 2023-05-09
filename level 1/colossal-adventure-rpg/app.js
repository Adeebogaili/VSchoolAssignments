const readlineSync = require('readline-sync');

// Player constructor
function Hunter(name, classType, health) {
    this.name = name;
    this.classType = classType;
    this.health = health;
    this.inventory = [];
}

// Dragon constructor
function Dragon(name, health, attackPower) {
    this.name = name;
    this.health = health;
    this.attackPower = attackPower;
}

// Define the player and dragon objects
const player = new Hunter(readlineSync.question('What is your name? '), 'Warrior', 35);
const dragons = [
    new Dragon('Vhagar', 30, 6),
    new Dragon('Vermithor', 30, 5),
    new Dragon('Tessarion', 30, 4)
];

// Define the loot
const treasure = ['Sword', 'Shield', 'Dragon Heart'];

// Define the game loop
while (player.health > 0 && dragons.length > 0) {
    // Choose a random dragon
    const dragon = dragons[Math.floor(Math.random() * dragons.length)];

    // Print the game status
    console.log(`\n${player.name}, you encounter ${dragon.name} (${dragon.health} HP)!\n`);

    // Define the player actions
    const actions = ['Attack', 'Run'];
    while (dragon.health > 0 && player.health > 0) {
        const index = readlineSync.keyInSelect(actions, 'What do you want to do?');
        if (index === 0) { // Attack
            const damage = Math.floor(Math.random() * 10) + 1;
            console.log(`\nYou attack ${dragon.name} with ${damage} damage.`);
            dragon.health -= damage;
            if (dragon.health > 0) {
                console.log(`${dragon.name} attacks you with ${dragon.attackPower} damage.`);
                player.health -= dragon.attackPower;
            }
        } else { // Run
            console.log(`\nYou run away from ${dragon.name}!`);
            break;
        }
    }

    // Check if the player won or lost
    if (player.health <= 0) {
        console.log('\nYou were defeated by the dragon! Game over.');
        break;
    } else if (dragon.health <= 0) {
        console.log(`\nCongratulations, you defeated ${dragon.name}!`);
        player.health = 35
        const loot = treasure[Math.floor(Math.random() * treasure.length)];
        console.log(`You found a ${loot}.`);
        player.inventory.push(loot);
        dragons.splice(dragons.indexOf(dragon), 1);
    }
}

// Print the final game results
if (player.health > 0) {
    console.log(`\nCongratulations, you defeated all the dragons! You collected the following treasures: ${player.inventory.join(', ')}.`);
}
