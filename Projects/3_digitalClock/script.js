const clock = document.getElementById("clock");
// const clock = document.querySelector('#clock') // 2nd way


// let date = new Date();
// console.log(date.toLocaleTimeString());

// isse console me time aane lgega but hume chahiye ki ye har second automatic change ho, iske liye hum use krenge Set Interval ka


// Set Interval: it requires a method and a interval (e.g., 1sec.) by which we want to run our program
// Syntax: setInterval(function() {}, 1000)
setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);