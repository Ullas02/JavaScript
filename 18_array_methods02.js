// array methods (continued)

let arr = [11, 22, 33, 44];
console.log("Original array : ", arr, " and its length = ", arr.length);

delete arr[1]; // delete is used to remove any element in an array with index, note : it does not alter the size of the existing array size, 'delete' is an operator

console.log("After deletion : ", arr, " and its size after deletion = ", arr.length);

let arr2 = [21, 54, 78];
let concatArr = arr.concat(arr2);  // returns new array, does not change the original array
console.log("Concatenated : ", concatArr);

let compare1 = (a, b) => {
    return a - b;
}

let compare2 = (a, b) => {
    return b - a;
}

let arr3 = [45, 3, 89, 15];
arr3.sort();  // Output: ["15", "3", "45", "89"]
console.log("After sorting : ", arr3); // sorts alphabetically (number-wise)
/*
How it works:

JavaScript converts each number to a string and then sorts those strings lexicographically (i.e., dictionary order).
For your array [45, 3, 89, 15], the sorted result as strings is ["15", "3", "45", "89"]. So the numbers appear in that order when sorted as strings.
*/

console.log("Ascending order : ", arr3.sort(compare1));  // Output: [3, 15, 45, 89]
/*
compare1 is a function that sorts numbers in ascending order:

If a - b is negative, a is sorted before b.
If a - b is positive, b is sorted before a.
*/


console.log("Descending order : ", arr3.sort(compare2));    // Output: [89, 45, 15, 3]
/*
compare2 is a function that sorts numbers in descending order:

If b - a is negative, b is sorted before a.
If b - a is positive, a is sorted before b.
*/

let rev = arr3.reverse();
console.log("Reversed : ", rev);

// splice 

let num2 = [12, 43, 54, 21];
num2.splice(1, 2, 11, 22, 33);
console.log("After splicing : ", num2);
// Parameters for splice: start index, number of elements to remove, elements to add
// In this case, start at index 1, remove 2 elements, and add 11, 22, 33 and returns the deleted array

// slice , note : it does not modify the original array

let num3 = [43, 87, 26, 73, 98, 36];
let tempArr1 = num3.slice(2);
let tempArr2 = num3.slice(1, 3);
console.log("slice(2) : ", tempArr1);   // 26, 73, 98, 36
console.log("slice(1,3) : ", tempArr2);   // 87, 26

// Summary
/*

toString()
pop()
push()
shift()
unshift()
delete
concat()
sort()
reverse()
splice()
slice()

*/
