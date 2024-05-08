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
const invoice = {
    name: "HP",
    price: 20000,
    qty: 5,
    location: "22, apc circle",
};
const invoice1 = {
    name: "HPC",
    price: 2000,
    qty: 2,
    location: "22, apc circle",
};
const invoice2 = {
    name: "HPPP",
    price: 200000,
    qty: 3
};
const invoice3 = {
    name: "HPP",
    price: 200002,
    qty: 6
};
const invoices = [invoice, invoice1, invoice2, invoice3];
invoices.forEach(inv => {
    if (inv.price <= 20000) {
        console.log(inv.name, "This laptop are under budget");
    }
});
// OR
// if (invoices.some(inv => inv.name === "HP")) {
//     console.log("Hello");
// }
