// ✅ 8. Convert array of objects into an object grouped by category
// const items = [
//   { name: "Apple", category: "fruit" },
//   { name: "Carrot", category: "vegetable" },
//   { name: "Mango", category: "fruit" }
// ];

// Output:

// {
//   fruit: ["Apple", "Mango"],
//   vegetable: ["Carrot"]
// }

const items = [
  { name: "Apple", category: "fruit" },
  { name: "Carrot", category: "vegetable" },
  { name: "Mango", category: "fruit" }
];


const newItems = items.reduce((acc,ele)=>{
    if(ele.category in acc){
        acc[ele.category].push(ele.name);
    }
    else{
        acc[ele.category] = [];
        acc[ele.category].push(ele.name);
    }
    return acc;
},{})

console.log(newItems);




