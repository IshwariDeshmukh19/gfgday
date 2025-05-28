let p = new Promise ((resolve,reject) => {
    resolve("kam hogya")
})

p.then((data)=> {
    console.log(data)
})

.catch((error)=> {
    console.error("the prblem is" + error)
})