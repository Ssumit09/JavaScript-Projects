// When we don't know the number of arguments present in the function
function calculateCartPrice(...num){
    return num;
}

console.log(calculateCartPrice(200,500,700));  //OP->[ 200, 500, 700 ]

const  user={
    username:"sumit",
    price:5909
}
function handleobj(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleobj(user)