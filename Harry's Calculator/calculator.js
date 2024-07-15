let num1 = null, num2 = null;
    let result = 0;
    let operator = null;
    let isBuildingNum2 = false;
    function updateCalculation(value) {
      if (num1 !== null) {
        operator = value;
        isBuildingNum2 = true;
      }
      else if (isBuildingNum2) {
        if (num2 === null) {
          num2 = value;
        }
        else {
          num2 = num2 * 10 + value;
        }
      }
      else {
        if (num1 === null) {
          num1 = value;
        }
        else {
          num1 = num1 * 10 + value;
        }
      }
      console.log(num1, operator, num2);
    }
    function calculateResult() {
      switch (operator) {
        case ' + ':
          result = num1 + num2;
          break;
        case ' - ':
          result = num1 - num2;
          break;
        case ' * ':
          result = num1 * num2;
          break;
        case ' / ':
          result = num1 / num2;
          break;
        default:
          result = "Invalid operation";
      }
      console.log(result);
      clearCalculation();
    }
    function clearCalculation() {
      calculation = '';
      console.log(calculation);
    }