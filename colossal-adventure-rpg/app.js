const readlineSync = require('readline-sync');

// Ask player to enter their name. 
const name = readlineSync.question('What is your name? ');

// Greet player with a message plus thier name. 
readlineSync.question('Hello ' + name + ', Welcome to the The Dragonpit... Press Enter to start hunting.');

// Player constructer
function Hunter(classType, health, ) {
    this.classtype = classType;
    this.health = health;
}

let player = new Hunter("Warior", 60);

// Dragons constructor
function Dragons(name, nickName, health) {
    this.name = name;
    this.nickName = nickName;
    this.health = health;
}

let dragons = [];

let dragon1 = new Dragons("Vhagar", "The second largest dragon of the Targaryens", 30)
let dragon2 = new Dragons("Vermithor", "The Bronze Fury", 30)
let dragon3 = new Dragons("Tessarion", "The Blue Queen", 30)

dragons.push(dragon1, dragon2, dragon3);

// Loot
const treasure = ['Sword ', 'Shield ', 'Dragon Heart '];


// Hunter inventory
let inventory = [];

// Hunter commands
const options = ['Walk', 'Exit', 'Print'];
const options2 = ['Run', 'Attack'];


function game() {

    // to call a random dragon 
    const dragon = dragons[Math.floor(Math.random() * dragons.length)];

    // give hunter the option to wixit, print, and walk 
    const index = readlineSync.keyInSelect(options, 'This pit is infested with Dragons. What should I do?');

    switch (options[index]) {
        case 'Exit':
            console.log('You have left the hunt, see you next season.');
            return player.health = 0;

        case 'Print':
            console.log(name + "\'s " + 'Health: ' + player.health + '\nInventory: ' + inventory);
            break;
        case 'Walk': let key = Math.random();
        if (key <= .3) {
            console.log('Walking... no sign of danger here.');
        } else if (key >= .3) {
            console.log(dragon.name + " " + dragon.nickName + ' has arrived.');

            // when hunter encounters a dragon, fight breaks. 
            while (dragon.health > 0 && player.health > 0) {

                const hunterAttackPower = Math.floor(Math.random() * (8 - 1) + 2); // random hunter attack power generator
                const dragonAttackPower = Math.floor(Math.random() * (8 - 3) + 2); // random dragon attack power generator

                let pickUp = treasure[Math.floor(Math.random() * treasure.length)]; // random treasure to pick up 

                // give hunter options to run or attack after encountering a dragon . 
                const user = readlineSync.keyInSelect(options2, 'OMG! it\'s ' + dragon.name + ' it\'s ' + dragon.nickName + ' what should I do?');

                switch (options2[user]) {
                    case 'Run':
                        const run = Math.random();
                        if (run < .5) {
                            console.log('Before you can run away ' + dragon.name + ' attacks you with: ' + dragonAttackPower);
                        } else {
                            console.log('You ran away successfully! See you next season!');
                            return player.health = 0;
                        }
                    case 'Attack':
                        dragon.health -= hunterAttackPower;
                        console.log('You attacked ' + dragon.name + ' with ' + hunterAttackPower + ' attack power.');

                        player.health -= dragonAttackPower;
                        console.log(dragon.name + ' just attacked you with ' + dragonAttackPower + ' attack power.');
                        
                        //display a message after when a dragon is defeated
                        if (dragon.health <= 0) {

                            console.log('You killed ' + dragon.name + " " + dragon.nickName + ' you put up a good fight.' + '.\n' + dragon.name + ' dropped a ' + pickUp);

                            let loot = Math.random();
                            if (loot <= .9) {
                                inventory.push(pickUp)
                            }

                            // removes defeated dragon 
                            dragons.splice(dragons.indexOf(dragon), 1);

                            // checks how many dragons left and end game once all dragons are defeated or when hunter dies. 
                            if (dragons.length <= 0) {
                                console.log('Congratulations, you captured all dragons!')
                                console.log('You were able to collect the following: ' + inventory);
                                return player.health = 0;
                            } else {
                                console.log('Continue hunting')
                            }


                            } else if (player.health <= 0) {
                                console.log(dragon.name + " " + dragon.nickName + ' has defeated you. You are dead. GAME OVER');
                            }
                }

            }
        }
        break;

    }
}

// resets the game 
while (player.health > 0) {
    userRestore = function () {
        userActive = true;
        player.health = 60;
    };
    userRestore();
    game();
}