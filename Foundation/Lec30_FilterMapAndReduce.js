// Filter, map and reduce in javascript          (14/04/2025)



const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( item => {
    // console.log(item);
})

// let's put this into variable and then try to print the var. value.
const values = coding.forEach( item => {
    // console.log(item);
})
// console.log(values); // isne kuch return nhi kiya to undefined return ho gya


// we may think that after manually returning the value we get the correct output, let's see:


const values1 = coding.forEach( item => {
    // console.log(item);
    return item
})
// console.log(values1); // this also doesn't return anything

// **** REASON: **** 
// for-each doesn't return anything. it always return undefined


// This problem can be solved with FILTER()

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter( (num) => num > 4)
// console.log(newNums);


// another way
const newNums1 = myNums.filter( (num) => {
    return num > 4     // with curly braces, we must use return
} ) 
// console.log(newNums1);


// we can also do the above in for-each loop but .forEach() is used for side effects like logging or pushing to another array because it doesn't return a value.
const newNums2 = []
myNums.forEach( (num) => {
    if (num > 4) {
        newNums2.push(num)  
    }
} )
// console.log(newNums2); // o/p: [ 5, 6, 7, 8, 9, 10 ]

// WE CAN USE ANY OF THE ABOVE TWO WAY(filter or forEach), IT TOTALLY DEPENDS UPON US.



// EXAMPLE of FILTER:
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  // aise values hi milegi database se jispe hume required filter lgana hoga

  // Task: print books whose genre is History
  const userBooks = books.filter( (bk) => bk.genre === 'History')    // bk is var. name, we can give any name
  // console.log(userBooks);
  
  // Task: print books who is published after 2007
  let userBooks1 = books.filter( (bk) => bk.publish > 2000)
  // another way using curly braced
  userBooks1 = books.filter( (bk) => {return bk.publish > 2000})

  // Task: books whose publish date is above 1995 and genre is History
  userBooks1 = books.filter( (bk) => {return bk.publish > 1995 && bk.genre === 'History'})

  // console.log(userBooks1);




// ***** MAP *****
// Task: add 10 to all the numbers in the given array
const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums3 = myNumers.map( (num) => num + 10 )
// console.log(newNums3);


// TASK: do the above things using forEach() loop
const newNums4 = []     // coz. forEach push the value into another array
myNumers.forEach( (num) => {
    newNums4.push(num+10)
})
// console.log(newNums4);


// ***** CHAINING *****
// it means to use multiple maps or to use maps and filters together
const newNums5 = myNumers
                         .map( (num) => num * 10) 
                         .map( (num) => num + 1)
                         .filter((num) => (num > 40))

// console.log(newNums5);


// ***** FILTER vs MAP *****

// ** Filter: **
// Purpose: Selects elements from an array that meet a specific condition.
// Returns: A subset of the original array.
// Callback: Should return a boolean (true to keep the item, false to discard).

// ** Map: **
// Purpose: Transforms each element in the array.
// Returns: A new array with the same number of elements, but each one is modified.
// Callback: Should return the transformed value for each item.