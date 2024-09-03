// accessing array elements with the help of loop

let arr = [2, 4, 5, 7, 9];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// using for-each loop

arr.forEach((element) => {
    console.log(element * element);
})

// Array.from

let str = "school";
let tempStr = Array.from(str);
console.log(tempStr);

// for-of loop (used in arrays and strings)

let num3 = [32, 43, 54, 22];
for (let i of num3) {
    console.log(i);
}

// for-in loop (used in accessing objects)

console.log("\n")
let num4 = [32, 43, 54, 22];
for (let i of num4) {
    console.log(i);
}