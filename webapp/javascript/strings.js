let str1 = "Hello Everyone";

let str2 = 'Welcome to the session';

let str3 = `Lets learn JS`;

console.log(str1, " and type is", typeof str1);
console.log(str2 , " and type is", typeof str2);
console.log(str3 , " and type is", typeof str3);

let str4 = new String("I am a non-primitive object");

console.log(str4, " and the type is", typeof str4);

console.log("First character of str1: ", str1.charAt(0));

console.log("Last character of str1: ", str1.charAt(str1.length - 1));

console.log(str1 + "========" + str1.charCodeAt(7))

console.log(str1.concat("\n").concat(str2).concat("\n").concat(str3));

console.log(str1 + " ======== " + str1.search("Everyone"));


