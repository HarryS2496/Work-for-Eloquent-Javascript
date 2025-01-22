// Currently only works for tenths in decimals
let num1 = null, num2 = null;
let result = 0;
let operator = null;
let isBuildingNum2 = false;
let num1DecimalCount = 0, num2DecimalCount = 0; // Track decimal places for num1 and num2
let isResultDisplayed = false;

function updateCalculation(value) {
  // If the result is displayed, start the new calculation with the result as num1
  if (isResultDisplayed) {
    num1 = result;  // Use the previous result as num1
    num2 = null;     // Reset num2
    operator = null; // Reset operator for the new calculation
    num1DecimalCount = 0; // Reset decimal count for num1
    num2DecimalCount = 0; // Reset decimal count for num2
    isResultDisplayed = false; // Reset the flag
  }

  if (typeof value === 'string' && (value === ' + ' || value === ' - ' || value === ' * ' || value === ' / ')) {
    if (num1 !== null) {
      operator = value;
      isBuildingNum2 = true;
    }
  }
  else if (isBuildingNum2) {
    if (value === '.') {
      if (num2DecimalCount === 0) {
        num2DecimalCount = 1;  // Allow only one decimal in num2
        num2 = num2 === null ? 0 : num2; // Initialize num2 if it's null
      }
    } else {
      if (num2 === null) {
        num2 = value;  // Start num2 with the first digit
      } else {
        num2 = num2 * 10 + value;  // Append digit to num2
      }
      // Adjust num2 to take into account the decimal places
      if (num2DecimalCount > 0) {
        num2 = num2 / Math.pow(10, num2DecimalCount); // Adjust for decimal place
      }
    }
  }
  else {
    if (value === '.') {
      if (num1DecimalCount === 0) {
        num1DecimalCount = 1;  // Allow only one decimal in num1
        num1 = num1 === null ? 0 : num1; // Initialize num1 if it's null
      }
    }
    else {
      if (num1 === null) {
        num1 = value;  // Start num1 with the first digit
      } else {
        num1 = num1 * 10 + value;  // Append digit to num1
      }
      // Adjust num1 to take into account the decimal places
      if (num1DecimalCount > 0) {
        num1 = num1 / Math.pow(10, num1DecimalCount); // Adjust for decimal place
      }
    }
  }
  updateDisplay(num1, operator, num2);
}

// 
function updateDisplay(num1, operator, num2) {
  const display = document.getElementById("res");
  if (operator) {
    display.value = `${num1} ${operator} ${num2 !== null ? num2 : ""}`;
  } else {
    display.value = num1 !== null ? num1 : ""; // If number isn't null, its value is displayed. Otherwise, if null, its a blank.
  }
}

function calculateResult() {
  num1 = parseFloat(num1); 
  num2 = num2 === null ? 0 : parseFloat(num2);  // If num2 is null, treat it as 0
  switch (operator) {
    case ' + ':
      result = num1 + num2; // Addition
      break;
    case ' - ':
      result = num1 - num2; // Subtraction
      break;
    case ' * ':
      result = num1 * num2; // Multiplication
      break;
    case ' / ':
      if (num2 === 0) {
        result = "Error: Div by 0"; // Handle division by zero
      } else {
        result = num1 / num2; // Division
      }
      break;
    default:
      result = "Invalid operation";
  }
  updateDisplay(result, null, null); // Update display after each input
  isResultDisplayed = true; // Checks flag
}

function clearCalculation() {
  num1 = null;
  num2 = null;
  operator = null;
  isBuildingNum2 = false;
  num1DecimalCount = 0;
  num2DecimalCount = 0;
  updateDisplay(null, null, null); // Clear the display
}

module.exports = {
  updateCalculation,
  calculateResult,
  clearCalculation
};
