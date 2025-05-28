// function catty()
// {
//     fetch("https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_s1ubp3smFxc8EIR37uJ5JYSQOif3RwuxuruARoMIPR6VQydRqYhFvUS98r26EKWM")
// .then(res => res.json())
// .then(data =>
//     {
//         document.querySelector('img').src=data[0].url
//         console.log(data)
    
//     })

// }

async function catty()
{
    fetch("https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_s1ubp3smFxc8EIR37uJ5JYSQOif3RwuxuruARoMIPR6VQydRqYhFvUS98r26EKWM")
.then(res => res.json())
.then(data =>
    {
        document.querySelector('img').src=data[0].url
        console.log(data)
    
    })

}
