// Calls Constructor
class Player {
    constructor(name, totalCoins, health, attack) {
        this.name = name;
        this.totalCoins = totalCoins;
        this.health = health;
        this.attack = attack;
        this.gameActive = true;
    }

    fight() {
        // Random Dragon to fight
        const dragon = dragons[Math.floor(Math.random() * dragons.length)];
        console.log(`You have encountered ${dragon.name}`)

        // Player Attack Generator
        character.attack += Math.floor(Math.random() * 5)
        dragon.health -= character.attack
        console.log('You attacked ' + dragon.name + ' with ' + character.attack + ' attack power.');

        // Dragon's Attack Generator
        dragon.attack += Math.floor(Math.random() * 5)
        character.health -= dragon.attack
        console.log(dragon.name + ' just attacked you with ' + dragon.attack + ' attack power.');
        if (character.health <= 0) {
            console.log(`You have been defeated! Game Over!`)
            return this.gameActive = false
        }
        if (dragon.health <= 0) {
            console.log(`You have defeated the dragon`)
            return this.game = false
        }
    }

    walk() {
        console.log(`Walking around, and looking for stuff!`)
        let walking = Math.floor(Math.random() * 3)
        if (walking === 0) {
            console.log(`You found health, your health now ${character.health} `)
            character.health += 0
        } else if (walking === 1) {
            character.attack += 5
            console.log(`You found a sword, your attack power now ${character.attack} `)
        } else if (walking === 2) {
            character.totalCoins += 10
            console.log(`You found coins, your total Coins now ${character.totalCoins} `)
        }
    }

    addCoin() {
        this.totalCoins++
    }

    print() {
        console.log(`Name: ${this.name}!\nHealth: ${this.health}\nTotal Coins: ${this.totalCoins}`);
    }

}

const randomRange = () => {
    let num = Math.floor(Math.random() * 3)
    if (num === 0) {
        character.fight()
    } else if (num === 1) {
        character.walk()
        character.print()
    } else if (num === 2) {
        console.log(`You collected a coin!`)
        character.addCoin()
        character.print()
    }
    if (!character.gameActive)
        clearInterval(play)
}

let character = new Player('mario', 0, 20, 10);
let dragon1 = new Player('Vhagar', 0, 20, 10);
let dragon2 = new Player("Vermithor",0 , 20, 10)
let dragon3 = new Player("Tessarion",0 , 20, 10)

const dragons = []
dragons.push(dragon1, dragon2, dragon3)
const play = setInterval(randomRange, 200)