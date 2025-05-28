console.log('hello')
console.log('bye')

setTimeout(() => {
    

    console.log("i am learning backend")

},2000)

const stop = setInterval(() => {
    console.log("i take breaks")
    
}, 1000);

setTimeout(() => {
    clearInterval(stop)
    console.log("no more breaks")
    
}, 6000);