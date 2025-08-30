// characters -> a, D, !, # etc ((not numbers))
// string -> collection of characters
let username = "Jane@Doe";
// let message = "Hi " + username + ", how are you?"; // we can concatenate string with '+'
// console.log(message);

// let a = 10 + "";
// console.log(a); // this number got converted into string
// console.log(typeof a); // prints 'String'

// let message = "Hi " + username + ", how are you?";  writing like this is not good looking, and concatenating more number of strings can be tiring too with '+' operator, it is hard to read and it's not good practice to use a math operator when working with strings.

// Template Literal
// this is a new feature of the language, instead of '' , "".. we use back-tick -> ``
// let message = `Hi username! how are you?`; // this prints as it is
// console.log(message);

// to access variable values in a template literal string, we need to use a process called String Interpolation
// let message = `Hi ${username}! how are you?`; // we use $ sign and enclose the variable name in {}
// console.log(message);
// we can even put dynamically computed value, it first converts into string and concatenates
// console.log(`hi! i am ${10 + 11} years old.`); // hi! i am 21 years old.

// 'I'm' a string';    // this is not right
// "I 'am' a string"  // use opposite quotes -> this is correct

// "He said, "I am string.""; // wrong way
// 'He said, "I am a string"'; // right way

// we can use backward slash too
// 'I\'m\' a string'; // right, we are telling JS to ignore quotes here
// "He said, \"I am string.\"";
// to avoid these issues we can always use template literals
// `I'm a string`;

// `He said, "I am string."`;   // valid strings

// const threeLines = "This is a string \n that spans across \r three lines.";
// console.log(threeLines);

// \n -> new line
// \r -> carriage return

// its annoying to write this so, we can just use template literals
// const fourLines = `This is a string
// that spans
// across
// four lines.`;
// console.log(fourLines);

// HOW TO NAME VARIABLE
// they are case sensitive
// try to use camelCase

const name = "Jane";
const Name = "Mark";
const NAME = "Fred";

console.log(name, Name, NAME);

// let new_value = `${value1} ${value2}`; // don't use like this, be specific

let fullName = `${firstName} ${lastName}`; // good

// JavaScript is a loosely typed language, meaning any variable can contain any datatype

let isModalVisible = false; // for booleans try to use is/has prefix

const COLOR_RED = "#f00"; // for constants which can't be changed even by the developers, use all caps and underscores as separators
