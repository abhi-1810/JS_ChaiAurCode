// How does javascript execute code + call stack          (27/03/2025)
// Also in Copy Notes


// To run a file, JS runs the program in 2 phases:
// 1. Memory Creation Phase (Creation Phase)
// 2. Execution Phase

// But before this first thing that happen when we write any code in JS is *Global Execution Context*(GEC). Ye hmesa hi banega hi banega
// jaha v GEC bnega usko refer kr diya jaata h 'this' varibale se. isi 'this' variable ke andar rkha h jaata h GEC ko
// Note: browser's GEC is different and node.js GEC is different. In browser, value of 'this' is Window object.
// JS is a single-threaded language



// **** JS Execution Context ****
// 1. Global Execution Context
// 2. Function Execution Context
// 3. Eval Execution Context (not imp. coz it is a property of Global object, so it's just like Global)



// **** HOW CODE EXECUTE IN JS ****
// It will run in 2 phase:
// 1. Memory Creation Phase (or creation phase)
// 2. Execution Phase


// **** MEMORY CREATION PHASE ****
// This phase occurs before the actual execution of the code. The JavaScript engine scans the code and sets up memory for variables and functions.


// **** EXECUTION PHASE ****
// In this phase, the JavaScript engine executes the code line by line in the order it appears. In this phase:
// -> Variables get assigned values.
// -> Function calls are executed.
// -> Code runs in the Call Stack.



// ********* EXAMPLE: ********

let val1 = 10;
let val2 = 5;
function addNum(num1, num2) {
  let total = num1 + num2;
  return total;
}
let result1 = addNum(val1, val2); // 15
let result2 = addNum(10, 2);    // 12
// See notes for detailed steps of execution for this code




// ******** CALL STACK ********
// The Call Stack is a data structure used by the JavaScript engine to keep track of function execution. It follows the LIFO (Last In, First Out) principle, meaning:

// --> The last function that is called is the first to be executed and removed from the stack.
// --> The first function that was called is executed last.


// Let's take example to understand this:
function one() {
    console.log("one")
    two()
}
function two() {
    console.log("two")
    three()
}
function three() {
    console.log("three")
}
one() 
two()
three()

// we can visualise this in browser via following steps:
// Inspect -> Sources -> Snippet -> New snippet -> Write code -> Run(Ctrl+Enter) -> Script Execution (Ctrl+\) -> See Call Stack