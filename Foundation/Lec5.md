# Lecture-5 (Datatypes and ECMA standards)

* use strict -> treat all JS code as newer version, iske bina v kaam chl jayega but this is a good practice to show that all the codes in that file follows newer version of JS
* alert (3+3) gives error here but not in browser coz. JS engine is in browser but here we use node

## ECMAScript
In starting days, JS had different standards for different browsers. So, everyone decided to define ECMAScript organisation which write standards of JS not JS. E.g., it will define how to take input and show output for a loop. After that we can do anything but we should follow atleast this standards.

## Datatypes
1. Number -> can be written with, or without decimals (e.g., let x1 = 34.00; or let x2 = 34;)

2. String -> can use '' or "" (preferred is "") 
       * {can use quotes inside a string if they differ from the surrounding quotes}

3. Bigint -> new datatype(ES2020) used to store very big value {e.g., in trading, stock market, reddit, fb, etc}

4. Boolean -> can only have two values: true or false

5. Undefined -> a variable without a value (e.g., let car;)
       * Any variable can be emptied, by setting the value to undefined (e.g., car = undefined;)

6. Null -> empty (e.g., suppose a server giving temp. have some defect in it so normally it sends 0 as a temp. which is wrong, so in that place one should use null) ( e.g., let temp = null)

7. Symbol -> used for uniqueness. Mostly used in react or in Figma tools.

8. Object -> will talk about these later



### Type of undefined is undefined but the type of null is object. Why?
--> The reason behind this is that null, in contrast with undefined, was (and still is) often used where objects appear. In other words, null is often used to signify an empty reference to an object. When Brendan Eich created JavaScript, he followed the same paradigm, and it made sense (arguably) to return "object".