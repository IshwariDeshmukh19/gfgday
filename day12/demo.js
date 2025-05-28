// function add(a,b){
//     return a+b;
// }
// console.log(add(4,5))
// //--------------------------------//
// const add1 = (x,y) =>{
//     return x +y;
// }
// console.log(add1(4,5))

// //function can be created in two ways


//async behavior of js

console.log("good morning")

setTimeout(( )=> {
    console.log("good night")
},5000)


 const z = setInterval(() => {
    console.log("tea time")
}, 1000);

setTimeout(()=> {
    clearTimeout(z)
    console.log("no tea now byebye")
},7000)


console.log("good afternoon")


