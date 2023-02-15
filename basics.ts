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

// Functions & types

function add(a: number,b: number) {
    return a + b;
}

function print(value: any) {
    console.log(value);
}

// Generics
function insertAtBeginning<T>(array: T[], value: T){
    const newArray = [value, ...array];
    return newArray;
}

const demoArray =  [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');

// updatedArray[0].split('') // Cannot use split on numbers

// Classes
class Student {
    // firstName: string;
    // lastName: string;
    // age: number;
    // private courses: string[];

    constructor(
        public firstName: string,
        public lastName: string,
        public age: number,
        private courses: string[]) {}

    enrol(courseName: string) {
        this.courses.push(courseName);
    }

    listCourses() {
        return this.courses.slice();
    }
}

const student = new Student('Ash', 'Mackay', 37, ['Angular']);
student.enrol('React');
// student.listCourses(); => Angular, React

// student.courses => Angular, React