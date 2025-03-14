// const tinderUser = new Object() // Singleton object
// console.log(tinderUser); // O/P: {}

const tinderUser = {}  // non-singleton object
// console.log(tinderUser); // O/P: {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser); // O/P: { id: '123abc', name: 'Sammy', isLoggedIn: false }

// **** OBJECT inside ANOTHER OBJECT ****
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Abhijeet",
            lastname: "Kumar"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);
// let's suppose fullname don't exist, then what to do?
// Optional chaining(?.) comes into the picture, it will execute the statement even some value is not present. It reduces the work by not using if-else statements.

