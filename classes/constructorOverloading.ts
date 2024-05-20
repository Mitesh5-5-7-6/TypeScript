class point {
    x: number;
    y: number;

    constructor(x = 20, y = 40) {
        this.x = x;
        this.y = y;
    }
}

class point1 {
    constructor(x: string, y: number);
    constructor(z: string);
    constructor(m: "any") {
    }
}

class car {
    k = 4;
}

class cars extends car {
    constructor() {
        super()
        console.log(this.k);
    }
}