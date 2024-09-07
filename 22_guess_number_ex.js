// Excercise: Guess the number 

const maxScore = 100;
const maxChances = 10;

let randNum = Math.floor(Math.random() * 100);
console.log("Random number (for debugging):", randNum);

let guessNum;
let chanceNum = 0;

do {
    let input = prompt("Guess the number (between 0 and 99):");
    guessNum = Number.parseInt(input, 10);

    if (isNaN(guessNum)) {
        console.log("Please enter a valid number.");
        continue;
    }

    chanceNum++;

    if (guessNum < randNum) {
        console.log("Guess a little greater number.");
    } else if (guessNum > randNum) {
        console.log("Guess a little lower number.");
    } else {
        console.log("You guessed the correct number!");
        break;
    }

    if (chanceNum >= maxChances) {
        console.log(`You've reached the maximum number of attempts. The correct number was ${randNum}.`);
        break;
    }

} while (true);

let score = chanceNum <= maxChances ? Math.max(maxScore - (chanceNum - 1) * 10, 0) : 0;

console.log(`It took you ${chanceNum} attempts.`);
console.log(`Your score is ${score} points.`);
