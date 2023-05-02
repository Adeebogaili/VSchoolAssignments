const readlineSync = require('readline-sync');

// Game setup
let game_over = false;
let found_key = false;

// Define the game function
function escape_room() {
  // Game introduction
  console.log("You wake up in a room with no windows and only one door. You try the handle, but it's locked. You need to find a way to escape.");

  // Game loop
  while (!game_over) {
    const command = readlineSync.question('What would you like to do? (look/search/open/put hand in hole): ').toLowerCase();
    switch (command) {
      case 'look':
        console.log("You see a room with a bed, a desk, and a closet. There's also a hole in the wall.");
        break;
      case 'search':
        if (!found_key) {
          console.log('You search the room and find a key hidden in the closet.');
          found_key = true;
        } else {
          console.log("You've already found the key. Time to use it!");
        }
        break;
      case 'open':
        if (found_key) {
          console.log('You use the key to unlock the door and escape!');
          game_over = true;
        } else {
          console.log('You need to find the key before you can open the door.');
        }
        break;
      case 'put hand in hole':
        console.log('You put your hand in the hole and feel a sharp pain. You died.');
        game_over = true;
        break;
      default:
        console.log("I don't understand that command.");
    }
  }

  // Game end
  const play_again = readlineSync.question('Do you want to play again? (yes/no): ').toLowerCase();
  if (play_again === 'yes') {
    game_over = false;
    found_key = false;
    console.log('\n\n\n');
    escape_room();
  } else {
    console.log('Thanks for playing!');
  }
}

// Start the game
escape_room();
