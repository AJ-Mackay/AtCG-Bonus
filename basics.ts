// Primatives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primatives

let age: number;
age = 37;

let userName: string | string[];
userName = "Ash";

let isInstructor: boolean;
isInstructor = false;

// More complex types

let hobbies: string[];
hobbies = ['Reading', 'Cooking', 'Puzzles'];

// Assigning Type Aliases
type Person = {
    name: string;
    age: number;
};

let person: Person;

person = {
    name: 'Ash',
    age: 37
};

// person = {
//     isEmployee: false
// };

let people: Person[];

// Type inference
// let course = "React - The Complete Guide";
// course = 12341;

// Union Types
let course: string | number = "React - The Complete Guide";
course = 12341;