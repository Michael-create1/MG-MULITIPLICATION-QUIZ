    
    const num1El=document.getElementById("num1-el")
    const num2El=document.getElementById("num2-el")
    const submitEl=document.getElementById("submit-el")
    const scoreEl=document.getElementById("score-el")
    const inputEl=document.getElementById("input-el")
     let score=0
     let realAnswer=0

function generateQuestion(){
    let num1= Math.floor(Math.random()*10)+1
    let num2= Math.floor(Math.random()*10)+1
    realAnswer=num1*num2
    num1El.textContent=num1
    num2El.textContent=num2
    inputEl.value="";    //clears the answer input
    inputEl.focus();     //lets on-screen keybord pop-up on mobile devices(puts the cursor back inside the input)
}
  
     submitEl.addEventListener("click", function(){
       const userAnswer=parseInt(inputEl.value) //parseInt() converts the answer to number not text
        if(!isNaN(userAnswer)){
            if(userAnswer===realAnswer){
                score+=1;
            }else {
                score-=1;
            }
            scoreEl.textContent="score: "+score
            generateQuestion()
        } else{
            alert("please enter a valid number")
        }
    })

   

// add an enter button such that when pressed, its as if pressed submit button

function checkAnswer(){
    submitEl.addEventListener("click", checkAnswer)
    inputEl.addEventListener("keydown", function(event){
        if(event.key==="Enter"){
            checkAnswer()
        }
    })
}
    generateQuestion()   //this calls to start with the first random question