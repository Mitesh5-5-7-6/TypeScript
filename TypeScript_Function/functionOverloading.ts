function add1(a: number, b: number): number;
function add1(a: string, b: string): string;

function add1(a: any, b: any): any {
    return a + b;
}
console.log(add1(10, 30))
// console.log(add1(10, 30), add1("Mit", "esh"))
// console.log(add1("Mit", "esh"))
