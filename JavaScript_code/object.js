const JsUser={
    name:"Sumit",
    age: 20,
    location: "Bengaluru",
    isLoggedIn: false,
    lastLogin: ["Monday","Saturday"]

}
// console.log(JsUser.location);  //When we are writting using . then no it will directly take email as a string
// console.log(JsUser["location"]) //For this we need to add double quote

JsUser.greeting=function(){
    console.log(`Hello User,${this.name}`);
}
// console.log(JsUser.greeting());

const regularUser={
    email:"gmail.com",
    fullname:{
        userfullname:{
            firstname:"sumit",
            lastname:"Jha"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname)


// check syntax for concat object i,e 
// const obj3=Object.assign({},obj1,obj2,obj4)
// const obj3={...obj1, ...obj2}   -->Mostly used

