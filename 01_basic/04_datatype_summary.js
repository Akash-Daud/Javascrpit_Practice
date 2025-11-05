//  datatype of the javascript 2 Type

//Primitive  7 Type 
// String , Number , Boolean , null, undefined , Symbol, bigInt


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId);

const bigIntNumber = 1234567890n

console.log(typeof bigIntNumber);







//Refrance (Non Primitive data type)

// Array 
// Objects
//functions

//Array
 const heros=["akash","ravi","gopal"]

 console.log(heros.length);

//object
 const myObj = {
    name : "akash",
    age  : 24
 }

 console.log(myObj.name);

 //function
//normal function
 const myFun =function() {
      console.log("this is the normal function");
      
 }

 const myFunArro =()=> {
    console.log("this is the arrow function");
    
 }


 

 