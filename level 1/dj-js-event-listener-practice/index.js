document.addEventListener('keyup', (event) => {
    console.log('Key released:', event.key);
  });

// To grab the square div
var square = document.getElementById("square");

// Blue when the mouse hovers over the square
square.addEventListener("mouseover", function(){
    square.style.backgroundColor= "blue";
})

// Red when the mouse button is held down over the square
square.addEventListener("mousedown", function(){
    square.style.backgroundColor= "red";
})

// Yellow when the mouse button is let go over the square
square.addEventListener("mouseup", function(){
    square.style.backgroundColor= "yellow";
})

// Green when the mouse is double clicked in the square
square.addEventListener("dblclick", function(){
    square.style.backgroundColor= "green";
})

// Orange when the mouse scroll is used somewhere in the window
square.addEventListener("wheel", function(){
    square.style.backgroundColor= "orange";
})
document.body.addEventListener("wheel", function(){
    square.style.backgroundColor= "orange";
})

// black to rest to default when mouse leaves the square
square.addEventListener("mouseleave", function(){
    square.style.backgroundColor= "black";
})

/* You should also be able to press the first letter of the colors 
(typing "r" on the keyboard for "red", for example) and have the box change to that color. */

document.body.addEventListener('keydown', e => {
    if (e.key === 'r') {
        square.style.backgroundColor = "red"
    } else if (e.key === 'b') {
        square.style.backgroundColor = "blue"
    } else if (e.key === 'y') {
        square.style.backgroundColor = "yellow"
    } else if (e.key === 'g') {
        square.style.backgroundColor = "green"
    } else if (e.key === 'o') {
        square.style.backgroundColor = "orange"
    }
})

// to return color to default after pressing keydown
document.body.addEventListener("keyup", e => {
    square.style.backgroundColor = "black"
})
