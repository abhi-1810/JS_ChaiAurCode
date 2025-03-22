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

// problem arises here
// if (true) {
//     let a = 10
//     const b = 20
//     var c = 30 // ye sbka scope(kaam) yhi tak h, curly braces se baahr gya to problem hogi
// }

// console.log(a); // O/P: a is not defined. coz. hmne andar define kiya h to baahr nhi aana chahiye
// console.log(b); // O/P: b is not defined. coz. same as above
// console.log(c);  // O/P: 30. Here the problem arises, this should not come outside. That's why var is not recommended

// Let's see the impact of this error:
var c = 200
if (true) {
    let a = 10
    const b = 20
    var c = 30 // or c = 30, both will face same issue
}
// console.log(c); // O/P: 30
// Now the problem is we declare c as 200 and let's say the if condition is imported from some other file, then it's very difficult for us to identify this error

// if ke andar jo v h wo block scope h aur baahr wla global scope h, global scope me jo v likhenge wo block scope me available hoti h lkin andar wla baahr nhi jaana chahiye

// so it's better to avoid 'var' and use 'let'

let a = 200
if (true) {
    let a = 10
    const b = 20
    console.log("INNER a:", a); // O/P: 10
    
}
console.log(a); // O/P: 200


// **** IMPORTANT FOR INTERVIEW ****
// **** There is difference b/w Global Scope of Node & Global Scope of Windows ****
// Node global scope is code written in machine code environment and run through node *WHILE* Windows global scope is code written in browsers console