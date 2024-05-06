// easy to re-use and refer to the same type in different parts of your code. provide a better readability,organization and abstraction.

// type aliases in all feild are required...
// type Persons = {
//     name: string;
//     age: number;
//     isStudent: boolean;
//     address: [city: string, pincode: number]
// }

// const mitesh: Persons = {
//     name: "Mitesh",
//     age: 20,
//     isStudent: true,
//     address: ["Gujarat", 370201]
// }

// Using other methods

// type Persons = {
//     name: string;
//     age?: number;
//     isStudent: boolean;
//     address: [city: string, pincode: number]
// }

// const mitesh: Persons = {
//     name: "Mitesh",
//     isStudent: true,
//     address: ["Gujarat", 370201]
// }

// Using union type

// type mixed = string | number | null;

// let mixVar: mixed;
// mixVar = null;

// function doSomething({ name, roll }: { name?: string, roll: string }) {
//     name;
//  }

type Transaction = {
 id: string;
};

type InternalTransaction = {
 name: "Mitesh";
 age: number;
} & Transaction;

const avj: InternalTransaction = {
 id: "vs",
 name: "Mitesh",
 age: 4,
};

interface Abc {}
interface BCd extends Abc {}

// type PersonWithAge = {
//     name: string;
//     age: number;
//     isStudent: boolean;
//     address: [city: string, pincode: number];
// };
// type PersonWithoutAge = {
//     name: string;
//     isStudent: boolean;
//     address: [city: string, pincode: number];
// };

// type Persons = PersonWithAge | PersonWithoutAge;

// const mitesh: Persons = {
//     name: "Mitesh",
//     isStudent: true,
//     address: ["Gujarat", 370201]
// };

// type animal = {
//     name: string;
// }

// type lion = animal & {
//     age: 29;
// }

// const animalDetails: animal = {
//     name: "lions"
// }

// console.log(animalDetails)

// type a = {
//  name: string;
//  age: number;
// };
// type b = {
//  id: string;
//  departement: string;
// };
// type pro = a | b;
// const cad: pro = {
//     id: "32",
//     name: "Mitesh",
//     age: 32,
//     // departement: "CE"

// }
