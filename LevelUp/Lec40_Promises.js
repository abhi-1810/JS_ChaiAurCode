// Promise in JavaScript          (13/05/2025)

// Declaration of Promies:
// const promiseOne = new Promise()

// HISTORY:
// in starting there is no fetch, then, catch so developer use promise libraries like Q or bluebird 


const promiseOne = new Promise(function(resolve, reject) {
    // Do an Async Task
    // DB calls, cryptography, network
    setTimeout(function() {
        console.log("Aysnc task is complete");
        resolve()
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
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");   
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function() {
        
    }, 1000)
})