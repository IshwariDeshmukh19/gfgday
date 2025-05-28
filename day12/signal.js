let lights = document.querySelectorAll('.light')
console.log(lights)

let currentLight = 0;
// initialize  the first light
lights[currentLight].classList.add('active')

setInterval(()=> {
 changeLight()
},2000)

function changeLight(){
    //turnoff
    lights[currentLight].classList.remove('active')

    //move to nennxt light
    currentLight ++

    //reset after time
    if(currentLight > 2) {
        currentLight = 0;
    }
    //turn on
    lights[currentLight].classList.add('active');

}