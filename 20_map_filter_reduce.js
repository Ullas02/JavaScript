// map, filter and reduce


let arr1 = [21, 43, 52, 6];
let mapFunc = arr1.map((value, index, arr) => {   // it creates an new array and stores the result in it 
    return (value + index);
})
console.log(mapFunc);


let arr2 = [31, 65, 2, 56];
let filterFunc = arr2.filter((num) => {  // it checks the condition and stores the result in an new array
    return (num < 60);
})
console.log(filterFunc);


let arr3 = [2, 5, 3, 7, 9];
let reduceFunc = arr3.reduce((value1, value2) => {  // it takes the parameters and does the operation accordingly
    return (value1 + value2);
})
console.log(reduceFunc);