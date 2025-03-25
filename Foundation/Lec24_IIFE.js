// Immediately Invoked Function Expressions IIFE        (25/03/2025)

// This will be used when we have to execute our function immediately. 




// ******* WHY WE NEED IIFE? *******

// 1. Suppose we write a file having only database connections and we want that as soon as our application starts, our database connection inside the file should also starts.

// 2. Suppose we have a variable in global scope and also we have a function, so we don't want that global variable occurs problem in our function. So many times code written inside function get polluted by global scope


// function chai() {
//     console.log(`DB CONNECTED`);
// }
// chai()

// this function will execute immediately but what if this will get polluted by some global scope? 


// So we write IIFE for this:
(function chai() {
    // Named IIFE
    console.log(`DB CONNECTED`);
}) ();

// SYNTAX:
// ()()  // 1st parenthesis is for writing function and 2nd is for execution just like in above case we used chai())


// Now we can also write this as Arrow function

( () => {
    // Unnamed IIFE
    console.log(`DB CONNECTED TWO`);
} ) ();

// this will give error coz. the first IIFE function invoked immediately but don't know where to stop the context. So we have to end that and for this we use semicolon(;)


// IIFE with parameters
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} ) ('abhijeet') // similar to writing simple function
// In simple function we write like:
// chai('abhijeet')