/* let and const
Replace all the vars with let and const. Alter the code however necessary to make sure this
 continues to work (so the pet's name isn't "John", but instead "spot" is returned). 
 You only need to delete var and insert let and constJohn is the pet owner, and his name 
 should be stored differently than the other names. */

 var name = "John"
var age = 101

function runForLoop(pets) {
    var petObjects = []
    for (var i = 0; i < pets.length; i++) {
        var pet = { type: pets[i] }
        var name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])
console.log("hi")