// Promise in JavaScript          (13/05/2025)

// Simple Definition:
// jo v hmne task diya h wo avi ke avi complete nhi hoga. Queue me lg jayega lkin load/complete turant nhi hoga

// Declaration of Promies:
// const promiseOne = new Promise()

// HISTORY:
// in starting there is no fetch, then, catch so developer use promise libraries like Q or bluebird 


const promiseOne = new Promise(function(resolve, reject) { // promise ya to pura hoga nhi to nhi hoga.. pura hua to resolve wrna reject
    // Do an Async Task
    // Async tasks example: DB calls, cryptography, network
    setTimeout(function() {
        console.log("Aysnc task is complete");
        resolve() // ye .then ko inform krega ki ab apna kaam kr lo
    }, 1000)
})
// but the quest. is yha pe resolve & reject ne kiya kya h?

// yha pe promise create hua h to ab ise consume krna h
// How to consume promise:
promiseOne.then(function() {    // then is related to resolve
    console.log("Promise consumed"); // ye nhi aayega q ki hmne resolve aur .then ko connect hi nhi kiya
    // ise connect krna h to resolve() method ka use krna hoga
})


// In above we store promise in a var. but it's not necessary
new Promise(function(resolve, reject){
    setTimeout(function() {
        console.log("Async Task 2");
        resolve() // ye .then ko inform krega ki ab apna kaam kr lo
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");   
})

// resolve ke andar hum parameter me kuch data v pass kr skte h
// kuch v pass kr skte h e.g., Array, function, objects, etc.. but mostly we pass object
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function() {
        resolve({username: "Chai", email: "chai@example.com"}) // inform .then to execute
    }, 1000) 
})

promiseThree.then(function(user){
    console.log(user);
})




// ******** 22/06/2025 ********




// here we see the use of reject
// ** Chaining **
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        // we use if-else to perform resolve and reject both
        if (!error) {
            resolve({username: "abhijeet", password: "abcd"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username 
    // ab ye upar wli value return kaha pe hogi? iske liye hum use krenge .then ki chaining
}).then((myUsername) => {
    // new chain me upar wli chain ki return value aayegi
    console.log(myUsername); // avi v error aayega to hume catch use krna hoga
}).catch(function(error){
    console.log(error);
}).finally(() => {
    // finally hmesa hi execute hoga
    console.log("The promise is either resolved or rejected");
}) 




// ***** 23/06/2025 *****



// Similar to above but here we use async await
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "abcd"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error); 
    }
}
consumePromiseFive()