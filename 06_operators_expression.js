// Operators and Expression in JS

let a = 10;
let b = 4;

// Arithemetic Operators

console.log("Value of a : " + a);
console.log("Value of b : " + b);

console.log("Value of a+b : " + (a + b));
console.log("Value of a-b : " + (a - b));
console.log("Value of a*b : " + (a * b));
console.log("Value of a/b : " + (a / b));

console.log("Value of a**b : " + (a ** b));  // exponential operator
console.log("Value of a%b : " + (a % b));

console.log("Value of a++ : " + (a++));
console.log("Value of a : " + a);

console.log("Value of a-- : " + (a--));
console.log("Value of a : " + a);

console.log("Value of ++a : " + (++a));
console.log("Value of a : " + a);

console.log("Value of --a : " + (--a));
console.log("Value of a : " + a);

// Output : 10 4 14 6 40 2 10000 2 10 11 11 10 11 11 10 10


// Assignment Operators

let n = 2;

n += 3;  //n=n+3
console.log(n);

// Similarly for -, *, /


// Comparison Operators (==, ===, !=, !==)

let comp1 = 4;
let comp2 = "4";

console.log("Is comp1==comp2 ? : " + (comp1 == comp2));
console.log("Is comp1!=comp2 ? : " + (comp1 != comp2));

console.log("Is comp1===comp2 ? : " + (comp1 === comp2)); // it even checks the datatype 
console.log("Is comp1!==comp2 ? : " + (comp1 !== comp2));

console.log("Is 3>4 ? : " + (3 > 4));

// Logical Operators (&&, ||, !)

console.log("Is 3>4 && 3=3 ? : " + (3 > 4 && 3 == 3));
console.log("Is 3<4 &&  3=3 ? : " + (3 < 4 && 3 == 3));
console.log("!false : " + !false);