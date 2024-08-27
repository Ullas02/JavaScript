// Q1. Use logical operator to find whether the age of a person lies between 10 and 20

let age = prompt("Enter the age : ");
age = Number.parseInt(age);
alert("Your age is " + age);

if (age >= 10 && age <= 20) {
    alert("Your age lies between 10 and 20");
}
else {
    alert("Your does not age lies between 10 and 20");
}

// Q2. Demonstrate the use of switch case statements in JS

let num = prompt("Enter a number : ");
num = Number.parseInt(num);

switch (num) {
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

// Q3. Write a JS pgm to find whether a number is divisible by 2 and 3

let num2 = prompt("Enter a number : ");
num2 = Number.parseInt(num2);

if (num2 % 2 == 0 && num2 % 3 == 0) {
    alert(num2 + " is divisible by 2 and 3");
}
else {
    alert(num2 + " is not divisible by 2 and 3");
}

// Q4. Print you can drive or you cannot drive based on age being greater than 18 using ternary operator

let age2 = prompt("Enter the age : ");
age2 = Number.parseInt(age2);
alert("Your age is " + age2);
alert("You can " + (age2 < 18 ? "not drive" : "drive"));
