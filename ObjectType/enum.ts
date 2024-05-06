// enum Roles {
//     user,
//     admin
// }

// enum sd {
//     adc = 2,
//     // then kjn value is 3
//     kjn,
//     // and vj value is 4
//     vj
// }

// enum nb {
//     abc = "643nmkb8".length,     //find a length
//     read = 1 << 2,
//     // read = 1 << 2: This means read is assigned a value which is the result of left shifting the binary representation of 1 by 2 positions. In binary, 1 is 0001, and shifting it left by 2 positions results in 0100, which in decimal is 4. So, read is assigned the value 4.
//     write = 2 >> 1,
//     // write = 2 >> 1: This means write is assigned a value which is the result of right shifting the binary representation of 2 by 1 position. In binary, 2 is 0010, and shifting it right by 1 position results in 0001, which in decimal is 1. So, write is assigned the value 1.
//     bv = read | write
//     // 4 + 1 = 5 , read + write

// console.log(nb.abc, nb.read, nb.write, nb.bv)
// }


// enum dbs {
//     abc,
//     def
// }

// interface abc {
//     mit: number
// }

// interface def {
//     jay: number
// }

// const use: abc = {
//     mit: 4836
// }

// const use1: def = {
//     jay: 743
// }

// console.log(use.mit)
// console.log(use1.jay)


// enum abs {
//     a = 1,
//     b,
//     c = 2
// }

// console.log(abs.a, abs.b, abs.c)


// const enum Direction {
//     Up,
//     Down,
//     Left,
//     Right,
// }

// let directions = [
//     Direction.Up,
//     Direction.Down,
//     Direction.Left,
//     Direction.Right,
// ];

// console.log(Direction.Up)

enum he {
    a = 3,
    c = a * 4
}

console.log(he.c)

enum Roles {
    user = "user",
    admin = "admin"
}

type LoginDetails = {
    name?: string; // ( ? are use to Optional define a property )
    email: string;
    password: string;
    roles: Roles
}

const user1: LoginDetails = {
    // name: "Mitesh",
    email: "abcd@gmail.com",
    password: "1233",
    roles: Roles.admin
}

const user2: LoginDetails = {
    name: "Jay",
    email: "vjh@gmail.com",
    password: "14",
    roles: Roles.user
}

console.log("user1", user1)
console.log("user2", user2)

enum direction {
    Up, Down, Left, Right
}
function doSomethings(keyPressed: direction) {
    if (keyPressed === direction.Up) {
        console.log("Up direction")
    } if (keyPressed === direction.Left) {
        console.log("Left direction")
    } if (keyPressed === direction.Right) {
        console.log("Right direction")
    } if (keyPressed === direction.Down) {
        console.log("Down direction")
    }
}
doSomethings(direction.Up);
doSomethings(direction.Down);
doSomethings(direction.Left);
// doSomething(direction.Right);
