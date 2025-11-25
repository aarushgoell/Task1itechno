// 2. Filter users who are active
// const users = [
//   { id: 1, name: "Amit", active: true },
//   { id: 2, name: "Rahul", active: false },
//   { id: 3, name: "Sneha", active: true }
// ];


// Output: only users with active: true
// Concepts: filter, array of objects

const users = [
  { id: 1, name: "Amit", active: true },
  { id: 2, name: "Rahul", active: false },
  { id: 3, name: "Sneha", active: true }
];

const activeUsers = users.filter((obj)=>obj.active == 1);

console.log(activeUsers);