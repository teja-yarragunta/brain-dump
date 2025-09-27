// Hoisting
// variable declarations are figuratively hoisted to the top of it's scope
// due to the way JS interpreter works, we can imagine that variable declarations are moved to the top of its current scope and then set at the point we defined them either at or before runtime depending on if we are using var or let & const

// console.log(char);
// var char = "a"; // undefined
// let char = "a"; // ReferenceError: Cannot access 'char' before initialization

// both variables (with var and let) are hoisted
// however the difference is that variables defined with const and let are evaluated at runtime
// let and const declarations are also hoisted

// let's prove that let variables are hoisted
// let letter = "a";
// if (true) {
//   console.log(letter);
//   let letter = "b";
// }
// o/p => ReferenceError: Cannot access 'letter' before initialization

// let letter = "a";
// if (true) {
//   console.log(letter);
// }
// o/p => a
// in the above example, let letter = 'b', it knows the existence of the letter variable valuing 'a'
// it knows the existence of the variable letter, causing a reference error
// even though the letter variable is defined in the global scope and the local version of letter in the if block is declared after the console.log, we will still get the reference error

// this means that our local let declaration is being hoisted and the console.log is aware of it,
// but due to the way javascript interpreter works, we are simply unable to access it at this point

// const letter = "a";
// if (true) {
//   console.log(letter); // a
//   //   let letter = "b"; // reference error
//   const letter = "b"; // ReferenceError
// }

// the time in which a let or const variables is not at available at runtime is known as TEMPORAL DEAD ZONE

// the variable declaration is hoisted, but the definition (assigning) is not

// example 1
// console.log(char);
// var char = "a";
// we get => undefined

// example 2 -> syntactic representation of hoisting in example 1
// var char;
// console.log(char);
// char = "a";
// we get => undefined

// examples 1 and 2 are essentially the same things but syntactically different
// in example 1, what hoisting is doing is its taking the var char and its moving it to the top, like we see in example 2, and in example 1, where we assign the variable, it's actually creating the definition at the point that we assigned in example 2

// FUNCTION declarations are also hoisted to the top of it's current scope, but differently than variables
console.log(squareNumber(4));
function squareNumber(num) {
  return num ** 2;
}
// output: 16
// we can see that not only the function declaration is hoisted but also the function definition
