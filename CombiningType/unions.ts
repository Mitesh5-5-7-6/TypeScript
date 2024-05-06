// pipe symbol

const inputFun = (value: number | string | boolean): void => {
    if (typeof value === "number") {
        console.log(value * 2);
    } else if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else {
        console.log("change your value")
    }
};

inputFun(55);       // Output: 110
inputFun("vhbhbv"); // Output: "vhbhbv" (lowercase)
inputFun(true);     // Throws an Error: Enter a valid value


// const inputFun = function (value: number | boolean) {

// };

// console.log(inputFun(55))
// console.log(inputFun("vhbhbv"))
// console.log(inputFun(true))


// const inputFun1 = function (value: any) {

// };

// console.log(inputFun1(55))
// console.log(inputFun1("vhbhbv"))
// console.log(inputFun1(true))

type directions = "up" | "down" | "left" | "right"

function doSomething(keyPresseded: directions) {
    if (keyPresseded == "up") {
        console.log("up direction");
    }
    if (keyPresseded == "down") {
        console.log("down direction");
    }
}
doSomething("up");