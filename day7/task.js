z=document.getElementById('a')
console.log(a)
let myText=document.querySelector('h1')
console.log(myText)
q=document.getElementById('b')
console.log(b)
 function xyz()
{
    if(z.style.background=='white' && z.style.color == 'blue' )
    {
        z.style.background='black';
        z.style.color='yellow';
        myText.textContent='Js is fun to learn';

    }
    else
    {
        z.style.background='white'
        z.style.color='blue';
    }
            //z.style.background='black';
              //z.style.color='yellow';
             // myText.textContent='Js is fun to learn';

}
function hb()
{
    //q.style.display='none';

    if(q.style.visibility == 'hidden')
    {
        q.style.visibility='visible'
    }
    else{
    q.style.visibility='hidden';
    }
}