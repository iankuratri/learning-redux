const { pipe } = require("lodash/fp");

/**
 * Currying is a transformation of functions that translates
 * a function from callable as f(a, b, c) into callable as f(a)(b)(c)
 *
 * It allows us to take a fn that has N arguments and
 * convert it to a fn that have only 1 agrument
 * N => 1
 */

function add(a) {
  return function (b) {
    return a + b;
  };
}

const sum = add(3)(5);
console.log(sum);

// using arrow fn syntax
const add2 = (a) => (b) => a + b;
const sum2 = add2(8)(5);
console.log(sum2);

let input = "  JavaScript  ";
const trim = (str) => str.trim();
const toLowerCase = (str) => str.toLowerCase();
// making html elements using curring
const wrap = (type) => (str) => `<${type}>${str}</${type}>`;

// piping functions
const transform = pipe(trim, toLowerCase, wrap("div"));
const output = transform(input);
console.log(output);
