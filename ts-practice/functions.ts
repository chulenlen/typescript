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
  console.log('somethings');
}

const returnVoidArrow: () => void = () => {
  console.log('somethings');
};

// unknown
function anyFunction(a: any) {
  a.name;
}

// safer!
function unknownFunction(a: unknown) {
  return a;
}

// never
function neverReturnAValue(): never {
  throw new Error('error');
}

function neverIsTricky(x: string | number) {
  if (typeof x === 'string') {
    console.log('do something');
  } else if (typeof x === 'number') {
    console.log('do something2');
  } else {
    return x;
  }
}

// Function global type
function functionGlobalType(func: Function) {
  return func(1, 2);
}

// Rest parameters
function restParameters(n: number, ...m: number[]) {
  return m.map(x => x + n);
}

const a = restParameters(10, 1, 2, 3, 4, 5);
console.log(a);

// Parameter Destructuring

type parametersType = {
  a: number;
  b: number;
  c: number;
};

function parameterDestructuring({ a, b, c }: parametersType): number {
  return a + b + c;
}

// another way
// function parameterDestructuring(values: parametersType): number {
//   const { a, b, c } = values;
//   return a + b + c;
// }

// Function overloading
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;

function combine(a: any, b: any): any {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else if (typeof a === 'string' && typeof b === 'string') {
    return a.concat(b);
  }
}

// another way
function combineOverload(
  a: number | string,
  b: number | string
): number | string {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else if (typeof a === 'string' && typeof b === 'string') {
    return a.concat(b);
  }
  throw new Error('Invalid tpyes for parameters a and b');
}

const result = combine(6, 4);
const result2 = combine('hello ', 'world');
console.log(result, result2);
