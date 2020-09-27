const { compose, pipe } = require("lodash/fp");

let input = "  JavaScript  ";
let output = `<div>${input.trim().toLowerCase()}</div>`;
console.log(output);

const trim = (str) => str.trim();
const toLowerCase = (str) => str.toLowerCase();
const wrapInDiv = (str) => `<div>${str}</div>`;

const output2 = wrapInDiv(toLowerCase(trim(input)));
console.log(output2);

// increasing readability, removing multiple braces using lodash - compose, pipe

// composition of all functions
const transform = compose(wrapInDiv, toLowerCase, trim);
const output3 = transform(input);
console.log(output3);

// piping functions
const transform2 = pipe(trim, toLowerCase, wrapInDiv);
const output4 = transform2(input);
console.log(output4);
