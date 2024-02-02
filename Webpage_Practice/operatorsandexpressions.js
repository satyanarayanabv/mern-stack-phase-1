//Arthmetic Operations
let num1 = 20;
let num2 = 10;
console.log("Addition(num1+num2)=", num1 + num2);
console.log("Subtraction(num1-num2)=", num1 - num2);
console.log("Multiplication(num1*num2)=", num1 * num2);
console.log("Divison(num1/num2)=", num1 / num2);
console.log("Modulus(num1%num2)=", num1 % num2);
console.log("Exponentiation(num1**num2)=", num1 ** num2);

//logical operators :

let logicalAndResult = num1 > 0 && num2 > 0;
let UpdatedLogicalAndResult = num1 > num2 && num2 > num1;
let logicalOrResult = num1 > 0 || num2 < 0;
let updatedLogicalOrResult = num1 < num2 || num1 > num2;
let logicalNotResult = !(num1 > num2)
let updatedLogicalNotResult = !(num2 > num1);
console.log("LogicalAndValue = ", logicalAndResult);
console.log("UpdatedLogicalAndResult = ", UpdatedLogicalAndResult);
console.log("LogicalOrResult = ", logicalOrResult);
console.log("UpdatedLogicalOrResult = ", updatedLogicalOrResult);
console.log("LogicalNotResult = ", logicalNotResult);
console.log("updatedLogicalNotResult = ", updatedLogicalNotResult);

//Bitwise Operators
let bitwiseAndResult = num1 & num2;

console.log("BitwiseAndResult = ", bitwiseAndResult);


