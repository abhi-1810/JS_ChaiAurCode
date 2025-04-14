// High Order Array loops          (09/04/2025)

// ***** for of *****

// ["", "", ""]  // array containing strings
// [{}, {}, {}]  // array containing objects

// SYNTAX:
// for (const element of object) { // element here is variable

// }
// yha object kuch v ho skta h like array, strings, objects, etc. This object is not as of Javascript object, it's normal object.


const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num);
}


// const greetings = "Hello world!"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`)
// }

// If we want no space between Hello and World:
const greetings = "Hello world!"
for (const greet of greetings) {
    if (greet == " ") {
        continue
    }
    // console.log(`Each char is ${greet}`)
}




// ***** Maps *****
// The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

const map = new Map()
map.set('IN', "India")  // set is used to set a value in Map
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India") // ye nhi aayega coz. Map duplicate value nhi leta
// console.log(map);


// for (const key of map) {
//     console.log(key);  // Array ke form me print hoga
// }

// If we don't want array form & want to destructure the array:
for (const [key, value] of map) {     // [key, value] is the destructuring syntax
    // console.log(key, ':-', value);
}


// ***** for-of in objects *****
const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value); // o/p: TypeError: myObject is not iterable
// }
// Object is not iterable in for-of loop, we have to use for-in loop for objects





// ***** for-in *****

const myObject2 = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
// for (const key in myObject2) {
//     console.log(key); // o/p: js, cpp, rb, swift
// }
// yha srf. key print hua h but hume value v chahiye

// for (const key in myObject2) {
//     console.log(`${key} shortcut is for ${myObject2[key]}`);
// }


// ***** Question: Can we use for-in loop in array also? *****
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key);         // o/p: 0 1 2 3 4 [for-in loop is used to iterate over the keys]
}
// ye to key print krega but Value kaise nikalenge?
for (const key in programming) {
    // console.log(`${key} is for ${programming[key]}`);
}
// Arrays ki v key hoti h jo 0 se start hoti h aur srf. numeric hoti h but objects me hum jo mann kre wo key daal skte h



// ***** QUESTION *****
// Can we use for-in loop on Map?

const map2 = new Map()
map.set('IN', "India")  // set is used to set a value in Map
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map2) {
    // console.log(key); // doesn't print anything coz. Map is not iterable with for-in, it only iterate with for-of
}
// Why?
// for...in is for enumerating object properties, not iterable values. Since Map isn't a plain object, it won't iterate through its keys and values.




// (10/04/2025)
// DIFFERENCE BETWEEN FOR-OF & FOR-IN LOOP:

// for...of loop
// --> Iterates over iterable values, such as arrays, strings, maps, sets, etc.
// --> Returns values, not keys or indices.

// for...in loop
// --> Iterates over enumerable property keys (i.e., property names) of an object.
// --> Works for objects and arrays, but returns keys, not values.





// ******** for-each ********

// BASIC SYNTAX:
// array.forEach(function(currentValue, index(optional), array(optional)) {
//     // your code here
// });


const coding = ["js", "ruby", "java", "python", "cpp"]

// SYNTAX:
// coding.forEach( function name(params) {

// } )
// ye callback func. h to isme name nhi hoga aur q ki ye func. array ke andar chl rha to params ke jagah kuch v likh skte like value, num, item, etc.

// coding.forEach(function (item) {
//     console.log(item);
// })


// but it's not necessary to use only normal function, we can use Arrow function as well.
// coding.forEach( varName = () => {
    
// } )
// isme v name hta denge coz. store krne ki jroort nhi h

// coding.forEach( (item) => {
//     console.log(item);
// } )


// function printMe(item) {
//     console.log(item);
// }
// coding.forEach(printMe)  // yha function execute nhi krna h (printMe(), srf. reference dena h baaki printing ka kaam wo khud kr lega)


// coding.forEach( (item) => {
//     console.log(item);
// } )
// yha pe srf. item nhi aata h iske saath aur v parameters ka access hota h jaise index, array ki puri list

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// } )


// ***** MULTIPLE OBJECTS IN ARRAY *****
const myCoding = [
    {
        languageName: "javascipt",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    // console.log(item);
    // console.log(item.languageName);
    // console.log(item.languageFileName);
} )