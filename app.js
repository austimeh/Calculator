// Function that displays value
function dis(val) {
  document.getElementById("result").value += val;
}

function myFunction(event) {
  if (
    event.key === "0" ||
    event.key === "1" ||
    event.key === "2" ||
    event.key === "3" ||
    event.key === "4" ||
    event.key === "5" ||
    event.key === "6" ||
    event.key === "7" ||
    event.key === "8" ||
    event.key === "9" ||
    event.key === "+" ||
    event.key === "-" ||
    event.key === "*" ||
    event.key === "/"
  ) {
    dis(event.key);
  } else if (event.key === "Enter") {
    solve();
  }
}

var calculate = document.getElementById("calculator");
calculate.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    console.log("Enter");
    solve();
  }
});

// Function that evaluates expression and returns result
function solve() {
  let calculationInput = document.getElementById("result").value;
  let calculationResult = eval(calculationInput);
  document.getElementById("result").value = calculationResult;
}

// Function to clear display
function clearDisplay() {
  document.getElementById("result").value = "";
}
