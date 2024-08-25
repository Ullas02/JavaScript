// Conditional Statements in JS

let a = prompt("Enter a number : ");
a = Number.parseInt(a);  // converting string to number
console.log("You entered : " + a + " and its type is : " + typeof (a));

// if-else-if statements 

if (a > 18 && a <= 120) {
    alert("You are eligible to apply for Voter ID");
}
else {
    if (a > 0 && a <= 18) {
        alert("You are not eligible to apply for Voter ID, as it is not meeting age requirement criteria");
    }
    else if (a >= 120) {
        alert("Age cannot be greater than 120");
    }
    else {
        alert("Age cannot be 0 or negative");
    }
}

// switch statements 

switch (a) {
    case 1:
        alert("You entered 1");
        break;
    case 2:
        alert("You entered 2");
        break;
    case 3:
        alert("You entered 3");
        break;
    default:
        alert("You entered a number which is greater than 3");
}

// Ternary operator 

console.log("You can ", (a < 18 ? "not drive" : "drive"));
