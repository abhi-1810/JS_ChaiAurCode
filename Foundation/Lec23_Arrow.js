// THIS and Arrow Function in JavaScript        (24/03/2025)

// **** THIS keyword: ****
// The this keyword refers to the context where a piece of code, such as a function's body, is supposed to run. Most typically, it is used in object methods, where *'this'* refers to the object that the method is attached to, thus allowing the same method to be reused on different objects.

// this keyword basically 'context' dikhata h

const user = {
    username: "abhijeet",
    price: 999,

    welcomeMessage: function(params) { // if someone try to change the username then this will be print
        console.log(`${this.username}, welcome to website`);
        console.log(this); // ye current context dega
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // O/P: {}, q ki hum node environment ke andar h, aur global ke andar koi context nhi h to ye empty object dega

// ***** INTERVIEW *****
// browser me iska O/P alag aayega (Windows aayega)
// q ki browser me global object, Window object h


// **** THIS inside the FUNCTION ****

// function chai() {
//     let username = "abhijeet"
//     console.log(this); // bhot saari values aayegi
//     console.log(this.username); // undefined, functions me this use nhi kr skte, srf. object me kr skte h
// }
// chai()



// const chai = function () {
//     let username = "abhijeet"
//     console.log(this.username);
// }
// chai()


// ***** ARROW FUNCTION *****

const chai = () => {   // remove function keyword and add arrow after bracket
    let username = "abhijeet"
    // console.log(this.username);
    // console.log(this);
}
chai()

// Syntax of ARROW FUNCTION:

// () => {} // this is the basic syntax of arrow function

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(18,10))

// the above arrow function can also be used in one more way, which is known as Implicit Return:
// const addTwo = (num1, num2) => num1 + num2
// console.log(addTwo(18,10))


//          OR

// const addTwo = (num1, num2) => (num1 + num2) // most used in react
// console.log(addTwo(18,10))
// curly braces h to return likhna must h but parenthesis h to koi jroori nhi h

// Benefit of using parenthesis: object return krte tym
// e.g.,
// agar parenthesis na hota to hum aise return krte:

// const addTwo = (num1, num2) => {username: "abhijeet"}
// console.log(addTwo()) // undefined, coz. object aise return hi nhi kr skte h, object return ke liye parenthesis() me wrap krna must h

const addTwo = (num1, num2) => ({username: "abhijeet"})
// console.log(addTwo()) // O/P: { username: 'abhijeet' }


// ye Arrow function future me kaafi jagah use hoga, will talk about this in detail later, for now let's see ex: 
const myArray = [2, 5, 3, 7, 8]

myArray.forEach(function () {}) // correct (normal function used)
myArray.forEach(() => {}) // correct syntax (arrow function used)
// myArray.forEach(() => ()) // correct syntax