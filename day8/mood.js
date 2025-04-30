let B1= document.getElementsByTagName('button')[0]
let B2= document.getElementsByTagName('button')[1]
let photo=document.querySelector('img')
B1.addEventListener('click',()=>{
    
    photo.src="smile.jpeg"
})
B2.addEventListener('click',()=>{
 
    photo.src="sad.jpeg"
})