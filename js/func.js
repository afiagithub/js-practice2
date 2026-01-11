function add(num1, num2) {
    let res = num1 + num2
    return res;
}

let addRes = add(20, -30)
console.log(addRes);

// IIFE (Immediately Invokable Function Expression)
(function disMsg(msg) {
    console.log(msg);
})("Hello")

// Function Expression
const display2 = function displayMsg(msg) {
    console.log(msg);
}

display2('Hello World')

// Budget tracker (phase 6)
// Function to get user input
function getUserInput(promptMsg, isNumber = false) {
    const userInput = prompt(promptMsg)
    return isNumber ? parseFloat(userInput) : userInput
}

function budgetTracker() {
    let numOfExp = parseInt(prompt("Enter number of expenses: "))
    if (isNaN(numOfExp)) {
        console.log("Invalid input");
    }

    let expArr = [], expSum = 0;

    for (let i = 0; i < numOfExp; i++) {
        let expense = getUserInput("Enter Expense: ", true)
        if (isNaN(expense)) {
            expense = 0;
        }
        expSum+=expense;
        expArr.push(expense);
    }
    console.log(expArr, expSum);
}

budgetTracker();