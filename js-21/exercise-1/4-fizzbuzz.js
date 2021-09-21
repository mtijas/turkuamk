const fizzbuzz = (start, stop) => {
    for (i = start; i <= stop; i++) {
        if (i % 15 == 0) {
            console.log("FizzBuzz");
            continue;
        }
        if (i % 3 == 0) {
            console.log("Fizz");
            continue;
        }
        if (i % 5 == 0) {
            console.log("Buzz");
            continue;
        }
        console.log(i);
    }
}

fizzbuzz(1, 100);
