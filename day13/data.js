//let z=document.querySelector('span')

const hero=
    [{
    name : "shahrukh",
    age : 59,
    height :180,
    weigth : 80,
    hobbies :["coffee", 'acting', "sleeping"]
},
{
    name : "salman",
    age : 60,
    height :178,
    weigth : 85,
    hobbies :["car", "gym", "dance"] 
    }, 
    {
        name : "sanjay dutt",
        age : 62,
        height :170,
        weigth : 90,
        hobbies :["coffee", "driving", "swiming"]
    }]
    console.log(hero[0].name)
//z.textContent=(hero.name)
//document.querySelectorAll('span')[0].textContent=(hero.name)
//document.querySelectorAll('span')[1].textContent=(hero.hobbies[2])
document.querySelectorAll('span')[0].textContent=(hero[2].name)
document.querySelectorAll('span')[1].textContent=(hero[2].hobbies[1])

