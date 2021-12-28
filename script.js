let computerGuess = "";
function computerPlay(){    
    let compGuessProcess = 0;
    compGuessProcess = Math.floor(Math.random()*100) + 1;
    // console.log(compGuessProcess);
    if(compGuessProcess >= 1 && compGuessProcess < 33){
        return computerGuess = "Rock";
    }
    else if(compGuessProcess >= 33 && compGuessProcess <= 66){
        return computerGuess = "Paper";
    } else {
        return computerGuess = "Scissors";
    }
}
// console.log(computerGuess);


const btnone = document.getElementById('btnone');
const btntwo = document.getElementById('btntwo');
const btnthree = document.getElementById('btnthree');

let userGuess = "";

btnone.addEventListener('click', () => userGuess = "rock");
btntwo.addEventListener('click', () => userGuess = "paper");
btnthree.addEventListener('click', () => userGuess = "scissors");



let compWins = 0;
let userWins = 0;
function playRound(computerGuess, userGuess){
    if(userGuess === "rock" && computerGuess === "Rock" || userGuess === "paper" && computerGuess === "Paper" || userGuess === "scissors" && computerGuess === "Scissors"){
        return "It's a tie for this round!";
    }
    else if(userGuess === "rock" && computerGuess === "Paper" || userGuess === "scissors" && computerGuess === "Rock" || userGuess === "paper" && computerGuess === "Scissors"){
        compWins += 1;
        return "I win the round!";
    } else {
        userWins += 1;
        return "You win this round!!!";
    }
}

function checkWinner(compWins, userWins){
    if(compWins === userWins){
        return "Can't be, you're just as intelligent as me? Refresh to play again";
    }
    else if (compWins < userWins){
        return "How's it possible? You beat me? Meh, congrats...";
    } else {
        return "HA! Computer intelligence can't be beaten!!!";
    }
}

console.log("Let's play Rock, Paper, Scissors, 5 rounds see who wins more!");
for( let i = 1; i < 6; i++){
    console.log(`\nRound ${i}!`);
    computerPlay();
    //userPlay();
    console.log(playRound(computerGuess, userGuess));
    console.log(`Computer: ${compWins}, Player: ${userWins}.`)
}
console.log(checkWinner(compWins, userWins));