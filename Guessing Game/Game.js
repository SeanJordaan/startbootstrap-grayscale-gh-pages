var secret = math.floor(math.random() *10) + 1;


var startButton = document.getElementById(myBtn)
startButton.onclick  = myGuess;


function myGuess(){
    var answer = prompt("Please guess")
    answer = Number(answer);
    checkAnswer(answer);
}

function checkAnswer(guess){
      if(guess === secret){
          alert("Correct" + guess + "its right");
          document.getElementById("output").innerHTML= "Congrats";

      }else if(guess < secret){
          alert("Incorrect");
          myGuess();
      } else if(guess > secret){
          alert("Incorrect");
          myGuess();
      }else{
          alert("Invalid Input");
          myGuess();
      }
}