// Question:

// Given two arrays in JavaScript, write code to merge them into a single array without any duplicate values.

// Example Input:

// const arr1 = [1, 2, 3];
// const arr2 = [2, 3, 4, 5];


// Expected Output:

// [1, 2, 3, 4, 5]


// The goal is to combine the arrays and ensure each value appears only once.



const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4, 5];
const uniqueArr = [...new Set([...arr1, ...arr2])];

console.log(uniqueArr);
