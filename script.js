let computerGuess = "";
let playerGuess = "";

let roundCount = 1;

let compCount = 0;
let playerCount = 0;
let tiesCount = 0;


const btndiv = document.getElementById('btndiv');
const btnone = document.getElementById('btnone');
const btntwo = document.getElementById('btntwo');
const btnthree = document.getElementById('btnthree');

btnone.addEventListener('click', playerPlay);
btntwo.addEventListener('click', playerPlay);
btnthree.addEventListener('click', playerPlay);

const texts = document.getElementById('textdiv');

const para = document.createElement('p');
const para2 = document.createElement('p');
const tempResults = document.createElement('p');
texts.appendChild(para);
texts.appendChild(para2);
texts.appendChild(tempResults);
para.textContent = `Round ${roundCount}!`;
para2.textContent = `Computer: ${compCount}, Player: ${playerCount}. Ties: ${tiesCount}...`;

const results = document.getElementById('resultsdiv');
const compWins = results.firstElementChild;
compWins.style.display = "none";
const playerWins = results.lastElementChild;
playerWins.style.display = "none";

compWins.style.backgroundColor = "yellow";
playerWins.style.backgroundColor = "yellow";





function playerPlay(e){
    if(e.target == btnone){
        playerGuess = "Rock";
    } else if(e.target == btntwo){
        playerGuess = "Paper";
    } else if(e.target == btnthree){
        playerGuess = "Scissors";
    }
    computerPlay();
    tempResults.textContent = `(Computer chose ${computerGuess} and Player chose ${playerGuess})`;
    compareAnswers();
    checkWinner();
}

function computerPlay(){    
    let compGuessProcess = 0;
    compGuessProcess = Math.floor(Math.random()*100) + 1;
    // console.log(compGuessProcess);
    if(compGuessProcess >= 1 && compGuessProcess < 33){
        return computerGuess = "Rock";
    } else if(compGuessProcess >= 33 && compGuessProcess <= 66){
        return computerGuess = "Paper";
    } else {
        return computerGuess = "Scissors";
    }
}

function compareAnswers(){
    if (playerGuess == "Rock" && computerGuess == "Rock" || playerGuess == "Paper" && computerGuess == "Paper" ||
    playerGuess == "Scissors" && computerGuess == "Scissors"){
        roundCount++;
        tiesCount++;
        para.textContent = `Round ${roundCount}!`;
        para2.textContent = `Computer: ${compCount}, Player: ${playerCount}. Ties: ${tiesCount}...`;
    } else if (playerGuess == "Rock" && computerGuess == "Paper" || playerGuess == "Paper" && computerGuess == "Scissors" ||
    playerGuess == "Scissors" && computerGuess == "Rock"){
        roundCount++;
        compCount++;
        para.textContent = `Round ${roundCount}!`;
        para2.textContent = `Computer: ${compCount}, Player: ${playerCount}. Ties: ${tiesCount}...`;
    } else if (playerGuess == "Rock" && computerGuess == "Scissors" || playerGuess == "Paper" && computerGuess == "Rock" ||
    playerGuess == "Scissors" && computerGuess == "Paper"){
        roundCount++;
        playerCount++;
        para.textContent = `Round ${roundCount}!`;
        para2.textContent = `Computer: ${compCount}, Player: ${playerCount}. Ties: ${tiesCount}...`;
    }
}

function checkWinner(){
    if (compCount == 5 || playerCount == 5)
    {
        if (compCount > playerCount){
            compWins.style.display = "block";
        } else if (playerCount > compCount){
            playerWins.style.display = "block";
        }
        btndiv.style.display = "none";
    }
}