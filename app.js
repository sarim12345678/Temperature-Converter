let input = document.getElementById("input")
let result = document.getElementById("result")

function CelsiusBtn (){
    let inputNumber = +input.value
    let celsiusShow = (inputNumber * 9 / 5 ) + 32
    result.innerText = celsiusShow + " °C"
}

function FahrenheitBtn (){
    let inputNumber = +input.value
    let fahrenheitShow = (inputNumber - 32) * 5 / 9
    result.innerText = fahrenheitShow + " °F"
}