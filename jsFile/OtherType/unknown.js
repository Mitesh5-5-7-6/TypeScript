"use strict";
// let acd = true;
// acd.map(() => {     //map property does't exist in number, string , boolean etc....
// })
let abv;
abv = 55;
abv = true;
abv = "vrhj";
if (typeof abv === "number") {
    console.log(abv + 5);
}
else if (typeof abv === "boolean") {
    console.log(abv);
}
else
    (typeof abv === "string");
console.log(abv + "hello");
let vd;
vd = "hje";
console.log(vd);
function f1(a) {
    a.b(); // OK
}
// function f2(a: unknown) {
//     // Error: Property 'b' does not exist on type 'unknown'.
//     a.b();
// }
