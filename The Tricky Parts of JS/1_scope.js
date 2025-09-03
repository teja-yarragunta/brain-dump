// scope can be defined as the area in which the variable is visible
// if not using strict mode

// function addTwenty(num) {
//   var add = 20;
//   return num + add;
// }
// console.log(add); // ReferenceError: add is not defined

// this is because add is bound by the scope of the function and we are trying to accept it outside its scope
// add is not visible outside of its current scope

// console.log(num);
// let num = 5;
// ReferenceError: Cannot access 'num' before initialization
// because we are trying to access a variable that does not yet created in memory

// lets make that var instead of let

console.log(num);
var num = 5; // undefined
// we get undefined
// let and var does not work the same,
// declarations that are made with let & const are evaluated at runtime, but var declarations are not evaluated at runtime, so we end up getting undefined instead of a reference error

// the fact that the interpreter knows about the existence of this variable because it was declared is due to something know as HOISTING

// 1. Creation Phase (a.k.a. Compile-time or Hoisting phase)

// Happens before any of your code actually runs.

// The JavaScript engine scans through the scope and:

// Creates memory space for variables and functions.

// For var: allocates memory and sets the value to undefined.

// For let/const: allocates memory but does not initialize (they are in the Temporal Dead Zone).

// For function declarations: stores the entire function.

// So here, var already has undefined.

// 2. Execution Phase (Runtime)

// Code runs line by line, top to bottom.

// When execution reaches:

// A var assignment → it updates the value (from undefined to whatever you assign).

// A let/const declaration → variable finally gets initialized at that moment. Until then, any access causes ReferenceError.

// The difference:

// var gets both declaration and initialization (undefined) during the creation phase.

// let and const only get declared in the creation phase, but initialized later at runtime when execution reaches their line.

// Example (timeline view)
// console.log(a); // ✅ undefined
// console.log(b); // ❌ ReferenceError

// var a = 5;
// let b = 10;

// Creation phase:

// var a → memory created, initialized to undefined.

// let b → memory created, uninitialized (TDZ).

// Execution phase:

// console.log(a) → prints undefined.

// console.log(b) → error, because b is in TDZ.

// a = 5 → updates value.

// b = 10 → initializes and assigns value.

// 👉 So when we say "let/const are evaluated at runtime, not like var," what we really mean is:

// var → initialized before runtime begins (in the creation/hoisting step).

// let/const → only initialized at runtime when execution hits their line.
