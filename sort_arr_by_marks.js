// Problem 5 — Sort students by marks (descending)
// The Task

// You are given an array of student objects, and each object has properties like:

// name → student name

// marks → marks obtained

// You need to sort the array so that the student with the highest marks comes first.

// const students = [
//   { name: "Amit", marks: 85 },
//   { name: "Rahul", marks: 92 },
//   { name: "Sneha", marks: 78 }
// ];

const students = [
  { name: "Amit", marks: 85 },
  { name: "Rahul", marks: 92 },
  { name: "Sneha", marks: 78 }
];


const descStudents = students.sort((a,b)=>b.marks - a.marks);

console.log(descStudents);
