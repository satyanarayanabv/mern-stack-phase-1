var result = myFunction(2, 3);
console.log(result);

function myFunction(num1, num2){
    var a = num1 * num2;
    var b = num1 + num2;
    return (a + b);
}

console.log(myFunction(3, 4));

function toCelius(f){
    return (5/9) * (f - 32);
}

console.log("Temperature in celcius: " + toCelius(60));


function Employee(name, designation, yearOfBirth){
    this.name = name;
    this.designation = designation;
    this.yearOfBirth = yearOfBirth;
}

Employee.prototype.calculateAge = function(){
    console.log("The current age is: " + (2024 - this.yearOfBirth));
}

console.log(Employee.prototype)

let emp1 = new Employee("Alex", "Developer", 1991);
console.log(emp1);
emp1.calculateAge();