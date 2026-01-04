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