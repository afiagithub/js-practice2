// Operator
// Arithmetic: +, -, *, /, %, **, ++, --
// Assignment: =, +=, -=, *=, /=, %=, **=

// let num1 = 10, num2 = 20;
let num1 = prompt("Enter a number:");
let num2 = prompt("Enter a number:");

num1 = parseInt(num1, 10)
num2 = parseInt(num2, 10)

let sum, sub, mul, div, rem, expo, inc, dec;

document.write("Sum: " + (num1+num2) + "<br/>")
document.write("Sub: " + (num1-num2) + "<br/>")
document.write("Mul: " + (num1*num2) + "<br/>")
document.write("Div: " + (num1/num2) + "<br/>")
document.write("Remainder: " + (num1%num2) + "<br/>")
document.write("Exponent: " + (num2**num1) + "<br/>")