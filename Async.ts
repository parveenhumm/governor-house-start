//Callbacl:- A callback is a function passed as an argument to another function. 
//The function that receives the callback will execute it at some point, often 
//after completing a task. This pattern is commonly used for asynchronous operations,
// where the result of an action isn't available immediately.
function outerFunction(callback: () => void) {
    callback();
  }

const greeting = (message : string ) => console.log (`Hello ${message}`);

interface definitonInterface{
    (messgae : string ) : void ;
}

function sayHello(callback:definitonInterface){
    callback(`world`)
}
sayHello(greeting);