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
function addTwoNumbers(number1, number2) { // these two are parameters
    console.log(number1 + number2);

    // console.log(parseInt(number1) + parseInt(number2));
    // console.log(Number(number1) + Number(number2));
    // above two will converts inputs to number
}

// addTwoNumbers() // O/P: NaN [coz. avi value nhi pta]
// addTwoNumbers(3, 4) // these are arguments    // O/P: 7

// addTwoNumbers("abhi", "jeet")    // O/P: abhijeet
// addTwoNumbers(3, "4") // O/P: 34 [JS converts 3 to "3" and perform string concatenation]
// addTwoNumbers("3", "4") // O/P: 34 [string concatenation]
// addTwoNumbers(3, "a") // O/P: 3a
// addTwoNumbers(3, null) // O/P: 3
// the above things happen coz. we didn't check for datatype in our function

addTwoNumbers(3, 5) // O/P: 8
// now store it in variable
const result = addTwoNumbers(3, 5)
console.log("Result: ", result);


