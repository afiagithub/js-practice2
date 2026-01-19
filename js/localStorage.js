// Web storage API - allows us to store and read data in browser
// Web storage API - localstorage, sessionstorage

// localstorage - store, read, update and remove data. No expiary data
// setItem(key, value)
localStorage.setItem("userName", "Afia Rahman")
localStorage.setItem("password", "12345")
localStorage.setItem("Age", "25")

const countries = ["Bangladesh", "Australia", "Spain", "Japan"]
localStorage.setItem("countries", JSON.stringify(countries)) //for array list use json stringify

// getItem(key)
const userName = localStorage.getItem("userName")
const countryList = JSON.parse(localStorage.getItem("countries")) //when getting array data use json parse
console.log(userName, countryList);

localStorage.removeItem("Age")
localStorage.clear()

sessionStorage.setItem("userName", "Afia Rahman")
sessionStorage.setItem("password", "12345")