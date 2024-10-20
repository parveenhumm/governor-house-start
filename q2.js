"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//check even or odd
function even(value) {
    if (value % 2 === 0) {
        console.log("even number");
    }
    else {
        console.log("odd number");
    }
    return value;
}
console.log(even(3));
console.log(even(8));
