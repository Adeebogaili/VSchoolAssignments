const readlineSync = require('readline-sync');

const name = readlineSync.question('What is your name? ');

readlineSync.question('Hello ' + name + ', welcome to Dragon\'s Lair... Press Enter to start hunting.');

function Hunter (classType, health, ) {
    this.classtype = classType;
    this.health = health;
}

let player = new Hunter ("Warior", 30 );

function Dragons (name, nickName, health) {
    this.name = name;
    this.nickName = nickName;
    this.health = health;
}

let dragons = [];

let dragon1 = new Dragons("Vhagar", "The second largest dragon of the Targaryens", 30)
let dragon2 = new Dragons("Vermithor", "The Bronze Fury", 30)
let dragon3 = new Dragons("Tessarion", "The Blue Queen", 30)

dragons.push(dragon1, dragon2, dragon3);

const treasure = ['tooth', 'skull', 'dragon heart'];
let pickUp = treasure[Math.floor(Math.random()*treasure.length)];
const options = ['Walk', 'Exit', 'Print'];

let prize = [];

function game(){
    
    const dragon = dragons[Math.floor(Math.random() * dragons.length)];
    
    const index = readlineSync.keyInSelect(options, 'What would you like to do next?');

    if (options[index] == 'Exit') {
        return player.health = 0;
    } else if (options[index] == 'Print'){
        console.log(name + "\'s " + 'Health: ' + player.health + '\nTreasure: ' + prize);
    } else if (options[index] === 'Walk'){
        let key = Math.random();
        if (key <= .3) {
            console.log('Walking... no sign of danger here.');
        } else if (key >= .3) {
            console.log(dragon.name + " " + dragon.nickName + ' has arrived.');

            while(dragon.health > 0 && player.health > 0) {

                const heroAttackPower = Math.floor(Math.random() * (8 - 1) + 2);
                const dragonAttackPower = Math.floor(Math.random() * (8 - 3) + 2);
                
                const user = readlineSync.question('What would you like to do? Enter "r" to run or enter "a" to attack. ' );

                switch (user) {
                    case 'r':
                        const run = Math.random();
                        if(run < .5) {
                            console.log('Before you can run away ' + dragon.name + ' attacks you with: ' + dragonAttackPower);
                        } else {
                            console.log('You ran away successfully!');
                            break;
                        }
                    case 'a':
                        dragon.health -= heroAttackPower;
                        console.log('You attacked ' + dragon.name + ' with ' + heroAttackPower + ' attack power.');

                        player.health -= dragonAttackPower;
                        console.log(dragon.name + ' just attacked you with ' + dragonAttackPower + ' attack power.');
                        
                        if (dragon.health <= 0) {

                            console.log('You killed ' + dragon.name + " " + dragon.nickName + '.\n' + dragon.name + ' left: ' + pickUp);
                            
                            let loot = Math.random();
                            if (loot <= .3) {

                                prize.push(pickUp);
                            }
                        } else if (player.health <= 0) {
                            console.log(dragon.name + " " + dragon.nickName + ' has defeated you. You are dead. GAME OVER');
                        }
                }   
            }
        }
    }
}

while(player.health > 0) {
    userRestore = function(){
        userActive = true;
        player.health = 30;
    };
    userRestore();
    game();
}