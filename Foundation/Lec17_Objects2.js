// Objects-2          (13/03/2025)

// In this Lec. we see how to make Singletion object or how to declare it using constructor

// const tinderUser = new Object() // Singleton object
// console.log(tinderUser); // O/P: {}

const tinderUser = {}  // non-singleton object
// console.log(tinderUser); // O/P: {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser); // O/P: { id: '123abc', name: 'Sammy', isLoggedIn: false }

// **** OBJECT inside ANOTHER OBJECT ****
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Abhijeet",
            lastname: "Kumar"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);
// let's suppose fullname don't exist, then what to do?
// Optional chaining(?.) comes into the picture here, it will execute the statement even some value is not present. It reduces the work by not using if-else statements.


// **** Combining 2 Array's ****
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = { obj1, obj2 } // here the problem is object comes under another object just like in array
// console.log(obj3); // O/P: { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign(obj1, obj2) // modifies obj1 by copying obj2's properties into it (mutation) // yha pe obj1 ke andar obj2 v aa jayega
// console.log(obj3);
// console.log(obj3 === obj1); // O/P: true


// Preferred way:
// const obj3 = Object.assign({}, obj1, obj2) // creates a new object without modifying obj1 (immutable copy) // yha pe empty object {} me sab aa jayega
// console.log(obj3);
// console.log(obj3 === obj1); // O/P: false
// this will be also used very rarely


// Mostly used:
const obj3 = {...obj1, ...obj2} // same concept as of array. 90% this will be used
// console.log(obj3);


// Syntax used when value comes from Database
const users = [  // database se users aayega to mostly array ke form me
    {
        id: 1,
        email: "abhi@gmail.com"
    },
    {
        id: 2,
        email: "abhi1@gmail.com"
    },
    {
        id: 3,
        email: "abhi2@gmail.com"
    },
]
// Now we have to print some value of the above users
const val = users[1].email
// console.log(val); // abhi@gmail.com

// Some more methods
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
// datatype will be array, all keys is in 1 array.
// Now we can easily use loop on this and use at many place

console.log(Object.values(tinderUser)); // [ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]
// isme Array ke andar Array hoga, it's rarely used

// sometimes we loop through in object and some values is not found then it will be crashed, so to fix this we use property:
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true


// if we want to see more property of object then we can see the list from browser console (under Prototype)