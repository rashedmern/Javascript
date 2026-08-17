// what is array ?
// --> Array is a data structure that can hold a collection of items, typically of the same type. In programming, 
// arrays are used to store multiple values in a single variable, allowing for easy access and manipulation of those values. 
// Each item in an array is identified by an index, which is usually a non-negative integer. Arrays can be one-dimensional 
// (a single list of items) or multi-dimensional (arrays of arrays).


// example of array in javascript :
// const fruits = ["apple", "banana", "cherry"];
// console.log(fruits[0]); // Output: "apple"
// console.log(fruits[1]); // Output: "banana"
// console.log(fruits[2]); // Output: "cherry"

// Index : Index always starts from 0 in most programming languages, including JavaScript. 
// This means that the first element of an array is accessed using index 0, the second element with index 1, and so on.

// to check if a variable is an array or not in javascript we can use Array.isArray() method.
// console.log(Array.isArray(fruits)); // Output: true

// ** Basic Array Operations in JavaScript **
// --> Add/Remove Elements:
// - push(): Adds one or more elements to the end of an array.
// - pop(): Removes the last element from an array.
// - unshift(): Adds one or more elements to the beginning of an array.
// - shift(): Removes the first element from an array.

// Example of those methos in JavaScript:
// const fruits = ["apple", "banana", "cherry"];
// fruits.push("date"); // Adds "date" to the end
// console.log(fruits); // Output: ["apple", "banana", "cherry", "date"]

// fruits.pop(); // Removes the last element ("date")
// console.log(fruits); // Output: ["apple", "banana", "cherry"]

// fruits.unshift("elderberry"); // Adds "elderberry" to the beginning
// console.log(fruits); // Output: ["elderberry", "apple", "banana", "cherry"]

// fruits.shift(); // Removes the first element ("elderberry")
// console.log(fruits); // Output: ["apple", "banana", "cherry"]
