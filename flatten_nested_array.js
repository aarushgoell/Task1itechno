// ✅ 12. Flatten a nested array

// Input: [1, [2, [3, [4]]]]
// Output: [1, 2, 3, 4]
// Concepts: recursion OR flat(Infinity)


function flattenArray(arr) {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item));
    } else {
      result.push(item);
    }
  }

  return result;
}

const nested = [1, [2, [3, [4]]]];
console.log(flattenArray(nested)); 
