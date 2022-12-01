// First, you will create an empty array named employees
const employees = [];

// create an Employee constructor with the first three attributes
function Employee (name, jobTitle, salary){
this.name = name;
this.jobTitle = jobTitle;
this.salary = salary;
this.status = "Full Time"
}

let employee1 = new Employee("Sam", "Linguist", "$110,000.00");
employee1.status = "Contract"

let employee2 = new Employee("Raph", "Sales Person", "$65,000.00");
employee2.status = "Part Time"

let employee3 = new Employee("Zac", "Teacher", "$55,000.00");

 function printEmployeeForm(){
console.log(employee1, employee2, employee3)
}

employees.push(employee1, employee2, employee3);
console.log(employees)


