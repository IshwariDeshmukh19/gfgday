const person ={
 name : "aditya",
 age : 22,
 isAlive : true,
 hobbies : ["read", "code"]
};
console.log(person["age"])
console.log(person.age)

document.querySelector('h2').textContent += person.hobbies[2]

console.log(typeof(person))
// it will print objecct 

const z = JSON.stringify(person)
console.log(typeof(z))
// it will print string

const y = JSON.parse(person)
console.log(typeof(y))