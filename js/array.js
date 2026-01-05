let namList = ["Amit", "Kora", "Lily", "Joe", "Poppy"]
namList.push("Nina")
namList.pop();
// removes element from the start
namList.shift();
// adds element at the start
namList.unshift("Momo");

// Can add and remove elements with splice
namList.splice(1, 1, "Bea", "Violet")

// Slice an array
let slicedList = namList.slice(2)
console.log(slicedList);

let numList = [1, 2, 3, 4, 5]
namList = namList.concat(numList)
console.log(namList);
console.log(namList.sort());
console.log(namList.reverse());

// Get highest score
function highestScore(scores) {
    let highScore = -999;
    for (let i = 0; i < scores.length; i++) {
        if (highScore < scores[i])
            highScore = scores[i]
    }
    return highScore
}

let result = highestScore(numList)
console.log(result);

// budget tracker (phase 5)
let numOfExp = parseInt(prompt("Enter number of expenses: "))
if(isNaN(numOfExp)) {
    console.log("Invalid input");
}

let expArr = [], expSum=0;

for (let i = 0; i < numOfExp; i++) {
    let expense = parseFloat(prompt("Enter Expense: "))
    if(isNaN(expense)) {
        expense = 0;
    }
    expArr.push(expense);
}

console.log(expArr);

for(let j=0; j<numOfExp; j++){
    expSum+=expArr[j]
}

console.log(expSum);