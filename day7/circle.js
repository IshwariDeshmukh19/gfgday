z = document.getElementById("a");
console.log("a");
function hii() {
  if (z.style.background == "red") {
    z.style.background = "blue";
  } else if (z.style.background == "blue") {
    z.style.background = "yellow";
  } else if (z.style.background == "yellow") {
    z.style.background = "black";
  } else {
    z.style.background = "red";
  }
}
