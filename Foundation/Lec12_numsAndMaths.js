// Numbers and Maths    (10/02/2025)

const score = 400 // js automatically detects that it is a number
// console.log(score);


// many time we want to explicitly declare the type as Number
const balance = new Number(100)
// console.log(balance); // --> ye specially dikhayega ki ye no. h --> O/P; [Number: 100]
// console.log(typeof balance); // --> 'object' (coz. balance is a Number object, not a primitive number).
// **again we can check all the available properties for no. in browser console using above examples**


// toString()
// console.log(balance.toString());
// console.log(typeof balance); // still outputs "object" because calling .toString() does not change the original balance object; it only returns a string representation of it.

// console.log(balance.toString().length);


// toFixed(): The toFixed() method of Number values returns a string representing this number using fixed-point notation with the specified number of decimal places.
// use: specially client ko dikhane ke liye like in e-commerce website. 2 precision value is good
// console.log(balance.toFixed(2)); // --> 100.00


// toPrecision(): returns a string representing this number to the specified number of significant digits.
const otherNumber = 23.8966
// console.log(otherNumber.toPrecision(4)); // --> 23.90


const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); // 'en-IN': changes default(US standard) into indian





// ************* Maths *************

// console.log(Math); //--> Object [Math] {}   // browser console will give detailed value
// console.log(Math.abs(-4)); // change -ve into +ve
// console.log(Math.round(4.6)); // --> 5
// console.log(Math.ceil(4.2)); // ceil gives upper value  // --> 5
// console.log(Math.floor(4.9)); // floor gives lower value  // --> 4
// console.log(Math.sqrt(144)); // gives square root of the no.   // --> O/P: 12
// console.log(Math.min(18, 28 , 56)); // --> 10
// console.log(Math.max(4, 8, 10)); // --> 18


console.log(Math.random()); // give random value b/w 0-1
console.log(Math.random()*10); // x10 krne se 1 point ghisak jayega (max value 10) but avi v value 0 me aa skti h coz. 0.03258 isme agar x10 kiye v to 0.3258 aayega
console.log((Math.random()*10) + 1); // +1 krne pe val hmesa min. 1 aayegi, basically ye 0 case ko avoid krega
console.log(Math.floor(Math.random()*10) + 1); // round off krke dega lower value dega

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);