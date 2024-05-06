"use strict";
function error(msg, code) {
    throw { msg, code };
}
console.log(error("server side error", 500));
