"use strict";
function data5(person) {
    return "hello" + person.name + person.age;
}
function filteredUser(users) {
    return users.filter(x => x.age >= 18);
}
console.log(filteredUser([{
        name: "Mitesh",
        age: 21
    }, {
        name: "Jay",
        age: 18
    }, {
        name: "Jay",
        age: 17
    }]));
