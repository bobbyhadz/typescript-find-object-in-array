export {};

// EXAMPLE 1 - Find the first object in an array that matches a condition in TS

const arr = [
  { id: 1, country: 'Mexico' },
  { id: 2, country: 'Germany' },
  { id: 3, country: 'Mexico' },
];

const found = arr.find((obj) => {
  return obj.id === 1;
});

// 👇️ {id: 1, country: 'Mexico'}
console.log(found);

// ---------------------------------------------------

// // EXAMPLE 2 - Find all Objects in an Array that match a condition in TS

// const arr = [
//   { id: 1, country: 'Mexico' },
//   { id: 2, country: 'Germany' },
//   { id: 3, country: 'Mexico' },
// ];

// const filtered = arr.filter((obj) => {
//   return obj.country === 'Mexico';
// });

// // 👇️ [{id: 1, country: 'Mexico'}, {id: 3, country: 'Mexico'}]
// console.log(filtered);
