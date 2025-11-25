// ✅ 4. Find total price of products
// const products = [
//   { name: "Laptop", price: 50000 },
//   { name: "Mouse", price: 500 },
//   { name: "Keyboard", price: 1500 }
// ];


// Output: 52000
// Concepts: reduce, array of objects

const products = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 500 },
  { name: "Keyboard", price: 1500 }
];

const totalPrice = products.reduce((accumulator,ele)=>{
    accumulator += ele.price;
    return accumulator
},0);


console.log(totalPrice);