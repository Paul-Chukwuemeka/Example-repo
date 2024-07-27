const clickBtn = document.getElementById("click")
const pContent = document.getElementById("p")
let value = 0

function clickMe() {
    value ++
    pContent.innerHTML
     = value
    console.log(value)
}