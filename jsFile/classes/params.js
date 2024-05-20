"use strict";
// Public
class publics {
    constructor(name) {
        this.name = name;
    }
}
const obj = new publics("Mitesh");
console.log(obj.name);
// Private
class privates {
    constructor(name) {
        this.name = name;
    }
}
const obj1 = new privates("Jay");
// console.log(obj1.name)
// Protected
class protecteds {
    constructor(name) {
        this.name = name;
        console.log(name);
    }
}
// const obj2 = new protecteds("Jayyogi");
// console.log(obj2.name);  // not use outer side protected... use exted protected to public
class protectedExtend extends protecteds {
    getName() {
        return this.name;
    }
}
const obj2 = new protectedExtend("Jayyogi");
console.log(obj2.getName());
