let computerGuess = "";
let compGuessProcess = 0;
function computerPlay(){
    compGuessProcess = Math.floor(Math.random()*100) + 1;
    // console.log(compGuessProcess);
    if(compGuessProcess >= 1 && compGuessProcess < 33){
        return computerGuess = "Rock";
    }
    else if(compGuessProcess >= 33 && compGuessProcess <= 66){
        return computerGuess = "Paper";
    } else {return computerGuess = "Scissors";}

}
computerPlay();
// console.log(computerGuess);

let preuserGuess = prompt("Enter your guess");
let userGuess = "";
let regexOne = /^rock$/i;
let regexTwo = /^paper$/i;
let regexThree = /^scissors$/i;

function userGuessValidity(){
    if(preuserGuess.match(regexOne) || preuserGuess.match(regexTwo) || preuserGuess.match(regexThree)){
        return userGuess = preuserGuess.toLowerCase();
    } else {alert("Invalid choice!");
    preuserGuess = prompt("Enter a valid guess");
    userGuessValidity();
    }
}


function playRound(computerGuess, userGuess){
    if(userGuess === "rock" && computerGuess === "Rock" || userGuess === "paper" && computerGuess === "Paper" || userGuess === "scissors" && computerGuess === "Scissors"){
        return "It's a tie!";
    }
    else if(userGuess === "rock" && computerGuess === "Paper" || userGuess === "scissors" && computerGuess === "Rock" || userGuess === "paper" && computerGuess === "Scissors"){
        return "I win!";
    } 
    else { return "YOU WIN!!!";}
}
userGuessValidity();
console.log(playRound(computerGuess, userGuess));