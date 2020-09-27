// mutable js code

// let book = { title: "Harry Potter" };

// function publish(book) {
//   book.isPublished = true;
// }

// publish(book);

// console.log(book);

// making it immutable using immer js
const { produce } = require("immer");

let book = { title: "Harry Potter" };

function publish(book) {
  return produce(book, (draftBook) => {
    draftBook.isPublished = true;
  });
}

const updated = publish(book);

console.log(book);
console.log(updated);
