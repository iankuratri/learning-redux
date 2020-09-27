// Updating objects

const person = {
  name: "Bob",
  address: {
    city: "California",
    country: "USA",
  },
};

const updated = { ...person, address: { ...person.address, zip: 10293 } };
const isSame = person === updated;

console.log(person);
console.log(updated);
console.log(isSame);

// Updating arrays

const numbers = [1, 2, 4, 5];

// adding an element after 2
const index = numbers.indexOf(4);
const added = [...numbers.slice(0, index), 3, ...numbers.slice(index)];
console.log(added);

// removing an element
const removed = numbers.filter((n) => n !== 2);
console.log(removed);

// updating an element
const updated2 = numbers.map((n) => (n === 2 ? 20 : n));
console.log(updated2);
