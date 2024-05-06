type person10 = {
    name: string;
    age: number;
}
type employe = {
    id: number;
    department: string;
}
type employerDetail = person10 & employe

const employee: employerDetail = {
    name: "mitesh",
    age: 23,
    id: 12,
    department: "CE"
}
console.log(employee)