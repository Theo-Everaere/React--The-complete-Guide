// Primitives: number, string, boolean

let age: number;

age = 12;

let userName: string;

userName = "Max";

let isLoggedIn: boolean;

isLoggedIn = false;

// More complex types: arrays, objects

let hobbies: string[];

hobbies = ["Sports", "Cooking", "Coding"];

type Person = { name: string; age: number };

let person: Person;

person = {
  name: "Max",
  age: 23,
};

let people: Person[];

people = [
  {
    name: "max",
    age: 15,
  },
];
let course: string | number | boolean = "React - The Complete Guide";

course = 12345;
course = true;

// Function types, parameters

function multiply(a: number, b: number): number {
  return a * b; // : donc return sera de type number
}

// Generics

function insertAtBegininning<T>(array: T[], value:T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArr = [1, 2, 3];

const updatedArry = insertAtBegininning(demoArr, -4);
console.log(updatedArry)

