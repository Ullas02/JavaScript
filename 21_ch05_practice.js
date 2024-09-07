// Q1. Create an array of numbers and take input from the users to add numbers to this array

let arr1 = [21, 32, 54, 12];
let num = Number.parseInt(prompt("Enter the number to push into the array : "));
arr1.push(num);
console.log("New array is : ", arr1);

// Q2. Keep adding the numbers to the array in Q1 until 0 is added to the array

let arr2 = [21, 32, 54, 12];
while (true) {
    let num2 = prompt("Enter a number : ");
    if (num2 == 0) {
        let temp = Number(num2);
        arr2.push(temp);
        break;
    }
    num2 = Number.parseInt(num2);
    arr2.push(num2);
}
console.log("New array is : ", arr2);

// Q3. Filter for numbers divisible by 10 from a given array

let arr3 = [12, 43, 20, 35, 400];
let filterFunc = arr3.filter((value) => {
    return (value % 10 == 0);
})
console.log("Numbers in the array are : ", arr3);
console.log("Numbers that are divisible by 10 in the array are : ", filterFunc);

// Q4. Create an array of square of given numbers

let arr4 = [2, 4, 1, 6, 8];
let sqFunc = arr4.map((value) => {
    return (value * value);
})
console.log("Given array is : ", arr4);
console.log("Square of the array is : ", sqFunc);

// Q5. Factorial of a number using reduce function

let arr5 = [1, 2, 3];
let factFunc = arr5.reduce((x1, x2) => {
    return (x1 * x2);
})
console.log("Given array : ", arr5);
console.log("Factorial = ", factFunc);