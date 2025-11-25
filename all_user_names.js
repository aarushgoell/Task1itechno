// const users = [
//  { id: 1, name: "Amit", active: true },
//   { id: 2, name: "Rahul", active: false },
//   { id: 3, name: "Sneha", active: true }
// ]; 

// Input: array of user objects
// Output: array of names
// Concepts: map


const users = [
 { id: 1, name: "Amit", active: true },
  { id: 2, name: "Rahul", active: false },
  { id: 3, name: "Sneha", active: true }
]; 

const allnames = users.map((obj)=>obj.name);

console.log(allnames);