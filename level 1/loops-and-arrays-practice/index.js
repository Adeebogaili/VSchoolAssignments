/* #1
Loop through the following array and count how many "computers" there are. Log the final count: */

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"]
var count = 0;
for (var i = 0; i < officeItems.length; i++) {
    if (officeItems[i] === "computer") {
        count++;
    }
}
console.log("There are " + count + " computers in this array!");
/* #2
Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if thy aren't 18. */

var peopleWhoWantToSeeMadMaxFuryRoad = [{
    name: "Mike",
    age: 12,
    gender: "male"
}, {
    name: "Madeline",
    age: 80,
    gender: "female"
}, {
    name: "Cheryl",
    age: 22,
    gender: "female"
}, {
    name: "Sam",
    age: 30,
    gender: "male"
}, {
    name: "Suzy",
    age: 4,
    gender: "female"
}]

for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough")
    } else {
        var userGender = peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male" ? "HIM" : "HER"
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max Fury Road, do't let " + userGender + " in.")
    }
}

/*  Optional Bonus challenge
Imagine you have a button that toggles a light on and off. 
Loop through the following array of numbers and toggle the button the numbers of times for each number. 
The array [2, 3, 2] would toggle the button 7 times. */

var lights = false;
var switches = [2, 5, 435, 4, 3];

for (var i = 0; i < switches.length; i++) {
    for (var j = 0; j < switches[i]; j++) {
        lights = !lights;
    }
}

if (lights) {
    console.log("The light is on!");
} else {
    console.log("The light is off!");
}