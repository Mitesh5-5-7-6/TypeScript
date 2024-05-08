"use strict";
const displayPersonInfo = (person) => {
    const [name, age, food] = person;
    console.log(`Name: ${name}, Age: ${age}, Food: ${food ? "Yes" : "No"}`);
};
const person1 = ["Mitesh", 23, true];
// const person2: PersonInfo = [23, "Jay", true];  // This line has invalid order. Tuples must be in the correct order.
const person3 = ["Jay", 23, false];
displayPersonInfo(person1);
displayPersonInfo(person3);
