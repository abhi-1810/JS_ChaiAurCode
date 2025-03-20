// Global and local scope in javascript      (20/03/2025)

// let, const and var
// let a = 10
// const b = 20
// var c = 30

// console.log(a);
// console.log(b);
// console.log(c);

// {}   // yhi scope h. 
// Don't confuse b/w scope and objects
// --> When {} is used in control structures like if, for, or functions, it defines a block scope.
// --> When {} is used to create an object, it represents an object literal. Objects store key-value pairs.


if (true) {
    let a = 10
    const b = 20
    var c = 30
}
// console.log(a);
// console.log(b);
console.log(c);