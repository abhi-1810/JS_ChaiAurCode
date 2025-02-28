// Objects-1        (26/02/2025)

// Singleton
// Object.create (isi ko constructor method bolte h)
// baaki iske baare me detail me padhenge aage


// two ways to declare objects: 1. Literals  2. Constructors
// Constructor se jab banega tab hmesa *Singleton* banega

// ***** Object literals *****
const mySym = Symbol("key1")

const JsUser = {
    name: "Abhijeet", // by default system name ko "name"{string} ki trrhh process krta h
    "full name": "Abhijeet Kumar",
    // mySym: "mykey1", {wrong method of symbol declaration}
    [mySym]: "mykey1",
    age: 23,
    location: "Vaishali",
    email: "abhijeet@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// How to access Objects: 2 ways
// 1st way
console.log(JsUser.email) // but can't use everytime

// 2nd way
// console.log(JsUser[email]); // 2nd way // O/P: Error (email is not defined) 
// In dot notation, we use JsUser.email, which is correct.
// In bracket notation, we must use a string key:
console.log(JsUser["email"]); // O/P: abhijeet@google.com

// ** why to use 2nd way?
// e.g., "full name": "Abhijeet Kumar", now there is no chance to access this using 1st way so in this case we use 2nd case
console.log(JsUser["full name"]);


// *****Interview Question*****
// Ques. Create a symbol then add it to key of an object and print it
// console.log(JsUser.mySym); // O/P: mykey1
// output to mykey1 aayega but iska datatype Symbol nhi hoga
// console.log(typeof JsUser.mySym); // O/P: string [yha pe interviewer question krega]

console.log(JsUser[mySym]); // these are correct ways
console.log(typeof [mySym]);

// change value
JsUser.email = "raunak@gmail.com"
console.log(JsUser.email);
Object.freeze(JsUser) // this will prevent the modification
JsUser.email = "raushan@gmail.com"
console.log(JsUser.email); // pehle wla o/p hi aayega