// Comparision of Datatypes in JS   (24/01/2025)

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1); // these all are simple one, straightforward

// Problem arises on the below comparision

// console.log("2" > 1);
// console.log("02"> 1);  // JS automatic converts "2" into 2
// console.log("2" > true); // --> True (true means 1)
// console.log("1" > true);


// Note: the problem is when we compare two different datatypes then sometimes it will give unpredicatble result. While TypeScript doesn't allow to do this.  
// So, it's good to compare two same datatypes

// console.log(null > 0); // --> false (coz. here JS converts null into 0)
// console.log(null == 0); // --> false (coz. equality doesn't covert null to anything)
// console.log(null >= 0); // --> true ()
// Reason: an equality check (==) & comparisions (>, <, >=, <=) work differently. Comparisions convert null to a number, treating as 0.


// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);
// Note: Undefined always gives false coz. JS don't covert it to anything

// Note: try to avoid the above thing as much as possible  coz. we need to write clean code mostly

// === (use for strict check i.e., it check values as well as datatype)

console.log("2" == 2); // --> true (it converts string into no.)
console.log("2" === 2); // --> false (different datatypes are there and it strictly checks so will not convert string into number)

console.log("1" > true);