// Date and Time     (10/02/2025)

// console.log("Dare is: ", Temporal.Now.instant());

let myDate = new Date()
// console.log(myDate);  // --> 2025-02-10T14:34:00.875Z [This is the ISO 8601 standard format for dates in JavaScript.] 
// here T separates date and time and Z stands for Zulu Time (UTC time), it means the time is in Coordinated Universal Time (UTC), not adjusted for any time zone.

// console.log(myDate.toString()); // --> O/P: Mon Feb 10 2025 15:00:06 GMT+0000 (Coordinated Universal Time). // Returns a string representation of a date. The format of the string depends on the locale. 
// console.log(myDate.toDateString()); // --> O/P: Mon Feb 10 2025. // Returns a date as a string value.
// console.log(myDate.toISOString()); // --> O/P: 2025-02-10T15:00:06.907Z. // Returns a date as a string value in ISO format
// console.log(myDate.toJSON()); // --> O/P: 2025-02-10T15:00:06.907Z.
// console.log(myDate.toLocaleDateString()); // --> O/P: 2/10/2025. // Converts a date to string by using the current or specified locale.
// console.log(myDate.toLocaleString()); // --> O/P: 2/10/2025, 3:00:06 PM // Converts date & time to string by using the current or specified locale.
// console.log(myDate.toLocaleTimeString()); // --> O/P: 3:00:06 PM // Converts a time to string by using the current or specified locale.

// console.log(typeof myDate); // --> Object


// let myCreatedDate = new Date(2025, 0, 23) // month 0 se start hota h
// console.log(myCreatedDate.toDateString()); 
// let myCreatedDate = new Date(2025, 0, 23, 5, 30, 20, 5) 
// console.log(myCreatedDate.toLocaleString()); 
// let myCreatedDate = new Date("2025-02-10") 
// console.log(myCreatedDate.toLocaleString());
let myCreatedDate = new Date("01-14-2025") 
// console.log(myCreatedDate.toLocaleString());

// timestamp: use in quizzes, polls to know who give the fastest answer
let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Date.now()); // --> O/P: 1739200677435 // returns the current timestamp in milliseconds since January 1, 1970 (UTC)
// // now we want to change it in seconds
// console.log(Date.now()/1000); // O/P: --> 1739200677.438
// console.log(Math.floor(Date.now()/1000)); // O/P: --> 1739200677


let newDate = new Date()
console.log(newDate); // --> 025-02-10T15:20:44.951Z

console.log(newDate.getDate()); // --> 10
console.log(newDate.getMonth()); // --> 1 [Feb., starts from 0]
console.log(newDate.getMonth() + 1); // --> 2 [due to plus 1]
console.log(newDate.getFullYear()); // --> 2025
console.log(newDate.getDay()); // --> 1 [today is Monday]
console.log(newDate.getMilliseconds());