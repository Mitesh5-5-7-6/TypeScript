type PersonInfo = readonly [string, number, boolean]; // readonly use then don't add or remove a data

const displayPersonInfo: (person: PersonInfo) => void = (person: PersonInfo): void => {
    const [name, age, food] = person;
    console.log(`Name: ${name}, Age: ${age}, Food: ${food ? "Yes" : "No"}`);
};

const person1: PersonInfo = ["Mitesh", 23, true];
// const person2: PersonInfo = [23, "Jay", true];  // This line has invalid order. Tuples must be in the correct order.
const person3: PersonInfo = ["Jay", 23, false];

displayPersonInfo(person1);
displayPersonInfo(person3);
