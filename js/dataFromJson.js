const data = require("./../json/student_data.json")
console.log(data.students[0].lang);

// changing json data
data.students[1].age = 54
console.log(data);

console.log(data.students[0].friends);