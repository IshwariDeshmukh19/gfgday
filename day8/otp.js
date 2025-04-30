let z=Math.floor(Math.random() *10)

console.log(z)
console.log(Math.floor(0.2584154918956254 *10))

let btn=document.querySelector('button')
console.log(btn)
btn.addEventListener('click',()=>{
 let otp=""
  for(i=0;i<6;i++) //6 here is 6 digit otp
  {
    otp +=Math.floor(Math.random() *10) //+= means 6 digit 
    console.log(otp)//shows how the otp is generated and made
  }
  document.getElementById('s').textContent=otp

})