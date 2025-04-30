let theInput=document.getElementById('s')
console.log(theInput)
let myInfo=document.querySelector('input')
console.log(myInfo)

myInfo.addEventListener('input',()=>{
    theInput.textContent = myInfo.value
})