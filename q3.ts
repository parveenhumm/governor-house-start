// let arrayOperations = () =>{
// let num  = [4 , 6 ,12 ,28]
// num.push(26)
// console.log(num)
// num.shift()//removes the element
// console.log(num)
// num.splice(0,1,56)
// console.log(num) 
// }
// arrayOperations()

// function multiplyByTwo(arr : number[]){
//     for(let i = 0 ; i < arr.length ; i++){
//        arr[i] = arr[i]*2//arr[i] *= 2 
//     }
//     return arr
// }   

// let myArray = [2 , 4 , 8 ,5]
// console.log(multiplyByTwo(myArray));

function largestNumber(...arr :number[]){
    let largest = arr[0]
    for(let i=0 ; i<arr.length ; i++){
        if(arr[i] > largest){
            largest = arr[i]
        }
    }
    console.log(largest)
}

largestNumber(2, 4, 6, 45, 67, 87)