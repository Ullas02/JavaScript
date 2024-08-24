// 1. Create a variable of type string and try to add a number to it. 

let str = "this is string"
let num = 45
console.log(str + num)

// 2. Use typeof operator to find the datatype of the string in last question

console.log(typeof (str + num))

// 3. Create a const object in JS, can you change it to hold a number later ? (No)

const obj1 = {
    "car": "Honda",
    "bike": "Kawasaki",
    "total_vehicles": 2
}
console.log(obj1.bike)
// obj1 = 75 // this will throw an error as you cannot change the data under const 

// 4. Try to add a new key to the const object in question 3, were you able to do it ? (Yes)

obj1["truck"] = "Volvo"
console.log(obj1)
// You can add a new item to a const object, but you cannot alter the existing data in it.

// 5. Write a JS program to create a word-meaning dictionary of 5 words.

let word_meaning = {
    "Table": "Flat surface for items",
    "Phone": "Device for communication",
    "Book": "Collection of pages",
    "Chair": "Seat with a back",
    "Window": "Opening for light"
}
console.log("Meaning of Book : " + word_meaning.Book)