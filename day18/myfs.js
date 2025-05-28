// const fs=require('fs')

// console.log("good morning ")

// const info = fs.readFileSync("hello.txt",'utf-8')
// console.log(info)

// console.log("good night")


const fs=require('fs')

console.log("good morning ")

const info = fs.readFile("hello.txt",'utf-8',(err, data) =>{
    if(err)
    {
        console.log("error rrading file" , err)
        return
    }
    console.log(data)
})


console.log("good night")




