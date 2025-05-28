

fetch("https://sweetfruit.vercel.app/fruits")
.then(data => data.json())
.then(res => {
    document.getElementById('a').textContent=(res[5].name +', ' + res[4].name)
    document.getElementById('b').textContent=(res[5].taste + ', '+res[4].taste)
    
console.log(res)
})