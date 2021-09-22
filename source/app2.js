const checkButton = document.querySelector(".button")
const inputText = document.querySelectorAll(".input")
const outputContainer = document.querySelector("#output")

function checkHandler(){
    const add = calculateSum()
    if(add === 180){
        outputContainer.innerText = "this is a triangle"
    }else{
        outputContainer.innerText = "this is not a triangle"
    }
}


function calculateSum(){
    let sum = 0 ;
    for (let i=0 ; i <3;i++){
        sum = sum + Number(inputText[i].value)
    }return sum
}

checkButton.addEventListener("click" , checkHandler)