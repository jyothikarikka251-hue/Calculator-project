const display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}


function calculate() {
  try {
    let expression = display.value;
    let result = eval(expression);

    let operation = "";

    if (expression.includes("+")) {
      operation = "Addition";
    } 
    else if (expression.includes("-")) {
      operation = "Subtraction";
    } 
    else if (expression.includes("*")) {
      operation = "Multiplication";
    } 
    else if (expression.includes("/")) {
      operation = "Division";
    } 
    else if (expression.includes("%")) {
      operation = "Modulus";
    }

    display.value = `${operation}: ${result}`;

  } catch {
    display.value = "Error";
  }
}

// Keyboard Support
document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (!isNaN(key) || "+-*/.".includes(key)) {
    appendValue(key);
  }
  else if (key === "Enter") {
    calculate();
  }
  else if (key === "Backspace") {
    deleteLast();
  }
  else if (key === "Escape") {
    clearDisplay();
  }
});