//DAY 2
//Arithmatic operation and comparision operators
function addTwoNumbers(num1, num2) {
    let result = num1 + num2;
    console.log("Addition Result:", result);
}

// Example 
addTwoNumbers(5, 10);  // Output: Addition Result: 15

function subtractTwoNumbers(num1, num2) {
    let result = num1 - num2;
    console.log("Subtraction Result:", result);
}

// Example
subtractTwoNumbers(10, 5);  // Output: Subtraction Result: 5

function multiplyTwoNumbers(num1, num2) {
    let result = num1 * num2;
    console.log("Multiplication Result:", result);
}

// Example
multiplyTwoNumbers(5, 10);  // Output: Multiplication Result: 50

function divideTwoNumbers(num1, num2) {
    if (num2 === 0) {
        console.log("Error: Division by zero is not allowed.");
    } else {
        let result = num1 / num2;
        console.log("Division Result:", result);
    }
}

// Example 
divideTwoNumbers(10, 5);  // Output: Division Result: 2
divideTwoNumbers(10, 0);  // Output: Error: Division by zero is not allowed.

function findRemainder(num1, num2) {
    if (num2 === 0) {
        console.log("Error: Division by zero is not allowed.");
    } else {
        let result = num1 % num2;
        console.log("Remainder Result:", result);
    }
}

// Example 
findRemainder(10, 3);  // Output: Remainder Result: 1
findRemainder(10, 0);  // Output: Error: Division by zero is not allowed.

// Arithmetic Operations Script
function performArithmeticOperations(num1, num2) {
    let addition = num1 + num2;
    let subtraction = num1 - num2;
    let multiplication = num1 * num2;
    let division = num1 / num2;
    let remainder = num1 % num2;

    console.log("Addition:", addition);
    console.log("Subtraction:", subtraction);
    console.log("Multiplication:", multiplication);
    console.log("Division:", division);
    console.log("Remainder:", remainder);
}

// Example
performArithmeticOperations(10, 5);
