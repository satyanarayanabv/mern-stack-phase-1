console.log("Welcome to my javascript file.");

//Variable and Constants

let variable1 = "I am a variable";
const constant1 = "I am a constant";
var variable2 = "I am a legacy variable";

console.log("Let variabe value: ", variable1);
console.log("Const variabe value: ", constant1);
console.log("Var variabe value: ", variable2);

variable1 = "I am an updated let variable";
variable2 = "I am an updated var variable";
//constant1="I am an updated constant";

console.log("Let updated variabe value: ", variable1);
console.log("Const updated variabe value: ", constant1);
console.log("Var updated variabe value: ", variable2);


// Primitve Data Types

let stringVal = "Hello I am a String";
let numberVal = 20;
let booleanVal = true;


console.log("String Valaue: ", stringVal, " and its data type: ", typeof stringVal);
console.log("Number Valaue: ", numberVal, " and its data type: ", typeof numberVal);
console.log("Boolean Valaue: ", booleanVal, " and its data type: ", typeof booleanVal);


// Data Type Conversion
let convertedStringVal = String(numberVal);
console.log("Converted value from Number to String: ", convertedStringVal, " and its data type: ", typeof convertedStringVal);

let convertedNumberVal = Number(convertedStringVal);
console.log("Converted value from String to Number: ", convertedNumberVal, " and its data type: ", typeof convertedNumberVal);

let convertedBooleanVal = Boolean(numberVal);
console.log("Converted value from Number to Boolean: ", convertedBooleanVal, " and its data type: ", typeof convertedBooleanVal);

let addStringNumber = "20" + 20;
console.log("Added String and Number: ", addStringNumber, " and its data type is", typeof addStringNumber);

let substractionStringNumber = "20" - 20;
console.log("Subtracted String and Number: ", substractionStringNumber, " and its data type is", typeof substractionStringNumber);