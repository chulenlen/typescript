let hello: string = 'hello';

let number: number = 100;

// let largeNumber: BigInt = BigInt(12312321312313131231231321313213n);

const isActive: boolean = false;

// const uniqueKey: symbol = Symbol('description');

const emptyValue: null = null;

let uninitializedValue: undefined;

const person: { name: string; age: number } = {
  name: 'Bob',
  age: 30,
};

console.log(hello);

// -------------------
// Advanced Types
// -------------------

// Arrays
const numbers: number[] = [1, 2, 3];

const names: Array<string> = ['Bob', 'Chulen', 'Kim-Nana'];

// Enums

enum DarkMode {
  DARK = 'DARK',
  LIGHT = 'LIGHT',
  SYSTEM = 'SYSTEM',
}

const theme: DarkMode = DarkMode.LIGHT;

if (theme === DarkMode.LIGHT) {
  console.log('light');
}

// Interfaces
// notes: i prefer interface more than type

interface Person {
  birthday: string;
}

// we can add more interface Person

interface Person {
  height: number;
}

// to extend
interface User extends Person {
  id: string;
  name: string;
  age?: number;
  // put question mark to become a optional
}

const user: User = {
  id: '1',
  name: 'Chulen',
  birthday: 'August',
  height: 159,
};
// Ctrl + i for auto complete

// Type Aliases

type Animal = {
  animal: string;
};

// to extend
type Dog = Animal & {
  age: number;
};

const myDog: Dog = {
  age: 9,
  animal: 'Dog',
};

type Car = {
  brand: string;
  year: number;
};

const car: Car = {
  brand: 'Toyota',
  year: 2020,
};

// Literal Types
type Direction = 'north' | 'south';

let direction: Direction = 'north';

direction = 'south';

// Intersection Types
type A = { a: string };
type B = { b: number };

type C = A & B;

const value: C = {
  a: 's',
  b: 10,
};

// type Assertions and Casting

const someValue: any = 'this is a string';

const strLength: number = (someValue as string).length;
