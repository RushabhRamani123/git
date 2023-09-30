// Function to calculate the factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Prompt the user for input
const userInput = prompt("Enter a number to calculate its factorial:");

// Convert the user input to a number
const number = parseInt(userInput);

// Check if the input is a valid number
if (isNaN(number)) {
  console.log("Invalid input. Please enter a valid number.");
} else if (number < 0) {
  console.log("Factorial is not defined for negative numbers.");
} else {
  // Calculate and display the factorial
  const result = factorial(number);
  console.log(`The factorial of ${number} is ${result}`);
}
