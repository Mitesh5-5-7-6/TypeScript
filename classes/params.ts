// Public
class publics {
    constructor(public name: string) {

    }
}
const obj = new publics("Mitesh");
console.log(obj.name)


// Private
class privates {
    constructor(private name: string) {

    }
}
const obj1 = new privates("Jay");
// console.log(obj1.name)


// Protected
class protecteds {
    constructor(protected name: string) {
        console.log(name)
    }
}
// const obj2 = new protecteds("Jayyogi");
// console.log(obj2.name);  // not use outer side protected... use exted protected to public

class protectedExtend extends protecteds {
    public getName() {
        return this.name;
    }
}
const obj2 = new protectedExtend("Jayyogi")
console.log(obj2.getName())