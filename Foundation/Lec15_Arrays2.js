// Lec15_Arrays2.js     (25/02/2025)

const marvelHeroes = ["thor", "Ironman", "spiderman"]
const dcHeroes = ["superman", "flash", "batman"]

// marvelHeroes.push(dcHeroes)

// console.log(marvelHeroes); // O/P: [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] 
// yha pe ye pura [ 'superman', 'flash', 'batman' ] single index element treat hoga
// console.log(marvelHeroes[3][1]); // O/P: flash

// const allHeroes = marvelHeroes.concat(dcHeroes);
// console.log(allHeroes); // O/P: [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// push() vs concat(): push same array modify krta h aur concat new array me krta h

// ----- Spread -----
const allNewHeroes = [...marvelHeroes, ...dcHeroes]
// console.log(allNewHeroes);


// ----- flat() -----
// The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const realAnotherArray = anotherArray.flat(Infinity) // Infinity will automatically detect the depth

// console.log(realAnotherArray);



// console.log(Array.isArray("Abhijeet"))
// console.log(Array.from("Abhijeet"))

// -----> IMPORTANT <------
console.log(Array.from({name: "Abhijeet"}));


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));


// HW: leran more about isArray(), from(), of()