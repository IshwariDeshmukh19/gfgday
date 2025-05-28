let API_KEY = "c92ed3fe98734c5e032967ca0e99a9aa";
const input = document.getElementById("cityName");
const form = document.getElementById("weatherForm");
const result = document.getElementById("result");

form.addEventListener("submit", (e) => {
  e.preventDefault(); //no refresh
  const city = input.value;
  console.log(city);
  form.reset();
  // const url=`https://api.openweathermap.org/data/2.5/weather?q=${city name}&appid=${API_KEY}`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  result.innerHTML = `<p style="color:blue"> ClerkLoading...API_KEY..</p>`;
  try{
    const res=await fetch(url)
    if
  }
  
    .then((res) => res.json())
    .then((data) => {
      const temp = data.main.temp;
      const humid = data.main.humidity;

      result.innerHTML = `<h2> ${city.toUpperCase()}</h2>
        <p> 🌡️ Temperature : ${temp} °C
        <p> ☁️ Humidity : ${humid} %`;
      console.log(data);
    })
    .catch((err) => {
      console.error("the error is :", err);
      result.innerHTML=`<p style="color:red"> ${err.message}</p>`
    });
});



///vercel deploy 
