// const users = [
//   {
//     firstName: "John",
//     lastName: "Doe",
//   },
//   {
//     firstName: "Jane",
//     lastName: "Smith",
//   },
//   {
//     firstName: "Micheal",
//     lastName: "Jackson",
//   },
// ];
















// console.log(users);
// const fullName = users.map(function (user) {
//   return `${user.firstName} ${user.lastName}`;
// });

// console.log(fullName);

// fullName.forEach(function (value){
//   console.log(value);
// })






// const products = [
//   {
//     name: "iphone",
//     price: 1000,
//   },
//   {
//     name: "laptop",
//     price: 2000,
//   },
//   {
//     name: "USB-adapter",
//     price: 300,
//   }
// ]







// const salesProducts = products.map(function(product){
//   return {
//     name : product.name,
//     price : product.price / 2
//   }
// })

// console.log(salesProducts);

// salesProducts.forEach(function(product){
//   console.log(product.name,product.price);
// })




const people = [
  { name: 'Alice', birthYear: 1990 },
  { name: 'Bob', birthYear: 1985 },
  { name: 'Charlie', birthYear: 2000 }
];


const currentYear = 2024

const ages = people.map(function (person) {
  return currentYear - person.birthYear;
});

console.log(ages);







// numbers.forEach(function (value,index,array){
//   console.log(value);
//  console.log(array);
// })

// const product = [
//     {
//         name: 'iphone',
//         price: 1000
//     },
//     {
//         name: 'laptop',
//         price: 2000
//     },
//     {
//         name: 'USB-adapter',
//         price: 300
//     },
// ]
// // original array
// console.log(product);

// const newProducts = product.map((value)=>{
//     return {
//         name: value.name,
//         price: value.price / 2
//     }
// })

// // New array
// console.log(newProducts);

// newProducts.forEach((product)=>{
//     console.log(product.name,product.price);

// })

// // const numbers = [1, 2, 3, 4, 5];
// // const doubled = numbers.map(function(number) {
// //   return number * 2;
// // });

// // console.log(doubled); // [2, 4, 6, 8, 10]

// // const number = [1, 2, 3, 4, 5];
// // const double = numbers.map(number => number * 2);

// // console.log(double); // [2, 4, 6, 8, 10]

// // const users = [
// //     { firstName: 'John', lastName: 'Doe' },
// //     { firstName: 'Jane', lastName: 'Smith' },
// //     { firstName: 'Mike', lastName: 'Johnson' }
// //   ];

// //   const fullNames = users.map(user => `${user.firstName} ${user.lastName}`);

// //   console.log(fullNames); // ["John Doe", "Jane Smith", "Mike Johnson"]

// //   const myArr = [1, 2, 3, 4, 5];
// // const detailedInfo = myArr.map((number, index, array) => {
// //   return `Index: ${index}, Value: ${number}, Original Array: [${array}]`;
// // });

// // console.log(detailedInfo);

// const products = [
//     { name: 'Laptop', price: 1000 },
//     { name: 'Phone', price: 500 },
//     { name: 'Tablet', price: 300 }
//   ];

//   const discountedProducts = products.map(product => {
//     return {
//       name: product.name,
//       price: product.price * 0.9
//     };
//   });

//   console.log(discountedProducts);

// const user = [
//   {
//     name: "John",
//     age: 30,
//   },
//   {
//     name: "Anna",
//     age: 40,
//   },
//   {
//     name: "Isac",
//     age: 20,
//   },
// ];

// const fullInfo = user.map((info) =>{
//   return `${info.name} is ${info.age} years old`
// })

// console.log(fullInfo);

// fullInfo.forEach((info) =>{
//     console.log(info);
// })
