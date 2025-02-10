// Strings    (26/01/2025)

const name = "abhijeet"
const repoCount = 50

// console.log(name + repoCount + " Value");  // not recommended at all

// So we use backticks(``)

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);  // modern way. this is known as string interpolation

const gameName = new String('abhijeet')

// console.log(gameName[0]);  // --> a
// console.log(gameName.__proto__); // --> {}. [ye object dikhne me blank h lkin iske andar bhot saare prototypes]
// we can see list of prototype in console section of browser 
// by using example (const gameName = new String('abhijeet'))
// gameName

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt('5'));
// console.log(gameName.indexOf('j'));


// ******Substring & Slice******
// const newString = gameName.substring(0, 4) // last index is excluded
// console.log(newString); // --> abhi

// const anotherString = gameName.slice(-4, 8) // -ve mtlb utna piche se start hoga
// console.log(anotherString); // --> jeet

// substring(): 
// --> treats -ve indexes as 0
// --> if start index > end index, it swaps the arguments.

// slice():
// --> treats -ve indexes as offsets from the end of the string
// --> returns an empty string if the start index > end index.

// ****     10/02/2025     ****
// trim():
// use: in input form(like on website) sometimes user give many spaces but we don't want this spaces(except in password field) so we use trim()
const newStringOne = "        Abhijeet        "
// console.log(newStringOne);
// console.log(newStringOne.trim());

// // trimStart():
// console.log(newStringOne.trimStart());
// // trimEnd():
// console.log(newStringOne.trimEnd());


// replace():
// browser converts spaces into the code "%20" which is the standard URL encoding for a space character. 
const url = "https://abhijeet.com/abhijeet%20kumar"
console.log(url);
console.log(url.replace('%20', '-'));

// check present or not
console.log(url.includes('abhi')) // --> true
console.log(url.includes('namaste')) // --> false


// slpit(): it takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.
const lastString = "abhi-jeet-1810"
console.log(lastString.split('-'));


// HW To-Do: Make a list of all the methods of strings and go through with all of them