var globalVar = "I am global!";

function concatString(str) {
  return str + " " + globalVar;
}
console.log(concatString("I am hungry!"));

// globalVar is a global scope because every other scope have access to the var variable globalVar
