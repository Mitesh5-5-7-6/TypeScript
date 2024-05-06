function error(msg: string, code: number): never {
    throw { msg, code }
}

console.log(error("server side error", 500))