// define our tuple
let ourTuple: [number, boolean, string];
// initialize correctly
ourTuple = [5, false, 'Codder is here'];
//Tuples :- 
//1. Fixed length = once defined can not add more items to it 
//2. typed = data types are known 
//3.benefit = more predictable and relaible 

// define our tuple
let ourTuple1: [number, boolean, string];
// initialize correctly
ourTuple1 = [5, false, 'Codder is here'];
// We have no type safety in our tuple for indexes 3+
ourTuple1.push('Something new and wrong');
console.log(ourTuple1);
// if we push some more values to our array or tupples so there is no data type problem 
//strongly defined types for initial values

// define our readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Codder'];
// throws error as it is readonly.
/////ourReadonlyTuple.push('Coding God took a day off');//error❌
//conclusion:- Tuples are fixed length array with particular typeas 
//readonly keyword makes the tuples immutable (elements can not be changed after creation)
//push method can be used to add element to an array but it can not be used in readonly tuples

//define our readonly tuple
const ourReadonlyTuple2 : readonly [number ,boolean ,string] = [5 , true , 'The Real codder']
//throws an error as it is readonly.
/////urReadonlyTuple2.push('codder took a day off');

//Named Tuples:-  provides detaled names for each elements.This increases readibility and makes code self explainatory
 const graph :[x:number , y: number] = [55.2 , 41.3];

// destructing Tuples:- 
const graph1 :[number , number] = [55.2 , 41.3];
const[x , y] = graph1; //unpacking values of graph or destructing or separating values into diferent varaibles
//Benefits:-Concise syntax: Simplifies code by assigning values directly to variables.
//Improved readability: Makes code more expressive and easier to understand.
//Efficiency: Can be used to avoid unnecessary intermediate variables.

