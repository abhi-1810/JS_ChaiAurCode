// Scope level and mini hoisting in javascript      (22/03/2025)

// function one() {
//     const username = "abhijeet"
//     function two() {
//         const website = "youtube"
//         console.log(username);
//     }
//     console.log(website); // O/P: ReferenceError: website is not defined // Trying to access `website` outside its scope
//     two() // din't execute coz. code stops after finding error in the above line
// }
// one()


// function one() {
//     const username = "abhijeet"
//     function two() {
//         const website = "youtube"
//         console.log(username);
//     }
//     two() // agar is two() remove kr de program execute nhi hoga coz. ise call hi nhi kiya gya
// }
// one()

// if we remove the above one() then what happens?
// JavaScript loads the one() function into memory. Since one() is not called, the code inside it never runs.


// ********** Basic Definition of CLOSURE: **********
// A closure allows a function to access variables from its outer (enclosing) function even after it has finished executing.


if (true) {
    const username = "abhijeet"
    if (username === "abhijeet") {
        const website = " youtube"
        // console.log(username + website); // O/P: abhijeet youtube
    }
    // console.log(website); // ReferenceError: website is not defined
}
// console.log(username); // ReferenceError: username is not defined



// ++++++++++++++++ Interesting +++++++++++++++++
// Hoisting (This is just intro, will see in details later)


// **** This is called as Function Declaration ****
// function addone(num) {
//     return num + 1
// }
// console.log(addone(5)); // O/P: 6


// **** This is called as Function Expression ****
// const addTwo = function(num) {   // in JS, var. can store anything like api, json, functions, etc
//     return num + 2
// }
// console.log(addTwo(5)); // O/P: 7



// the above code will run fine
// but what if we call the function above the declaration, let's see:



console.log(addone(5)); // O/P: 6 {this will execute fine}
function addone(num) {
    return num + 1
}

console.log(addTwo(5)); // O/P: ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num) {
    return num + 2
}


// Question: Why does first one work?

// --> The function addone is declared using a function declaration.
// --> Function declarations are hoisted in JavaScript, meaning they are moved to the top of their scope before execution.
// --> So, even though console.log(addone(5)); appears before the function definition, JavaScript already knows about addone, allowing it to execute successfully.


// Question: Why does second one cause an error?

// --> It's a function expression (const addTwo = function() {}), stored in a variable.
// --> Function expressions are not hoisted in the same way function declarations are.
// --> Only the variable name addTwo is hoisted, not its value (which is the actual function).
// --> At the time console.log(addTwo(5)); runs, addTwo is still undefined, leading to a TypeError.