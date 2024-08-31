// Introduction to arrays

let data = [21, 34, "hello", false];  // it can store different datatypes
console.log("The data is : " + data);

// Accessing elements in an array

console.log("Element at index 0 : " + data[0]);
console.log("Element at index 1 : " + data[1]);
console.log("Element at index 2 : " + data[2]);
console.log("Element at index 3 : " + data[3]);
console.log("Element at index 4 : " + data[4]);  // this will give output as undefined as index 4 does not exist

// length of an array

console.log("Length = " + data.length);

// arrays are mutable

data[4] = 75;  // adding new element to an array
data[1] = "morning";  // changing an element in an array

console.log("After changing");
console.log("Array is : " + data + " and its new length is " + data.length);

// Accessing elements in an array using for-loop

for (let index = 0; index < data.length; index++) {
    console.log("Element at " + index + " index is : " + data[index]);
}