let num1 = 11;
let num2 = 4;

const addNumbers = new Promise((resolve, reject) => {
  let sum = num1 + num2;
  if (sum == 15) {
    resolve(`The sum of ${num1} and ${num2} = ${sum}.`);
  } else {
    reject("Unsuccessful operation");
  }
});

addNumbers.then(
  (message) => {
    console.log(message);
  },
  (error) => {
    console.log(error);
  }
);
