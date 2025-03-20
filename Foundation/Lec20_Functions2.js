// Functions with objects and array in javascript       (20/03/2025)

// suppose we have multiple arguments to add
// e.g., in a shopping cart we have to add prices of many products

function calculateCartPrice(...num1) {
    return num1
}
// (...) isko hi rest operator aur spread operator bola jaata h, it depends upon use-case. Will talk about it later. Rest operator means faila hua cheez ko ek bundle me krna

// console.log(calculateCartPrice(200, 400, 500, 2000)); // O/P: [ 200, 400, 500, 2000 ]

function calculateCartPrice1(val1, val2, ...num1) {
    return num1
}
// console.log(calculateCartPrice1(200, 400, 500, 2000)); // O/P: [ 500, 2000 ]
// Why? --> val1 me 200 jayega, val2 400 jayega and rest array ke andar


// **** HOW TO PASS AND USE OBJECTS IN FUNCTIONS ****
// const user = {
//     username: "abhijeet",
//     price: 199
// }

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user)

// it's not necessary to make object and pass like above; another way is to directly pass the object:
handleObject({
    username: "sam",
    price: 399
})


// **** HOW TO PASS AND USE ARRAYS IN FUNCTIONS ****
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1] 
    // hume yha myNewArray nhi likhna coz. wo generic name to kuch v ho skta h, hume bs dhyaan dena h ki humare paas kya argument(getArray) aa rha h
}
// console.log(returnSecondValue(myNewArray)); // O/P: 400

// it's not necessary to make arrays and then pass like above; another way is to directly pass the array:
console.log(returnSecondValue([200, 400, 100, 600])); // O/P: 400