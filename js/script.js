// Example of using document.write()
document.write("Afia Rahman <br/>")
document.write("Student")
document.write("<br/> Age: 24 <br/>")

// typeof function
console.log(typeof("Afia"))
console.log(typeof(456.258))
console.log(typeof(false))
console.log(typeof(Rahman))

// Budget tracker (Phase 1)
console.log("My name is Maisha Raihana");
console.log("Income: 15000, Budget: 12500")
console.log("Rent: 9500 Food: 1500 <br/> Others: 1500") //break tag doesn't work in console.log


// variable
// let firstName = "Afia"
// let lastName = "Rahman"
// document.write(firstName + " " + lastName)

// Budget tracker (Phase 2)
let income, budget; //at the moment value is undefined
const userName = "Maisha"; //must be declared at initialization
income = 15000
budget = 12500

console.log(userName);
console.log("Income:",income);
console.log("Budget:",budget);

// number method
let num = 2025
console.log(typeof(num));

// to convert to string type
num = toString(num);
console.log(typeof(num));

// to convert to interger
let intNum = parseInt(2025.25)
console.log(intNum);

// to convert to float
let fltNum = parseFloat("2025.25")
console.log(fltNum);

// toFixed
num = 2.3698
console.log(num.toFixed(2));