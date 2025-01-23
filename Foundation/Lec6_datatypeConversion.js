let score = "33abc"

// first find type of the variable. But why to find even it's clear that it is a integer? 
// because bhot tym hum backend pe kaam krte h aur 
// lkin wo value kisi form se aayi ho.. ho skta h score ke andar value string me ho ya object me ho ya kisi aur format me ho. 
// E.g., const {score} = req.body // yha hume nhi pta ki score ka type kya h

// console.log(typeof score);
// console.log(typeof (score)); // this is written as a method

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber); // this converts string into no.

// but what if string have some letters also like score = "33abc"?

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber); // O/P: NaN (not a number)

// If variable is:
// --> let score = null; --> O/P: 0
// --> let score = undefined; --> O/P: NaN
// --> let score = true; --> O/P: 1
// --> let score = false; --> O/P: 0
// --> let score = "abhijeet"; (only string) --> O/P: NaN


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn) // converts above variable into boolean
// console.log(typeof booleanIsLoggedIn); // O/P: boolean
// console.log(booleanIsLoggedIn);

// 1 --> true
// 0 --> false
// "" --> false
// "abhijeet" --> true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);