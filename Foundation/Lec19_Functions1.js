// Functions and Parameter in JS        (18/03/2025)

// Function: jo v hmne code likha h (10, 15 line) usko ek package me band kr dena aur is package ko jitni baar jaha chahe wha uthakr isko copies le ja skte h

// console.log("A");
// console.log("B");
// console.log("H");
// console.log("I");
// console.log("J");
// console.log("E");
// console.log("E");
// console.log("T");
// let's suppose isko 10 baar krna h
// normally krna hectic ho jayega to yha hmlog Function use krenge


function sayMyName() {
    // yha upar wla code likhenge
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("I");
    console.log("J");
    console.log("E");
    console.log("E");
    console.log("T");
}

// ab jitni baar print krana utni baar call krenge
// sayMyName // this is function reference
// sayMyName() // parenthesis() lgane se execution hoga


// let's make function for adding two no.s
// function addTwoNumbers(number1, number2) { // these two are parameters
//     console.log(number1 + number2);

//     // console.log(parseInt(number1) + parseInt(number2));
//     // console.log(Number(number1) + Number(number2));
//     // above two will converts inputs to number
// }


// addTwoNumbers() // O/P: NaN [coz. avi value nhi pta]
// addTwoNumbers(3, 4) // these are arguments    // O/P: 7

// addTwoNumbers("abhi", "jeet")    // O/P: abhijeet
// addTwoNumbers(3, "4") // O/P: 34 [JS converts 3 to "3" and perform string concatenation]
// addTwoNumbers("3", "4") // O/P: 34 [string concatenation]
// addTwoNumbers(3, "a") // O/P: 3a
// addTwoNumbers(3, null) // O/P: 3
// the above things happen coz. we didn't check for datatype in our function (in typescript datatype is checked)

// addTwoNumbers(3, 5) // O/P: 8

// now store it in variable
// const result = addTwoNumbers(3, 5)
// now the question is can we store the above result in variable 'result'? This is where most of us do mistake. Let' see
// console.log("Result: ", result); // O/P: undefined
// How the value is undefined?
// --> The function does not return a value; it only logs the sum. 

// Correct way:
function addTwoNumbers(number1, number2) {
    let result = number1 + number2
    return result;  // return the sum instead of logging
    // OR
    // return number1 + number2;
    console.log("Abhijeet"); // don't execute anything after return
}

const result = addTwoNumbers(3, 5); // function call with arguments
// console.log("Result:", result); // O/P: Result: 8


// function loginUserMessage(username) {
//     return `${username} just logged in`
// }
// loginUserMessage("Abhijeet")
// function execute hua h aur us function ne value return kr diya h jo ki humne bola tha lkin print nhi krega coz. hmne bola nhi
// console.log(loginUserMessage("Abhijeet")); // ab print krne ka instruction diya h to ab print hoga

// console.log(loginUserMessage()); // O/P: undefined just logged in
// function loginUserMessage(username) {
//     if (username === undefined) { // other way: if(!username)
//         // in JS we assume few things to be false. e.g., empty string, undefined, etc
//         console.log("Please enter a username: ");
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("Abhijeet"));
// console.log(loginUserMessage("Raunak")); 


// to avoid this situation, we can give default values
function loginUserMessage(username = "sam") {
    // if (!username) {
    //     console.log("Please enter a username: ");
    //     return
    // } // ab hume is 'if' block ki jroort nhi h coz. min. value sam to hoga hi
    return `${username} just logged in`
}
console.log(loginUserMessage("Raunak")); // O/P: Raunak just logged in
console.log(loginUserMessage()); // O/P: sam just logged in
console.log(loginUserMessage("")); // O/P:  just logged in [argument provided is "" (an empty string), which overrides the default parameter]