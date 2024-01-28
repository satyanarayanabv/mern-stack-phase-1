// Operators

// Arithmetic
let num1 = 10;
let num2 = 5;

console.log("Addition(+): " + (num1 + num2));
console.log("Subtraction(-): " + (num1 - num2));
console.log("Multiplication(*): " + (num1 * num2));
console.log("Division(/): " + (num1 / num2));
console.log("Modulus(%): " + (num1 % num2));
console.log("Exponentiation(**): " + (num1 ** num2));

// Comparision
let doubleEqualsResult = num1 == num2;
console.log("num1==num2 : ", doubleEqualsResult, " and type of doubleEqualsResult is: ", typeof doubleEqualsResult);
console.log("num1===num2 : ", num1===num2);
console.log("num1!=num2 : ", num1!=num2);
console.log("num1>=num2 : ", num1>=num2);
console.log("num1<=num2 : ", num1<=num2);
console.log("num1!==num2 : ", num1!==num2);

// Logical

let logicalAndValue = num1 > 0 && num2 < 0;
let logicalORValue = num1 > 0 || num2 < 0;
let logicalNOTValue = !(num1 > 0)

console.log("logicalAndValue: ", logicalAndValue);
console.log("logicalORValue: ", logicalORValue);
console.log("logicalNOTValue: ", logicalNOTValue);

// precendence and associativity
let precedenceResult = num1 * num2 + (num1 - num2) / num2; 
console.log("precedenceResult: ", precedenceResult);

let associativityResult = num1 - num2 + num2;
console.log("associativityResult: ", associativityResult);

// bitwise

let bitwiseANDResult = num1 & num2;
let bitwiseORResult = num1 | num2;
let bitwiseLeftShift = num1 << 1;
let bitwiserightShift = num1 >> 2;

console.log("bitwiseANDResult: ", bitwiseANDResult);
console.log("bitwiseORResult: ", bitwiseORResult);
console.log("bitwiseLeftShift: ", bitwiseORResult);
console.log("bitwiserightShift: ", bitwiserightShift);

// ternary
let ternaryResult = num1 > num2 ? "Number 1 is greater" : "Number 2 is greater";
console.log("ternaryResult: ", ternaryResult)









