// Object
var student = {
    name: "Afia",
    age: 18,
    gpa: 5.00,
    lang: ["Bangla", "English", "Japanese"]
}

console.log(student.age);


// Constructor
function Student(name,age,gpa,lang){
    this.name = name;
    this.age = age;
    this.gpa = gpa;
    this.lang = lang;

    this.display = function() {
        console.log(this.name);
        console.log(this.age);
        console.log(this.gpa);
        console.log(this.lang);
    }
}

let std1 = new Student("Nima",25,4.93,["Bangla", "English"])
let std2 = new Student("Ema",21,4.85,["Bangla", "English", "Latin"])

std1.display();

// Math objects
console.log(Math.sqrt(25));
console.log(Math.abs(-9));
console.log(Math.sin(1));
console.log(Math.floor(2.91));
console.log(Math.ceil(5.23));
console.log(Math.round(4.23)); // lower than .5 then the lower value rounded 
console.log(Math.round(4.66)); // higher or equal .5 then the higher value rounded
console.log(Math.max(-66, 90, 12));
console.log(Math.round(Math.random()*5)); // generate round number then make it integer