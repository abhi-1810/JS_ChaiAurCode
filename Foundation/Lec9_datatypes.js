// Datatypes of JS summary     (24/01/2025)

// Primitive: it is call-by-value
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false 
const outsideTemp = null  // it doesn't mean ki value 0, null means empty
let userEmail; // -> undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 2436846584233447444n // by putting n means it is converted into bigint
console.log(typeof bigNumber);


// Reference (Non-primitive)
// types: Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let muObj = {
    name: "abhijeet",
    age: 22,
}

const myFunction = function() {
    console.log("Hello World");
}

console.log(typeof anotherId); // -> function but it is called as object function


// ***** Return type of datatypes in JavaScript *****

// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object


// https://262.ecma-international.org/5.1/#sec-11.4.3