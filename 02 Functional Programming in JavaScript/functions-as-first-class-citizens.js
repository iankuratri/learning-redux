/**
 * In JS functions are first class citizens, which means
 * you can treat them like any other varibales.
 *
 * - Assign to a variable
 * - Pass as an arguments
 * - Return from other functions
 */

function sayHello() {
  return function () {
    return "Hello World!";
  };
}

let fn = sayHello();
let message = fn();
console.log(message);
