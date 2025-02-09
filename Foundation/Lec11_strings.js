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
const newString = gameName.substring(0, 4) // last index is excluded
console.log(newString); // --> abhi

const anotherString = gameName.slice(-4, 8) // -ve mtlb utna piche se start hoga
console.log(anotherString); // --> jeet

// substring(): 
// --> treats -ve indexes as 0
// --> if start index > end index, it swaps the arguments.

// slice():
// --> treats -ve indexes as offsets from the end of the string
// --> returns an empty string if the start index > end index.


const newStringOne = "        Abhijeet        "
console.log(newStringOne);
console.log(newStringOne.trim());








// HW To-Do: Make a list of all the methods of strings and go through with all of them