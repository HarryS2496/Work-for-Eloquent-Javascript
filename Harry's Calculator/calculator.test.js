const { updateCalculation, calculateResult, clearCalculation } = require('./calculator');

describe('Calculator Tests', () => {
  let result;

  beforeEach(() => {
    result = 0;
  });

  test('should add numbers correctly', () => {
    updateCalculation(5);
    updateCalculation(' + ');
    updateCalculation(3);
    calculateResult();
    expect(result).toBe(8);
  });

  test('should subtract numbers correctly', () => {
    updateCalculation(10);
    updateCalculation(' - ');
    updateCalculation(4);
    calculateResult();
    expect(result).toBe(6);
  });

  test('should multiply numbers correctly', () => {
    updateCalculation(3);
    updateCalculation(' * ');
    updateCalculation(4);
    calculateResult();
    expect(result).toBe(12);
  });

  test('should divide numbers correctly', () => {
    updateCalculation(8);
    updateCalculation(' / ');
    updateCalculation(2);
    calculateResult();
    expect(result).toBe(4);
  });

  test('should handle division by zero', () => {
    updateCalculation(8);
    updateCalculation(' / ');
    updateCalculation(0);
    calculateResult();
    expect(result).toBe("Error: Div by 0");
  });

  test('should handle decimal numbers', () => {
    updateCalculation(5);
    updateCalculation(' + ');
    updateCalculation(2.5);
    calculateResult();
    expect(result).toBe(7.5);
  });

  test('should reset the calculation correctly', () => {
    updateCalculation(3);
    updateCalculation(' + ');
    updateCalculation(4);
    calculateResult();
    clearCalculation();
    expect(result).toBe(0);
  });

  test('should start new calculation after result is displayed', () => {
    updateCalculation(6);
    updateCalculation(' + ');
    updateCalculation(4);
    calculateResult();
    updateCalculation(' - ');
    updateCalculation(2);
    calculateResult();
    expect(result).toBe(8);
  });
});
