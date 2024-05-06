"use strict";
// easy to re-use and refer to the same type in different parts of your code. provide a better readability,organization and abstraction.
const avj = {
    id: "vs",
    name: "Mitesh",
    age: 4,
};
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
