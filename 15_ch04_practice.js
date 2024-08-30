// Q1. Demonstrate 'includes' function in strings

let str1 = "hello, how you are doing?";
let word = "doing";

console.log(`The word ${word} ${str1.includes(word) ? "is " : "is not "}` + "in the sentence");

// Q2. Pgm to convert string to lowercase

let str2 = "ORanGE";
let lowstr2 = str2.toLowerCase();
console.log(`${str2} in lower case is ${lowstr2}`);

// Q3. Extract the amount from the sting : Please return back Rs 400

let str3 = "Please return back Rs 400"
let amt = Number.parseInt(str3.slice("Please return back Rs".length + 1));
console.log("Amount is " + amt + " and its type is : " + typeof (amt));
