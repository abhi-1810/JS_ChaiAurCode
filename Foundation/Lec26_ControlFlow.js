// Control flow in javascript in 1 shot        (31/03/2025)

// **** if ****
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");

// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

// if (userLoggedIn && debitCard && 2==3) {
//     console.log("Allow to buy course");
// }

// if (loggedInFromGoogle || loggedInFromEmail) {
//     console.log("User logged in");
// }





// ********** SWITCH **********

// SYNTAX:

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }



const month = 3

// switch (month) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("feb");
//         break;
//     case 3:
//         console.log("march");
//         break;
//     case 4:
//         console.log("april");
//         break;

//     default:
//         console.log("default case match");
//         break;
// }



// switch (month) {
//     case "jan":
//         console.log("January");
//         break;
//     case "feb":
//         console.log("feb");
//         break;
//     case "march":
//         console.log("march");
//         break;
//     case "april":
//         console.log("april");
//         break;

//     default:
//         console.log("default case match");
//         break;
// }





// ********** TRUTHY or FALSY **********
// FALSY VALUES:
// false, 0, -0, BigInt 0n, "", null, undefined, NaN(Not a Number)

// TRUTHY VALUES:
// "0", "false", " ", [], {}, function(){}



// const userEmail = "abhijeet@gmail.com"
// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");   
// }


// const userEmail = ""
// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }


const userEmail = []
if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");   
}

// to check array
if (userEmail.length === 0) {
    console.log("Array is empty");
}

// to check object
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {  // refer object lecture
    console.log("Object is empty");
}


// ***** Some interesting comparision *****
false == 0    // O/P: true
false == ""   // O/P: true
0 == ""       // O/P: true
// console.log(false == 0);
// console.log(false == "");
// console.log(0 == "");



// Nullish Coalescing Operator (??): 
// isme puri kahani bs ye 2 keywords pe based h: null, undefined

let val1;
val1 = 5 ?? 10

let val2 = null ?? 10
let val3 = undefined ?? 15
let val4 = null ?? 10 ?? 20

console.log(val1); // O/P: 5 
console.log(val2); // O/P: 10
console.log(val3); // O/P: 15
console.log(val4); // O/P: 10



// Ternary Operator (different from Nullish Coalescing Operator)
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")