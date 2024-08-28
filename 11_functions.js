// functions in JS

// function can be created in 2 types

// method 1

function sum(x, y, z) {
    return (x + y + z);
}

let a = 2;
let b = 3;
let c = 4;

let res = sum(a, b, c);
console.log("Sum of 2, 3, 4 = " + res);

// method 2

const average = (x, y, z) => {
    return ((x + y + z) / 3)
}

let avg = average(2, 3, 5);
console.log("Average of 2, 3, 5 = " + avg);
