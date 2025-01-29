//i need 3 base functions that store what the user last input into the calculator and the operaters the numbers
//i need to connect the buttons to the js and add event lisenters
//i need to render them all out on the output field
//basic contections without the function first
// test function
const consoleTest = (e) => {
  console.log("works!")
}
//variables
const calculation = 0
//
//output
const result = document.querySelector("#output")
result.textContent = calculation
//
//checking for buttons clicked on the calculator
const operations = document.querySelector("#calculator")
operations.addEventListener("click", consoleTest)
//
//need to take the clicks on the dom and filter what number they are
const numberFilter = (e) => {
  
}
//
