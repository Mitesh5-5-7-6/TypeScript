"use strict";
// pipe symbol
const inputFun = (value) => {
    if (typeof value === "number") {
        console.log(value * 2);
    }
    else if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else {
        console.log("change your value");
    }
};
inputFun(55); // Output: 110
inputFun("vhbhbv"); // Output: "vhbhbv" (lowercase)
inputFun(true); // Throws an Error: Enter a valid value
function doSomething(keyPresseded) {
    if (keyPresseded == "up") {
        console.log("up direction");
    }
    if (keyPresseded == "down") {
        console.log("down direction");
    }
}
doSomething("up");
