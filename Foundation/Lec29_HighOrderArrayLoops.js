#  High Order Array loops          (09/04/2025)

## for of

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
for (const [key, value] of map) {
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
    // console.log(key);
}
// ye to key print krega but Value kaise nikalenge?
for (const key in programming) {
    // console.log(`${key} is for ${programming[key]}`);
}
// Arrays ki v key hoti h jo 0 se start hoti h but objects me hum jo mann kre wo key daal skte h

// ***** QUESTION *****
// Can we use for-in loop on Map?

const map2 = new Map()
map.set('IN', "India")  // set is used to set a value in Map
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map2) {
    console.log(key); // doesn't print anything coz. Map is not iterable with for-in, it only iterate with for-of
}
// Why?
// for...in is for enumerating object properties, not iterable values. Since Map isn't a plain object, it won't iterate through its keys and values.