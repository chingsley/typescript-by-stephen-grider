let apples: number = 5;

apples = 10;

let speed: string = 'fast';
let hasName: boolean = false;
let noValue: null = null;
let nothing: undefined = undefined;


// built in objects
let now: Date = new Date();


// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// Classes
class Car { }
let car: Car = new Car();

// Object literal
interface Point { x: number; y: number; }
let point1 = { x: 10, y: 20 };
let point2: { x: number; y: number; } = { x: 5, y: 4 };


// Function
const logNumber: (num: number) => void = (num) => {
  console.log(num);
};

const logNumber2 = (num: number): void => {
  console.log(num);
};

logNumber(5);

// When to use annotations
// 1) Functioon that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json);
console.log(coordinates);
coordinates.alfklafjlajflj; // fails to detect error

// Fixing the 'any' type
const json2 = '{"x": 10, "y": 20}';
const coordinates2: { x: number; y: number; } = JSON.parse(json);
console.log(coordinates2);
// coordinates2.alfklafjlajflj // immediately shows error



let numbers = [-10, -1, 12];
let numberAboveZero: number | boolean = false;
for (let num of numbers) {
  if (num > 0) numberAboveZero = num;
}



