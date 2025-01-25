// Stack and Heap Memory in JS    (25/01/2025)

// Use of Stack and Heap
// Stack (Primitive), Heap (Non-Primitive)

// jab v stack memory use hoti h iska mtlb h ki humne jo v variable declare kiya h uska hume ek copy milta h
// jab v ek memory Heap ke andar define hota h to waha se milta h original value

// ******** Example Stack ********

let myLinkedinName = "Abhijeet"

let anotherName = myLinkedinName // copy of myLinkedinName is given to anotherName variable not the original value
anotherName = "Raunak"

console.log(myLinkedinName); // --> Abhijeet (coz. it's copy will change not the original value)
console.log(anotherName); // --> Raunak


// ******** Example Heap ********
// Non-Primitive
let userOne = {
    emai: "user@google.com",
    upi: "user@axl"
}

let userTwo = userOne

userTwo.email = "abhijeet@google.com"  // ye value userOne me v reflect hoga

console.log(userOne.email);  // O/P:abhijeet@google.com
console.log(userTwo.email);  // O/P:abhijeet@google.com