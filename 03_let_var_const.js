// Differences between let, var, const

let num1 = 45

// let num1 = 78 // throws an error as we cannot declare 'let' with same variable name in the same block 

console.log("Original num1 = " + num1)

{
    let num1 = 96 // this is allowed as 'let' is a block variable i.e. the same variable name can be changed in different blocks 
    console.log("Inside block num1 = " + num1)
}

console.log("Outside num1 = " + num1)


// But we cannot do the same for 'var', it's like 'int' keyword which we use in C, Java
// Once the variable is intialized with 'var' and if we change that variable, it will be reflected in all the varibles

var num2 = 63
console.log("Original num2 = " + num2)

// var num2 = 1 // is allowed 

{
    num2 = 11
    console.log("Inside block num2 = " + num2)
}

console.log("Outside num2 = " + num2) // here the original value (63) is lost as it was changed to 11 inside the block
