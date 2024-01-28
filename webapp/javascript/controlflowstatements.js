// conditional if - else if - else

let condition = false;

if(condition){
    console.log("The condition is: ", condition);
}
else{
    console.log("The condition is: ", condition);
}

let str = "20";
let num = 20;

if(str === num){
    console.log("Inside If as the condition is: ", str===num);
}
else if(str == num){
    console.log("Inside Else If as the condition is: ", str==num);
}
else{
    console.log("Inside Else");
}

// switch 

let fruit = "guava";

switch(fruit){
    case "apple" : console.log("I am ", fruit);
                    break;
    case "banana" : console.log("I am ", fruit);
                    break;
    case "orange" : console.log("I am ", fruit);
                    break;
    default: console.log("I am ", fruit);
}

// Loops

console.log("For loop: ")

for(let i = 1; i<=5; i++){
    console.log(i);
}

console.log("While loop: ");
let counter = 3;
while(counter > 0){
    console.log(counter);
    counter--;
}

console.log("Do while loop: ")
let doWhileCounter = 4;
do{
    doWhileCounter--;
    console.log(doWhileCounter);
}while(doWhileCounter > 4)

console.log("For In loop: ")
let person = {name:"John", age:30, job:"Developer"};

for(let key in person){
    console.log(key + " : " + person[key]);
}

console.log("For of loop: ")

let numbers = [1, 2, 3, 4, 5];
for(let num of numbers){
    console.log(num)
}

// Break and Continue

console.log("Break Statement: ");

for(let i = 1; i <= 5; i++){
    if(i == 3){
        break;
    }

    console.log("Inside loop: ", i);
}
console.log("Outside loop");

console.log("Continue Statement: ");

for(let i = 1; i <= 5; i++){
    if(i == 3){
        continue;
    }

    console.log("Inside loop: ", i);
}
console.log("Outside loop");







