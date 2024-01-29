// Function that displays value
function displayValue(val) {
  document.getElementById("result").value += val
}

function myFunction(event) {
  if(event.key === '0' || event.key === '1' || event.key === '2' || event.key === '3' || event.key === '4' || event.key === '5' || event.key === '6' || event.key === '7' || event.key === '8' || event.key === '9' || event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') {
    
  } 
  
}
var calculate = document.getElementById("calculator");
calculate.onkeyup = function (event) {
  if(event.keyCode === 13) {
    console.log("Enter");
    let calculationInput = document.getElementById("result").value
    console.log(calculationInput);
    solve();
  }
}

// Function that evaluate digit and return result
 function solve() {
  let calculationInput = document.getElementById("result").value
  let calculationResult = math.evaluate(calculationInput)
  document.getElementById("result").value = calculationResult
}

// Function to clear display
function clearDisplay() {
document.getElementById("result").value = ""
}
