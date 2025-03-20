// Basic Function

function doSomething(a: number, b: number): string {
  return 'Result = ' + (a + b);
}

// Optional parameters
function optional(a: number, b?: number): string {
  if (!b) return '';
  return 'Result = ' + (a + b);
}

// Default Parameters
function defaultParameters(a: number, b: number = 10): string {
  if (!b) return '';
  return 'Result = ' + (a + b);
}

console.log(defaultParameters(10));

// Call signatures
interface MathOperations {
  (x: number, y: number): number;
}

const add: MathOperations = (a, b) => a + b;
const substract: MathOperations = (a, b) => a - b;

// Higher-Order functions
function higherOrder(
  func: (a: number, b: number) => number,
  other: number
): number {
  return func(other, 10);
}

// function divide(a: number, b: number): number {
//   return a / b;
// }

console.log(higherOrder((a: number, b: number) => a / b, 100));

// void

function returVoid() {
  return;
}
