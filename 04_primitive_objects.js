// Primitive data types and Objects (Non-Primitive data types)

// Acronymn : N, N, B, B, S, S, U => (null, number, boolean, bigint, string, symbol, undefined)

let a = null
let b = 12
let c = true
let d = BigInt("852")
let e = "lion"
let f = Symbol("hello")
let g = undefined // not necessary => you leave as let g, it will work

console.log("a = " + a + " and its type is : " + typeof (a))
console.log("b = " + b + " and its type is : " + typeof (b))
console.log("c = " + c + " and its type is : " + typeof (c))
console.log("d = " + d + " and its type is : " + typeof (d))
console.log("e = " + e + " and its type is : " + typeof (e))
console.log("f = Symbol() and its type is : " + typeof (f))
console.log("g = " + g + " and its type is : " + typeof (g))


// Objects (used for key value pairs, similar to dictionary in python)

const item = {
    "password": false,
    "age": 45,
    "address": chennai
}

console.log("Contents of item = " + item);
console.log("Age = " + item["age"])