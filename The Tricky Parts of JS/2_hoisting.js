// Hoisting
// variable declarations are figuratively hoisted to the top of it's scope
// due to the way JS interpreter works, we can imagine that variable declarations are moved to the top of its current scope and then set at the point we define them either at or before runtime depending on if we are using var or let & const

console.log(char);
// var char = "a"; // undefined
let char = "a"; // ReferenceError: Cannot access 'char' before initialization

// both variables (with var and let) are hoisted
// however the difference is that variables defined with const and let are evaluated at runtime
// let and const declarations are also hoisted
