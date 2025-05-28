const anyNum=require("./randomnum")

console.log("module")
console.log("the first random number is ", anyNum())
console.log(`second random number is  ${anyNum()}`)


const greetHi=require("./greet")
const sayHi = require("./greet")
const { mulitply, addition } = require("./math")
console.log(sayHi("ishwari"))
console.log(sayHi("saee"))

const sum = require("./math")

console.log(sum.mulitply(2,5))
console.log(sum.addition(14,5))
console.log(sum.subt(13,8))