//json :- format to store data or transfer data like if we have to get data from other 
//websites like other websites is in php or C sharp etc so we can use json for this purpose
//objects can have methods json mai methods or function nhi hoti 


//pacjage JSON node.js k setting chnage karta hai
//tsconfig.json typescript k setting hange karty hai

//sntax error :- writing error
//type error :- run time mai bataye 
//assignability :- data type error or such as we assign some data types to varaibles and then we change it further



// arrays methods
//splice can also be used in strings

//to fix :- strings ko round off and also can add it to decimal points

//type inferernce : jo khud hi samajh jaye 
//type annotation :- jo hum type define kary


//step 003
//chalk :- chalknpm to study about it.  package . npm chalk to install chalk .
//console.log(chalk.blue('Hello world'));  . begair cury braces default .
//chalk default.bg.yellow to add background color

//unions literal :- 
//Math.random():- generate number between 0 to 0.9

//let newage = Math.random() > o.6 ? "Khan" : 60 ; (ternary operators)// true "khan" , false  60

//if(typeof  newage === "string")// typegurad  , narrowing
// method will be display as common in both types such as sstring and number 

//type alias :- 
// union type : repo number 
//colon k bad hamesha type hoti hai

//interface:- used to define the type of object 
//structural type so it only checks the type and also property as in sphere and ball example
//interface ko store nhi karwa sakty hain
//error aye ga if two interface mai sy aik mai do properties hon or aik mai aik property ho to 
//jis mai ziyada hai tw kam wala accept kar ly ga but ziyada propeties wala accept nhi karta hai
//ball = tube no error tube = ball error 
//missing property ko accept nhi karta hai
//stale object :- reuse one (bana banaya object mai extra property allow nhi kary ga ) 
//fresh objects:- extra accept nhi karta hai
// github repo  + slides (prep well😊)
//syntax :- practice 

// index signature :- property ko thora different kar dyta hai like if the property name it can be 
//diferent like firstName ,last Name etc ([a: string ] : any) it reflect in every property like name
// k ilawa koi bhi property ho gi to us mai bhi aye ga
let x : {idNumber : number , [a: string] : any}
x = {idNumber: 123 , Name : "Humaira parveen"}
