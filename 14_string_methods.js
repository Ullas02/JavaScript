// string methods in JS

let name2 = "Alex"

console.log("Length of " + name2 + " is " + name2.length);  // length 
console.log(name2 + " in upper case is " + name2.toUpperCase()); // upper case
console.log(name2 + " in lower case is " + name2.toLowerCase()); // lower case

console.log("Slicing (1,2) : " + name2.slice(1, 3)); // string slicing 
console.log("Replace : " + name2.replace("Al", "Fed")); // replace
console.log("Concatenation : " + name2.concat(", bye!")); //concatenate
console.log("Alternate way of Concatenation : " + (name2 + ", bye")); //concatenate

let greet = "       Good";
console.log("Before trim length = " + greet.length + " -> " + greet);
let trimmed = greet.trim(); // trim funtion returns a string which removes all whitespaces (it only removes spaces at either beginning or at end, but not in between, trimEnd and trimStart)
console.log("After trim length = " + trimmed.length + " -> " + trimmed);
