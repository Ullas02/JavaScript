// Practise set on loops and functions

// Q1. Write a pgm to print the marks of a student in an object using for loop
// obj={alex:97, joseph: 84, stephen: 91}

let obj = {
    alex: 97,
    joseph: 84,
    stephen: 91
}

for (let i = 0; i < Object.keys(obj).length; i++) {
    console.log("Marks of " + Object.keys(obj)[i] + " is " + obj[Object.keys(obj)[i]]);
}

// Q2. Implement Q1 using for in loop

for (let i in obj) {
    console.log("Marks of " + i + " is " + obj[i]);
}

// Q3. Write a pgm to print "try again" until the user enters the correct number

let guessNumber;
let correctNumber = 31;

while (guessNumber != correctNumber) {
    guessNumber = prompt("Enter a number : ");
}

alert("You enetered the correct number, that is " + correctNumber);

// Q4. Write a pgm to find mean of 5 numbers using functions

const mean = (n1, n2, n3, n4, n5) => {
    return ((n1 + n2 + n3 + n4 + n5) / 5);
}

let a = 2, b = 3, c = 4, d = 5, e = 7;

let res = mean(a, b, c, d, e);
console.log("Mean = " + res);