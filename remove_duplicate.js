// ✅ 7. Remove duplicate values

// Input: [1, 2, 2, 3, 3, 4]
// Output: [1, 2, 3, 4]
// Concepts: filter + indexOf, OR Set

const arr = [1, 2, 2, 3, 3, 4];

const newArr = [];

const mpp = arr.reduce((acc,el)=>{
    if(el in acc){
        acc[el] += 1;
    }
    else{
        acc[el] = 1;
    }
    return acc;
},{});

for(let num in mpp){
    newArr.push(parseInt(num));
}

console.log(newArr);



