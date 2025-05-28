fetch("https://jsonplaceholder.typicode.com/users")
.then(data => data.json())
.then(res => {

    //document.getElementById('a').textContent=(res[2].name)    
    //document.getElementById('b').textContent=(res[2].email)
    document.getElementById('a').textContent=(res[9].name)
    document.getElementById('c').textContent=(res[9].username)
    document.getElementById('b').textContent=(res[9].email)
console.log(res)
})

//document.querySelectorAll('span')[2].textContent=([2].name[2])


