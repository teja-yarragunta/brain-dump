// so let or const? in most cases, 'const' is the best choice, not because it allows you to do most with it but because it allows you to do least.
// const have restrictions that let doesn't
// const -> restrictions that make code more readable
// 1) must be initialized with a value
// 2) cannot reassign that value

// var originalPrice = 50;
// var percentOff = 20;
// var salePrice = originalPrice * (percentOff / 100);
// // rest of our program (maybe 100s of lines)
// console.log(salePrice); // although this gives correct answer here, there's no guarantee that the values won't change before the logging or after the first initializations.

// but with const,
// const originalPrice = 50;
// const percentOff = 20;
// const salePrice = originalPrice * (percentOff / 100);
// // rest of our program (maybe 100s of lines)
// console.log(salePrice); // we can guarantee that the values won't be changed at all.

// BLOCK SCOPING

// var price = 20;
// var isSale = true;
// // variable shadowing
// if (isSale) {
//   // discount price of product
//   var price = 20 - 2;
//   // do something
//   console.log("sale price", price);
// }
// console.log("price", price);

// output
// sale price 18
// price 18

// var -> variables declared with var that live in the global scope, when in function they live in the scope of the function
// Variable Shadowing -> The phenomenon of one variable overriding any variable of the same name that belongs to a wider scope is called
// the solution to the variable shadowing problem is to not use var declarations
// other main purpose of using let & const is that they are block scoped.
// any variable created with let & const in a block, cannot be accessed outside the block
