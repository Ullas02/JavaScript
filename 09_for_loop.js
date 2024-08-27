// For loops

// JS pgm to find sum if n numbers

 let n = 5;
 let sum = 0;
 for (let i = 1; i <= n; i++) {
     sum = sum + i;
 }

 console.log("Sum of " + n + " is : " + sum);

// for-in loop 

let obj={
    joseph : 88,
    alex : 96,
    rose : 91
}

for(let a in obj){
    console.log("Marks of "+a+" are "+obj[a]);
}

// for-of loop

for(let c of "hello"){  // here "hello" should be iterable 
    console.log(c);
}
