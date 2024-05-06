// function declaration with type
function add(a: number, b: number): number {
    return a + b;
}
const cdd = add(10, 20);
console.log(cdd)

// arrow function with type
const multiplay = (a: number, b: number): number => {
    return a * b;
}
const aaa = multiplay(20, 30);
console.log(aaa)

// function type
let divide: (a: number, b: number) => number

divide = (a, b) => {
    return a / b;
}
const aab = divide(20, 10);
console.log(aab);