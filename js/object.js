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