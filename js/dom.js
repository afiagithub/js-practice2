document.getElementById("hdr").innerHTML = "This is heading 1";

// queryselector - class = . | id = # | tag = only tag name
const para = document.querySelectorAll(".mon") // selects all items with the same class name
para[0].style.fontSize = "40px";

const heading = document.querySelector("h2"); // selects the first item
heading.style.color = "red"

const listItem = document.querySelector("li a")
listItem.style.color = "green"