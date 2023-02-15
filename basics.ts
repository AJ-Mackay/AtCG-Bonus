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

let person: {
    name: string;
    age: number;
};

person = {
    name: 'Ash',
    age: 37
};

// person = {
//     isEmployee: false
// };

let people: {
    name: string;
    age: number;
}[];

// Type inference
// let course = "React - The Complete Guide";
// course = 12341;

// Union Types
let course: string | number = "React - The Complete Guide";
course = 12341;