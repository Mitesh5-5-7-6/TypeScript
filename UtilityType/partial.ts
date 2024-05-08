interface mit {
    name: string;
    age: number;
    class: string;
}

const info: Partial<mit> = {
    name: "Mitesh"
}
console.log(info)