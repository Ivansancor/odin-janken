let computerGuess = "";
let compGuessProcess = 0;
function computerPlay(){
    compGuessProcess = Math.floor(Math.random()*100) + 1;
    console.log(compGuessProcess);
    if(compGuessProcess >= 1 && compGuessProcess < 33){
        return computerGuess = "Rock";
    }
    else if(compGuessProcess >= 33 && compGuessProcess <= 66){
        return computerGuess = "Paper";
    } else {return computerGuess = "Scissors";}

}
computerPlay();
console.log(computerGuess);

let userGuess = prompt("Enter your guess");
console.log(userGuess);

function playRound(computerGuess, userGuess){
    if(userGuess === "rock" && computerGuess === "Rock" || userGuess === "paper" && computerGuess === "Paper" || userGuess === "scissors" && computerGuess === "Scissors"){
        return "It's a tie!";
    } else {return "One of you wins and the other loses!";}
}

console.log(playRound(computerGuess, userGuess));