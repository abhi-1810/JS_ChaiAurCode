// Object de-structure and JSON API intro        (17/03/2025)

// De-structuring is done in both arrays and objects. We will learn array de-structuring later
// It's very interesting and important coz. we will do this many times like in react we have a object and we need to de-structure it and then take the values. We can directly take the values but de-structuring is easy


const course = {
    courseName: "JS in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor
// now suppose we have to print the above 3 times then it's become lengthy. So for this we use:

const {courseInstructor} = course
console.log(courseInstructor);
// give nickname to courseInstructor
const {courseInstructor: instructor} = course
console.log(instructor); 
// the above thing is known as de-structuring of object



// example of de-structuring in React
const navbar = ({company}) => {
    console.log(company);
}
navbar({company: "hitesh"})
// curly braces dekhenge to smjh jayenge ki ye de-structuring h



// API's Intro
// apna kaam dusre ke sar pe daalna
// APIs is nothing but the values come from backend
// phle API values XML structure me aata tha jo bht complex tha but ab JSON format me aata h which is very easy

// How JSON looks:
// {
//     "name": "abhijeet",
//     "courseName": "JS in hindi",
//     "price": "free"
// }
// JSON is similar to objects but don't have name like object. In JSON, key is also written in string

// Many times API's is in array format and there are many objects inside the array
[
    {},
    {},
    {}
]
// learn in detail later

// We have to spend some time to understand APIs
// Famous API: https://randomuser.me/

// Some good online tools to understand it:
// JSON formatter: https://jsonformatter.org/