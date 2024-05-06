interface square {
    width: number;
}

interface triangle extends square {
    hight: number;
    radius: number;
}

let result: triangle = {
    hight: 30,
    radius: 20,
    width: 20
}
console.log(result)