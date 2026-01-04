let mark = 22;

if(mark>=80 && mark<=100){
    console.log("A+");    
}
else if(mark>=70 && mark<80){
    console.log("A");
}
else if(mark>=60 && mark<70){
    console.log("A-");
}
else if(mark>=50 && mark<60){
    console.log("B");
}
else if(mark>=50 && mark<60){
    console.log("C");
}
else if(mark>=33 && mark<40){
    console.log("D");
}
else{
    console.log("F");    
}

let number1 = 0, number2 = 10, number3 = 8;

if(number1 > number2 && number1>number3)
    console.log("Largest number", number1);
else if(number2 > number1 && number2 > number3)
    console.log("Largest number", number2);
else
    console.log("Largest number", number3);

let letter1 = 'E';
letter1 = letter1.toLowerCase();

if(letter1 == 'a' || letter1 == 'e' || letter1 == 'i' || letter1 == 'o' || letter1 == 'u')
    console.log("Vowel");
else
    console.log("Consonent"); 

// number1 > 0 ? console.log("positive"): console.log("negative");

number1 > 0 ? console.log("positive") : number1 < 0 ? console.log("negative") : console.log("zero");

switch(letter1){
    case "a":
        console.log("Vowel");
        break;
    case "e":
        console.log("Vowel");
        break;
    case "i":
        console.log("Vowel");
        break;
    case "o":
        console.log("Vowel");
        break;
    case "u":
        console.log("Vowel");
        break;
    default:
        console.log("Consonent");                
}
