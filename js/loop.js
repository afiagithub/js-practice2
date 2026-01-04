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
}while(p<=20)