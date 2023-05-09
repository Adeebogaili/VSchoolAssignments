// Selects a name from Array
let names = ['Mario', 'Luigi'];
const nameSelector = Math.floor(Math.random() * names.length);

// Calls Constructor
class Player {
  constructor(name, totalCoins, status, hasStar) {
    this.name = name;
    this.totalCoins = totalCoins;
    this.status = status;
    this.hasStar = hasStar;
    this.gameActive = true;
  }

  setName(namePicked) {
    this.name = namePicked;
  }

  gotHit() {
    if (this.hasStar) {
      return (this.hasStar = false);
    } else if (this.status === 'Powered Up') {
      return (this.status = 'Big');
    } else if (this.status === 'Big') {
      return (this.status = 'Small');
    } else if (this.status === 'Small') this.status = 'Dead';
    return (this.gameActive = false);
  }

  gotPowerup() {
    this.hasStar = false;
    if (this.status === 'Small') {
      return (this.status = 'Big');
    } else if (this.status === 'Big') {
      return (this.status = 'Powered Up');
    } else if (this.status === 'Powered Up') {
      console.log(`You got a star! ⭐`);
      return (this.hasStar = true);
    }
  }

  addCoin() {
    this.totalCoins++;
  }

  print() {
    console.log(
      `Name: ${this.name}!\nStatus: ${this.status}\nTotal Coins: ${this.totalCoins}\nHas Star: ${this.hasStar}`
    );
  }
}

const randomRange = () => {
  let num = Math.floor(Math.random() * 3);
  if (num === 0) {
    console.log(`You got hit! 🔥`);
    characters.gotHit();
    characters.print();
  } else if (num === 1) {
    console.log(`You found a Mushroom! 🪙`);
    characters.gotPowerup();
    characters.print();
  } else if (num === 2) {
    console.log(`You collected a coin!`);
    characters.addCoin();
    characters.print();
  }
  if (!characters.gameActive) clearInterval(play);
};

const characters = new Player(
  (nameSelector, names[nameSelector]),
  0,
  'Small',
  false
);
const play = setInterval(randomRange, 200);
