interface mitesh {
    id: number;
    no: bigint;
    name: string;
    department: string;
}
type abc = keyof "name" | "id";
const key: abc = "id"

