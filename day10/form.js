
let uName = document.querySelectorAll('input')[0]
let pass = document.querySelectorAll('input')[1]



let myData = document.querySelector('form')

console.log(myData)

myData.addEventListener('submit',(e)=> {
    e.preventDefault()
//   The e.preventDefault() (or event.preventDefault()) method in
//  JavaScript is used to prevent the default behavior of an element when an event occurs.
    console.log(uName.value)
    console.log(pass.value)

    if(uName.value.trim() == "" || pass.value.trim()=="") {
        alert("blankspacces not allowed")
        return 
        // used return coz function same  page pe ruka rahe
    }

    if(pass.value.length > 15) {
        alert("too big password")
        return
    } else {
        // window.location.href = "welcome.html"

        // below line will open it on new page
        window.open('welcome.html', '_blank')
    }
})