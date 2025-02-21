// Arrays-1        (20/02/2025) & (21/02/2025)

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// --> JS arrays are resizable and can contain a mix of diff. data types (e.g., no, boolean, strings, objects, arrays)

// console.log(myArr[1]);
// console.log(myArr["one"]); // wrong

// Shallow Copy & Deep Copy:
// A shallow copy means that certain (sub-)values are still connected to the original variable. A deep copy means that all of the values of the new variable are copied and disconnected from the original variable.


// 21/02/2025
// ***** Array Methods *****

// myArr.push(6)
// myArr.push(7)
// myArr.pop()    // remove the last element

// myArr.unshift(9)  // add at starting {this is not good coz. if we want to add 1000's of element then it's very time consuming but we can use in some simple & starightforward case}

// myArr.shift() // remove element from start


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(8)); // O/P: -1 coz. element is nt present
// console.log(myArr.indexOf(3));

const newArr = myArr.join() // adds all elements of an array into string

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);


// Slice & Splice
// slice(): returns a new array with selected elements from an array without modifying the original. It exclude the last index element.
// splice(): modifies the original array by adding, removing, or replacing elements. It include the last index element.

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)
console.log("Slice: ", myn1);
console.log("Original Slice: ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("Splice: ", myn2);
console.log("Original Splice: ", myArr);