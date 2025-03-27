// How does javascript execute code + call stack          (27/03/2025)

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




// **** How Code Execute in JS ****
// It will run in 2 phase:
// 1. Memory Creation Phase (or creation phase)
// 2. Execution Phase







// function one() {
//     console.log("one")
//     two()
// }
// function two() {
//     console.log("two")
//     three()
// }
// function three() {
//     console.log("three")
// }
// one() 
// two()
// three()