"use strict";
const info32 = {
    Mit: { age: 20, class: "C" },
    Mita: { age: 23, class: "B" },
    Mitesh: { age: 2, class: "F" }
};
console.log(info32);
function welcomePeople(x) {
    if (Array.isArray(x)) {
        // Here: 'x' is 'string[]'
        console.log("Hello, " + x.join(" and "));
    }
    else {
        // Here: 'x' is 'string'
        console.log("Welcome lone traveler " + x);
    }
}
welcomePeople(["Abc", "Xyz", "Efg"]);
welcomePeople("Mitesh");
