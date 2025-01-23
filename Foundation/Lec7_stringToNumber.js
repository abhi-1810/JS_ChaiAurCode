// ********** Operations **********

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); // it means 2^3
// console.log(2/3);
// console.log(7%3); // gives remainder

let str1 = "hello"
let str2 = " abhijeet" // gave space so that there exist a space b/w two words

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2); // --> 12
// console.log(1 + "2"); // --> 12
// console.log("1" + 2 + 2); // --> 122
// console.log(1 + 2 + "2"); // --> 32  

// Note: agar phle string hua to wo sbko string jaisa treat krega aur
// agar phle integer hua to wo baaki integer ko add krega

// [JS Precendence: (*) and (/) have higher precedence than (+) and (-)]
// console.log(3 + 4 * 5 % 3); // O/P:5 [it's a Messy code. Bad way to write code]
// console.log((3 + 4) * 5 % 3); // O/P:2

// console.log(true); // --> true
// console.log(+true); // --> 1 [The unary + converts true to its numeric equivalent, which is 1]\
// console.log(true+); // --> error [A + after true causes a syntax error because the + operator requires a valid operand to follow it]
// console.log(+""); // --> 0 [The unary + converts an empty string ("") into a number. Since the empty string has no numeric value, it is coerced to 0]


let num1, num2, num3
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++; // postfix
// ++gameCounter; // prefix
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment