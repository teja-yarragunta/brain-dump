// if statements - evaluate boolean values
// const prefersDarkMode = false;
// const prefersSolarizedMode = true;

// if (prefersDarkMode) {
//   console.log("dark mode set!");
//   document.body.style.background = "black";
// } else if (prefersSolarizedMode) {
//   console.log("solarized mode set!");
//   document.body.style.background = "palegoldenrod";
// } else {
//   console.log("light mode set!");
//   document.body.style.background = "ghostwhite";
// }

// const colorMode = "dark";

// if (colorMode === "solarized") {
//   console.log("solarized mode set!");
//   document.body.style.background = "palegoldenrod";
// } else if (colorMode === "dark") {
//   console.log("dark mode set!");
//   document.body.style.background = "black";
// } else {
//   console.log("light mode set!");
//   document.body.style.background = "ghostwhite";
// }

// SWITCH
// const colorMode = "dark";
// switch (colorMode) {
//   case "solarized":
//     console.log("solarized mode set!");
//     document.body.style.background = "palegoldenrod";
//     break;
//   case "dark":
//     console.log("dark mode set!");
//     document.body.style.background = "black";
//     break;
//   default:
//     console.log("light mode set!");
//     document.body.style.background = "ghostwhite";
// }

// output will be
// dark mode set!
// light mode set!   // because the default also executed, so use break

// there are 2 types of datatypes in javascript
/*
Primitive types:

string
number
boolean
undefined
null
symbol

everything else - Object type - non primitive
*/
// let message = "some string";
// console.log(typeof message); // string
// console.log(typeof 65); // number
// console.log(typeof window); // undefined
// console.log(typeof global); // object
// console.log(typeof globalThis); // object
// console.log(typeof true); // boolean

// we can convert a variable of one data type to another, but we need to know which conversions are possible
// 2 ways in doing that
// 1) Explicit type conversion -> this is through certain functions available in the language - String()
// 2) Implicit type conversion -> we don't express that we want to convert from one dt to another, javaScript does this automatically, also called as Automatic Conversion -- Coercion

// console.log(typeof String(65));
// console.log(String(65));
// console.log(typeof Number("A"));
// console.log(Number("A"));
// console.log(typeof Boolean("hello"));
// console.log(Boolean("hello"));

// we can do these weird explicit conversions in JS using the functions, JS tries the convert the datatypes without any error, this is explicit conversion
// for many operations, JS automatically converts the data if the datatypes don't fit together for a certain operation
// eg

// console.log("4" * "2"); // wtf! we are multiplying 2strings and now we're getting the correct product and in number dt
// console.log(typeof ("4" * "2"));

// console.log("10" + 20); // string + number, now it's performing string concatenation
// console.log(typeof ("10" + 20));

// when 2 values of different datatypes combine in JS, only one wins

// this implicit coercion takes place for any conditional written
// any value that is being evaluated in a conditional, if, else if, switch or ternary, JS is going to automatically try to convert what we pass to its parenthesis as the condition, it's going to automatically convert into a boolean.
// so any value we provide to a conditional doesn't have to be a boolean,
// if (value) {
//   // if true, do something with value
// }
// // this is out basic if statement example
// // internally JS do this,
// if (Boolean(value) === true) {
//   // if true, do something with value
// }
// // only when true is true, javascript executes the if block
// if (true === true) {
//   // if true, do something with value
// }

// so JS takes any datatype that we provide to a conditional and turn it to either true or false
// so how do we know which is going to be?
// leads to 2 important concepts when determining the outcome of any conditional in JS
// 1) truthy (true)
// 2) Falsy (false)
// eg
if ("hello") {
  console.log("run");
} else {
  console.log("skip");
}
// we get 'run' as the output
// so 'hello' was coerced to true by javascript and is a truthy value

if (7) {
  console.log("run");
} else {
  console.log("skip");
}
// run

if (0) {
  console.log("run");
} else {
  console.log("skip");
}
// skip
// so 0 was coerced to false by javascript and is a falsy value

if (-9) {
  console.log("run");
} else {
  console.log("skip");
}
// run

// so how to we know whether JS will consider true or false, we just have to remember 6 values
// false,
// 0,
// '', ``, "" (empty string)
// null -> we tell/make something empty
// undefined -> JS tells that variable is empty
// NaN
// these 6 values are falsy values

// 3 tips to avoid problems regarding this,

// 1) Avoid direct comparisons in conditionals
const username = "";
// const username = null;
// const username = undefined;
if (username === false) {
  // we don't need to do comparison here as JS will coerce automatically
  console.log("no user");
}
if (!username) {
  // best practice, so no need to check for comparisons, !(not) operator is enough
  console.log("no user");
}

// 2) Use triple equals === (strict equals operator)
// because they don't allow type conversions
// they don't change out types to make the conversion work
// == double equality operator, loose equality operator, which will convert types in times

// In JavaScript, == (loose equality) and === (strict equality) are used to compare values, but they behave differently.

// == (Loose Equality)
// Compares Values (after type coercion): This operator compares values for equality after performing type coercion, meaning it converts the values to the same type before comparing them.
// Potential for Unexpected Results: Due to type coercion, values of different types might be considered equal if they are logically equivalent after conversion, such as 5 == '5' returning true.

// === (Strict Equality)
// Compares Values AND Types (no type coercion): This operator checks for equality without type conversion. Both the value and the data type must be exactly the same for the comparison to return true.
// More Predictable Behavior: Since it doesn't involve type coercion, === provides more reliable and predictable comparisons, for example, 5 === '5' returns false.

if (null == undefined) {
  console.log("equals");
} else {
  console.log("not equals");
}
// output is 'equals' with loose equality
// because the loose equals operator coercing these values so that they are viewed as having the same type

if (null === undefined) {
  console.log("equals");
} else {
  console.log("not equals");
}
// output is 'not equals' with strict equality

// 3) Convert to real Boolean values where needed
if (NaN === NaN) {
  console.log("equal");
} else {
  console.log("not equals");
}
// this gives us 'not equals', but they are 'equal' right?
// to fix this, we need to convert them to real boolean
if (Boolean(NaN) === Boolean(NaN)) {
  console.log("equals");
} else {
  console.log("not equals");
}
// now we get 'equals'

// console.log(!undefined); // true
// console.log(Boolean(NaN)); // false
// console.log(false === false); // true
// console.log(5 === "5"); // false
// console.log("Hello" == "hello"); // false

console.log(Boolean(0)); // false
console.log(Boolean("0")); // true
console.log(Boolean("")); // false
console.log(!null); // true
console.log(!!"hello"); // true
