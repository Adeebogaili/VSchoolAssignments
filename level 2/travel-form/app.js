const form = document.myForm; 
const submit = document.getElementById('submit')

function formAlert(event) {
    event.preventDefault()
    var firstName = form.elements["first-name"].value;
    var lastName = form.elements["last-name"].value;
    var age = form.elements["age"].value;
    var gender = form.elements["gender"].value;
    var location = form.elements["travel-location"].value;
    var diet = [];
    if (form.elements['vegetarian'].checked) {
        diet.push(document.getElementById("vegetarian").value);
    }
    if (form.elements['kosher'].checked) {
        diet.push(document.getElementById('kosher').value);
    }
    

    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet);
}

submit.addEventListener("click", formAlert);