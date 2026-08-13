// What is scope ?
// => Scope refers to the accessibility or visibility of variables and functions 
// in different parts of a program. It determines where a variable can be accessed or modified. 
// In JavaScript, there are mainly three types of scope:

// 1. Global Scope: Variables declared outside of any function or block have global scope.

// 2. Function Scope: Variables declared within a function are only accessible within that function.

// 3. Block Scope: Variables declared with let or const inside a block 
// (e.g., inside curly braces {}) are only accessible within that block.

// Example of Global Scope:
var globalVar = "I am a global variable";
console.log(globalVar);

// Example of Function Scope:
function myFunction() {
    var functionVar = "I am a function variable";
    console.log(functionVar);
}
myFunction();

// Example of Block Scope:
if (true) {
    let blockVar = "I am a block variable";
    console.log(blockVar);
}

// Note: Variables declared with var do not have block scope,
// so they can be accessed outside of the block they were declared in.


// Scope chain : 
// The scope chain refers to the order in which JavaScript looks for variables.
// When a variable is referenced, JavaScript first looks in the current scope,
// then in the parent scope, and so on, until it reaches the global scope.

