"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Callbacl:- A callback is a function passed as an argument to another function. 
//The function that receives the callback will execute it at some point, often 
//after completing a task. This pattern is commonly used for asynchronous operations,
// where the result of an action isn't available immediately.
function outerFunction(callback) {
    callback();
}
const greeting = (message) => console.log(`Hello ${message}`);
function sayHello(callback) {
    callback(`world`);
}
sayHello(greeting);
