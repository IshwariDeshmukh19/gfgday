const fruits=["aaple", "banana", "mango", "orange", "chicken"]
console.log(fruits)
console.log(fruits[1])
fruits.push("watermelon")
console.log(fruits)
fruits.pop("kiwi")
console.log(fruits)
fruits.shift()
console.log(fruits)
fruits[3]="grapes"
console.log(fruits)
fruits.reverse()
console.log(fruits.length)
console.log(fruits.includes("grapes"))
z=fruits.toString()
console.log(z.toUpperCase())
console.log(typeof(fruits))
console.log(typeof(z))
console.log("-----------------------")



const color=["red","blue", "green","orange","pink","brown"]

for(i=0;i<color.length;i++)
{
    console.log(1,color[1])
}

// let favColor=document.querySelector('span')
// favColor.textContent=color[3]
let favColor=document.querySelector('h3')
favColor.textContent +=color[3]