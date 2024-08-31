// array methods

let num = [12, 43, 54, 65];
let convertedNum = num.toString();  //converts number to a string 
console.log(convertedNum + " type is " + typeof (convertedNum));

let c = num.join("_");
console.log(c + " type is " + typeof (c)); // adds '_' to the existing array

let r = num.pop(); // deletes the last element and returns it
console.log("Popped element = " + r);

let p = num.push(104);
console.log(num);

let s = num.shift(); // removes first element and returns it 
console.log(s, num);

let us = num.unshift(74); // adds first element and also returns new array length
console.log(us, num);

