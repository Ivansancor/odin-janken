let computerGuess = "Rock";
let compGuessProcess = 0;
function computerPlay(){
    compGuessProcess = Math.random()*100 + 1;
    if(compGuessProcess >= 0 && compGuessProcess < 33){
        return computerGuess = "Rock";
    }
    else if(compGuessProcess >= 33 && compGuessProcess <= 66){
        return computerGuess = "Paper";
    } else {return "Scissors";}

}
computerPlay();
console.log(computerGuess);

let userGuess = "rock";

function playRound(computerGuess, userGuess){
    if(userGuess === "rock" && computerGuess === "Rock" || userGuess === "/paper/i" && computerGuess === "Paper" || userGuess === "/scissors/i" && computerGuess === "Scissors"){
        return "It's a tie!"
    } else {return "One of you wins and the other loses!";}
}
console.log(userGuess);
console.log(playRound(computerGuess, userGuess));