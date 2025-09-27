// VARIABLES;
// 1) variable names only contain letters, numbers, symbols  $ _
// 2) must not start with a number
// 3) JS developers follow camelCase notation..

// msg = "john";
// console.log(msg);

// prints without any error even without the reserved keyword for creating variables like var, let & const
// although this is not a variable, its a property of the global object
// because it got added to a GLOBAL OBJECT -> that can be accessed anywhere within our application
// GLOBAL OBJ is different across various environments where JS runs
// for browsers, the global object is called as window or self
// in servers like nodeJs, it is called as global
// for anything, the common word is globalThis

// console.log(window.msg);
// console.log(globalThis.msg);

// var msg = "hello john";
// console.log(msg);

// console = "hi"; // we get type error, it assumes that we are typing console.log
// var console = "hi";
// console.log(console);

// JavaScript can be run on 2 modes.
// 1) Sloppy Mode or Normal Mode -> default mode
// 2) strict Mode -> several pitfalls of normal mode are removed and more errors are thrown
// they can be switched between in the scripts
// we can change from sloppy to strict..

// "use strict";
// message = "hello world";
// console.log(message);

// in strict mode we get the reference error, saying message is not defined
// strict mode helps with variables and lot more quirks of the language

// there are problems using var, such as the problem of 'Hoisting'
// which is trying to access a variable before it was created

// "use strict";
// console.log(message); // we get undefined, wtf!
// var message = "hello";

// its like the JS engine first looks at our declarations, and it's like the variable var declaration is hoisted (lifted up) like,
// var message;
// console.log(message);
// message = "hello";

// in other words, hoisting describe the behavior of lifting up or hoisting a variable declaration on top its context its running in, and this context is also known as its SCOPE
// strict mode solves some issues with var, but doesn't fix the hoisting problem. so what to do? we'll see

// the solution, just don't use 'var' as also the strict mode doesn't fix the hoisting problem
// instead use let and const to declare variables
// we won't have the hoisting problem with let and const

// console.log(message); // ReferenceError: Cannot access 'message' before initialization
// let message = "hello";

// console.log(message); // ReferenceError: Cannot access 'message' before initialization

// The Temporal Dead Zone

// const message = "hello"; // same referenceError for const also

// there's actually a name for this behavior where let & const preventing the hoisting, when we try to use let or const variable, before it exists, the space between where we're trying to access the value and where the variable actually is created is what's know as TEMPORAL DEAD ZONE

// let age = 21;
// let age = 22; // we get SyntaxError that the variable has already been declared
// console.log(age);

// so why are there 2 keywords? let and const
// when we have a variable value that changes, keeps changing or could be changed - use let
// otherwise - use const

// let years;
// years = 21; // this is totally valid
// years = 25;

// with const we can't just declare a variable without initialization
// const userName; // syntax error saying 'missing initialization'

// const userName = "john"; // valid
// userName = "joey"; // invalid, // we get type error, assignment to constant variable
