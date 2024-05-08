"use strict";
// const abc = [3, 4, 5, 6]
// abc.push(4)
// // abc.push("jvs") // there are not working becuse abc type are number
// const a = ["v", "vr", "vre"]
// a.push("v")
// // a.push[0] = "rvh"  // they are not working
// const bm = ["rr", "b", 4, true]
// bm.push("jvr")
// bm.push(43)
// bm.push(false)
// console.log(abc, a, bm)
function maxNumber(arr) {
    const max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max == arr[i];
        }
    }
    return max;
}
console.log(maxNumber([1, 2, 3]));
