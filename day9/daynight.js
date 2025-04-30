let webSite=document.querySelector('body')
console.log(webSite)

let btn=document.querySelector('button')
console.log(btn)

btn.addEventListener('click',()=>{

    webSite.classList.toggle('night')
}
)