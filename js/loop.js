for(let i=0; i<10; i= i+2){
    document.write(" ", i)
}

let numSum=0;

for(let i=1; i<=10; i++){
    numSum = numSum+i;    
}
document.write("<br>", numSum)

let m = 2, evenSum = 0;
while(m<=100){
    evenSum+=m;
    m+=2;
}
document.write("<br>", evenSum)

// Sum of numbers that are divisible by 3 and 5
let n=1, taskSum=0;
while(n<=100){
    if(n%3==0 && n%5==0){
        taskSum+=numSum;
    }
    n++;
}
document.write("<br>", taskSum)

// do while loop executes once even if condition is false
let p=50;
do{
    console.log(p);
    p++;    
}while(p<=20);

// Fizzbuzz challenge
// for(let p=1; p<=20; p++){
//     if(p%3==0 && p%5==0){
//         document.write(p, "FizzBuzz <br>")
//     }
//     else if(p%3==0 || p%5==0){
//         document.write(p, "Buzz <br>")
//     }
//     else
//         document.write(p, "<br>");
// }


// Budget tracker phase 4
let inCome = parseFloat(prompt("Enter income: "))
let numOfExpenses = parseInt(prompt("Enter number of expenses: "))

if(isNaN(income) || isNaN(numOfExpenses) || income<0 || numOfExpenses<0){
    console.log("Invalid Input");    
}
else{
    let totalExp = 0;
    for(let r=0; r<numOfExpenses; r++){
        let exp1 = parseFloat(prompt("Enter expense: "))
        if(isNaN(exp1) || exp1<0){
            exp1=0
        }            
        totalExp+=exp1;
    }
    console.log("Total: ", (inCome-totalExp));
    
}