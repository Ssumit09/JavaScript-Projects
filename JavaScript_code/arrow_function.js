// var has global scope
// this is contextual based 
// this will be work inside funtion not under the object
const user={
    username:"sumit",   //by default this is used
    price:99,

    welcomeMessage: function(){
        console.log(`${this.username} , Welcome to website`);
    }
}
// user.welcomeMessage();
// user.username="John";  //In this line we changed the context 
// user.welcomeMessage();


// This will  lead to undefined as this doesn't understand the context--> for this arrow function wil used
// const chai=function(){
//     let username="ssss"
//     console.log(this.username);
// }

//This will also lead to undefined from the below code
//we infer we cannot use this keyword in bothe regular and arrow function
// const chai=()=>{
//     let username="ssss"
//     console.log(this.username);
// }
// chai()

// const add=(num1,num2)=>{
//     return num1+num2;
// }

// Implicit declaration no neeed to write return 
// const add=(num1,num2)=> num1+num2;
// const add=(num1,num2)=> ( num1+num2 );  //mostly used in react


important
// IIFE (terms Immediately Invoked Function Expression) -> to remove the pollution of Global Scope


// Instruction that are treated as false: falsy values
false,0, -0, BigInt 0n ,  "" , null, undefined, NaN
 

