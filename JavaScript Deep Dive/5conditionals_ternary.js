// shortening the conditionals with ternary operator

// const isAuthenticated = false;
// let cartItemCount = 0;

// if (isAuthenticated) {
//   // add item to cart
//   cartItemCount = 1;
// } else {
//   // tell user to login
//   //   console.log("Please log in!");
//   cartItemCount = 0;
// }

// there's a better way to do this using ternary operator
// ternary is like an expression
// if else is like a statement

// isAuthenticated ? cartItemCount = 1 : cartItemCount = 0; // we can write like this but, it's not good practice
// in the end we are just changing the cartItemCount value using the ternary expression

const isAuthenticated = false;

// cartItemCount = isAuthenticated ? 1 : 0;
// const cartItemCount = isAuthenticated ? 1 : 0;
// console.log(cartItemCount);

const cartItemCount = isAuthenticated ? 1 : console.log("Please log in!");
console.log(cartItemCount);
// output is
// Please log in!
// undefined

// we're getting the please login when it's false, and also getting undefined because it's the default return value of the function
// we are no longer getting the appropriate result of 0 and this defeats the purpose of the ternary operator, when we wants to perform an action instead of providing the value for our ternary to resolve to

// ternaries are helpful in some situations but they shouldn't be used all the time for every condition we have to write

const age = 20;

// let greeting;

// if (age < 10) {
//   greeting = "Hey there";
// } else {
//   greeting = "That's an interesting age!";
// }
// console.log(greeting);

// const greeting = age < 10 ? "Hey there" : "That's an interesting age!";
console.log(greeting);

//
if (age < 10) {
  greeting = "Hey there";
} else if (age > 18) {
  greeting = "Greetings";
} else if (age > 10) {
  greeting = "What's up?";
} else {
  greeting = "That's an interesting age!";
}
console.log(greeting);

// what if we wanna write this in ternary
const greeting =
  age < 10
    ? "Hey there"
    : age > 18
    ? "Greetings"
    : age > 10
    ? "What's up?"
    : "That's an interesting age!";
console.log(greeting);

// this is not at all readable. though we can chain multiple ternaries together, we can avoid doing so..
// so for more number of conditionals use if statements

// short circuiting

// const response = "Reed";

// let username;

// if (response) {
//   username = response;
// } else {
//   username = "guest";
// }

// const username = response ? response : "guest";
// console.log(username);

// we need to write response twice even in the ternary
// we can use ||

const result = "Reed" || "";
console.log(result);

// const response = "";
// const username = response || "guest";

console.log(username);
// this way of cutting down our ternary with ||(or) operator is called short-circuiting
// const response = "Reed";
const isEmailVerified = false;

// const username = (response && isEmailVerified) || "guest";

console.log(username);

// const username = (isEmailVerified && response) || "guest";

console.log(username);

// operator precedence -> && has higher order precedence over ||
// so first && executes

const username = isEmailVerified && (response || "guest");
// with parenthesis, || comes first

/* Challenge 1: Let's say you're building Reddit. Only users that are either moderators or have reached a certain karma threshold are allowed to upvote. */

const karma = 130;
const isModerator = true;

// first use a ternary to set hasEnoughKarma to true if karma is above 100. If not, set it to false
let hasEnoughKarma = karma > 100 ? true : false;

//  set the value of canUpvote with short-circuiting (using hasEnoughKarma and isModerator)
let canUpvote = isModerator || hasEnoughKarma;

console.log("canUpvote:", canUpvote);

/* Challenge 2: Let's say that only moderators who have enough karma are allowed to delete posts.  How would you set the canDelete variable */

// set canDelete to true if both hasEnoughKarma and isModerator is true
let canDelete = hasEnoughKarma && isModerator;

console.log("canDelete:", canDelete);

// Challenge 3: what is the value of user? What if you switch the hasValidEmail variable to false? What if the response is empty?

const response = "";
const hasValidEmail = true;
const user = hasValidEmail && (response || "guest");
console.log("user: ", user);
