// mutable js code

// let book = { title: "Harry Potter" };

// function publish(book) {
//   book.isPublished = true;
// }

// publish(book);

// console.log(book);

// making it immutable using immutable js
const { Map } = require("immutable");

let book = Map({ title: "Harry Potter" });

function publish(book) {
  return book.set("isPublished", true);
}

let updated = publish(book);

console.log(book.toJS());
console.log(updated.toJS());
