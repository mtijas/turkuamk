let distances = [ 165, 626, 148, 12, 81, 181 ];

// Part B

console.log(distances);

distances.push(8);
distances.push(533);
distances.push(76);

console.log(distances);

// Part C

// Evaluator function for findIndex
const is148 = (element) => element == 148;

let index = distances.findIndex(is148);
distances.splice(index, 1); // Splicing only one element at index

console.log(distances);
