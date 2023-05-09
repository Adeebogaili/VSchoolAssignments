const readlineSync = require('readline-sync');

// Player constructor
function Player(name, playerClass, health, strength, defense) {
  this.name = name;
  this.playerClass = playerClass;
  this.health = health;
  this.strength = strength;
  this.defense = defense;
}

// Dragon constructor
function Dragon(name, color, health, strength, defense) {
  this.name = name;
  this.color = color;
  this.health = health;
  this.strength = strength;
  this.defense = defense;
}

// Create player object
const playerName = readlineSync.question('What is your name? ');
const playerClass = readlineSync.question('What is your class? ');
const playerHealth = readlineSync.question('What is your starting health? ');
const playerStrength = readlineSync.question('What is your starting strength? ');
const playerDefense = readlineSync.question('What is your starting defense? ');

const player = new Player(playerName, playerClass, playerHealth, playerStrength, playerDefense);

// Create dragons
const dragon1 = new Dragon('Smaug', 'red', 500, 50, 50);
const dragon2 = new Dragon('Drogon', 'black', 400, 60, 40);
const dragon3 = new Dragon('Viserion', 'white', 300, 70, 30);

const dragons = [dragon1, dragon2, dragon3];

// Function to generate a random number between min and max
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Function to simulate a battle between player and dragon
function battleDragon(player, dragon) {
  console.log(`You encounter a ${dragon.color} dragon named ${dragon.name} with ${dragon.health} health!`);

  // Player decides whether to run or attack
  const options = ['Run', 'Attack'];
  const index = readlineSync.keyInSelect(options, 'What do you want to do?');

  if (index === 0) { // Player runs
    console.log('You try to run...');
    const chance = getRandomNumber(1, 10);

    if (chance <= 3) {
      console.log('You successfully run away!');
    } else {
      console.log('You failed to run away!');
      fight(player, dragon);
    }
  } else { // Player attacks
    fight(player, dragon);
  }
}

// Function to simulate a fight between player and dragon
function fight(player, dragon) {
  while (player.health > 0 && dragon.health > 0) {
    // Player attacks dragon
    const playerDamage = player.strength - dragon.defense;
    dragon.health -= playerDamage;

    console.log(`You deal ${playerDamage} damage to the dragon!`);

    if (dragon.health <= 0) {
      console.log(`You killed the ${dragon.color} dragon named ${dragon.name}!`);
      console.log('You found a treasure chest with a new sword inside!');
      player.strength += 10; // Improve player's stats
      dragons.splice(dragons.indexOf(dragon), 1); // Remove dragon from the array
      break;
    }

    // Dragon attacks player
    const dragonDamage = dragon.strength - player.defense;
    player.health -= dragonDamage;

    console.log(`The dragon deals ${dragonDamage} damage to you!`);

    if (player.health <= 0) {
      console.log('You died!');
      break;
    }
  }
}

// Prompt user for game actions
while (dragons.length > 0 && player.health > 0) {
    const options = ['Search for loot', 'Encounter a dragon'];
    const index = readlineSync.keyInSelect(options, 'What do you want to do?');
  
    if (index === 0) { // Player searches for loot
      console.log('You search for loot...');
      const chance = getRandomNumber(1, 10);
  
      if (chance <= 5) {
        console.log('You found a treasure chest with a new sword inside!');
        player.strength += 10; // Improve player's stats
      } else {
        console.log('You found nothing.');
      }
    } else { // Player encounters a dragon
      const randomDragon = dragons[getRandomNumber(0, dragons.length - 1)];
      battleDragon(player, randomDragon);
    }
  }
  
  // Check if player won or lost
  if (player.health > 0) {
    console.log('Congratulations! You won!');
  } else {
    console.log('Game over. You lost!');
  }
  
