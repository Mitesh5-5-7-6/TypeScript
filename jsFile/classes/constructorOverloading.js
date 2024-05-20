"use strict";
class point {
    constructor(x = 20, y = 40) {
        this.x = x;
        this.y = y;
    }
}
class point1 {
    constructor(m) {
    }
}
class car {
    constructor() {
        this.k = 4;
    }
}
class cars extends car {
    constructor() {
        super();
        console.log(this.k);
    }
}
