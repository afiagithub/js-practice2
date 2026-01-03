// Operator
// Arithmetic: +, -, *, /, %, **, ++, --
// Assignment: =, +=, -=, *=, /=, %=, **=

let num1 = 10, num2 = 20;
// let num1 = prompt("Enter a number:");
// let num2 = prompt("Enter a number:");

// num1 = parseInt(num1, 10)
// num2 = parseInt(num2, 10)

let sum, sub, mul, div, rem, expo, inc, dec;

document.write("Sum: " + (num1 + num2) + "<br/>")
document.write("Sub: " + (num1 - num2) + "<br/>")
document.write("Mul: " + (num1 * num2) + "<br/>")
document.write("Div: " + (num1 / num2) + "<br/>")
document.write("Remainder: " + (num1 % num2) + "<br/>")
document.write("Exponent: " + (num2 ** num1) + "<br/>")

// Area calculator

// Triangle
let base = 5, height = 8;
let area = 0.5 * base * height;

console.log(area);

// Temperature calculator
let farhen = 125;
let cel = (farhen - 32) * (5 / 9)
console.log(cel.toFixed(2));

// Budget tracker app (Phase 3)
let income1 = 10000, budget1 = 5600;
if (budget1 > income) {
    console.log("Warning");
}
else {
    let balance, savings, tax;
    tax = income1 * (10 / 100);
    balance = income1 - (tax + budget1)
    savings = balance * (20 / 100)
    console.log(`Balace is ${balance}, Savings is ${savings}`);

    if (savings > 1000)
        console.log("Excellent");
    else if (savings >= 500 && savings <= 999)
        console.log("Good");
    else
        console.log("Needs Improvement");
}

