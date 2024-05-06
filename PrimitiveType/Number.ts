// normal int or float both in number
// let num: number
// num = 5;
// num = 5.5
// console.log(num)

let num: any = 42;
let final = <string>num + "mitesh"
console.log(final)

// using angle-bracket syntax
// let str = <string>num;

// using as syntax
// let str2 = num as string;

const colors = ['red', 12] as const;
console.log(colors)

let someValue: any = "hello" + 20
let strLength: number = (someValue as string).length
console.log(strLength)

let name1: string | null = null;
console.log(name1)
// let namelength = name!.length