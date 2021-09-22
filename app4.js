const inputValue = document.querySelectorAll(".input")
const checkButton = document.querySelector(".button")
const outputElement = document.querySelector("#outputContainer")

function calculateMultiply(){
    let multiply = 1;
    for (i= 0 ; i<2 ; i++){
        multiply = multiply * Number(inputValue[i].value) 
    }return multiply
}

function submitHandler(){
    const total = calculateMultiply()
    var area = 0.5 * total
    outputElement.innerText = "Value of area is "+ area ;
}

checkButton.addEventListener("click" , submitHandler)