// Given an array of user objects, write JavaScript code to find a user by their email.

// Example input:

// const users = [
//   { id: 1, name: "Alice", email: "alice@example.com" },
//   { id: 2, name: "Bob", email: "bob@example.com" },
//   { id: 3, name: "Charlie", email: "charlie@example.com" }
// ];


// Find the user object where email matches "bob@example.com".

const users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
  { id: 3, name: "Charlie", email: "charlie@example.com" }
];



const findByEmail = users.find((obj)=> obj.email === "bob@example.com");

console.log(findByEmail);


