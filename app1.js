const quizForm = document.querySelector("#form")
const checkButton = document.querySelector("#button")
const outputElement = document.querySelector("#output")

var array =["90&deg:","one right angle","3,4,5","Equilateral Triangle","a+b+c","zero"]


function calculateScore(){
    let index = 0;
    let score = 0 ;
    var formResults = new FormData(quizForm)
    for(let answer of formResults.values()){
      if ( answer === array[index]){
          score = score + 1
      }
      index= index + 1
    }
    console.log(score)
    outputElement.innerText = "Your score is " + score
}


checkButton.addEventListener("click" , calculateScore)

