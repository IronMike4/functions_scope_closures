/* This is the digitalHideSeek.js file that defines a function to hide a location and returns another function
to seek the hidden spot demonstrating closure. Finally it invokes the hide function with a specified location
and logs the result to reveal the hiding place.
Here are a few sources that helped me achieve this:
 - HyerionDev Functions, Scope and Closures pdf and examples
 - https://www.youtube.com/watch?v=qikxEIxsXco
For more information about this please visit https://github.com/IronMike4/functions_scope_closures.git */

// Defining a function hide that takes in a string as an argument, representing a hiding location.
function hide(hidingLocation) {
  // Storing the location in a local variable hideLocation
  let hideLocation = hidingLocation;

  // Defining a function seek that returns the hidden location when called.
  function seek() {
    return hideLocation;
  }

  // Returning the seek function thereby creating a closure around hideLocation.
  return seek;
}

// Invoking hide with a string argument describing the hiding spot and storing the returned function in a variable named startGame.
let startGame = hide("Under the bed");

// Logging the result of calling startGame which prints hiding location.
console.log(startGame());

/* When attempting to log hideLocation directly from outside of the hide and seek functions a ReferenceError will occur. 
This is because hideLocation is defined as a local variable within the scope of the hide function. Local variables are only 
accessible within the function where they are declared. Since hideLocation is not declared in the global scope or any outer
scope reachable from the logging statement a ReferenceError is thrown indicating that hideLocation is not defined in that
context. This highlights the concept of scope in JavaScript where variables have restricted visibility based on their declaration context. */
