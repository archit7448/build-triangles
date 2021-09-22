const inputValue = document.querySelectorAll(".input")
const checkButton = document.querySelector(".button")
const outputElement = document.querySelector("#outputContainer")

function calculateSum(){
    let sum = 0;
    for (i= 0 ; i<2 ; i++){
        sum = sum + Number(inputValue[i].value) *  Number(inputValue[i].value)
    }return sum
}

function submitHandler(){
    const total = calculateSum()
    var hypotenuse = Math.sqrt(total)
    outputElement.innerText = "Value of hypotenuse is "+ hypotenuse ;
}

checkButton.addEventListener("click" , submitHandler)