age=15

if(age>=18)
{
console.log("please vote")
}
else{
    console.log("cannot vote")
}

let myText=document.querySelector('h1')

console.log(myText)
function xyz()
{
//  myText.textContent='i am in mern batch';

if(myText.textContent == 'I am in gfg batch')
{
    myText.textContent='I am in mern batch'
}
else{
    myText.textContent='I am in gfg batch'
}
}