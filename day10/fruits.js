const fruits = ["🍎", "🍊", "🍇", "🍎", "🍊", "🍊", "🍇"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i] + i);

  if (fruits[i] === "🍎") {
    document.getElementById('a').textContent += "🍎";
  } else if (fruits[i] === "🍇") {
    document.getElementById('b').textContent += "🍇";
  } else {
    document.getElementById('c').textContent += "🍊";
  }
}


//swap two nums
a = 20;
b = 30;

let c = a;
a = b;
b =c;
console.log(a)
console.log(b)
