// Part A

for (i = 0; i <= 200; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

// Part B

let deposits = [12.11, 34.13, 54.34, 23.11, 199.54];
let index = 0;
let sum = 0;

while (sum < 100 && index < deposits.length) {
    sum += deposits[index];
    console.log("deposit: " + deposits[index] + ", sum: " + sum);
    index++;
}
