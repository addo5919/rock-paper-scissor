function getComputerChoice() {
 let choice=Math.floor(Math.random()*3);
 if(choice==0) {
    return "rock";
 }
 else if(choice==1) {
    return "paper";
 }
 else {
    return "scissors";
 }
}

function singleRound(e) {
    if(divGameResult.innerText != "") {
        divGameResult.innerText="";
    }
    let playerSelection=this.innerText;
    let computerSelection=getComputerChoice();
        if(playerSelection=="rock") {
        if(computerSelection=="rock") {
             divSingleRound.innerText="Its a draw!";
        }
        else if(computerSelection=="paper") {
            divSingleRound.innerText="You loose! paper beats rock";
            computerScore++;
        }
        else if(computerSelection=="scissors") {
            divSingleRound.innerText="You win! rock beats scissors";
            playerScore++;
        }
    }
    if(playerSelection=="paper") {
        if(computerSelection=="rock") {
            divSingleRound.innerText="You win! paper beats rock";
            playerScore++;
        }
        else if(computerSelection=="paper") {
            divSingleRound.innerText="Its a draw!";
        }
        else if(computerSelection=="scissors") {
            divSingleRound.innerText="You loose! scissors beats paper";
            computerScore++;
        }
    }
    if(playerSelection=="scissors") {
        if(computerSelection=="rock") {
            divSingleRound.innerText="You loose! rock beats scissors";
            computerScore++;
        }
        else if(computerSelection=="paper") {
            divSingleRound.innerText="You win! scissors beats paper";
            playerScore++;
        }
        else if(computerSelection=="scissors") {
            divSingleRound.innerText="Its a draw!";
        }
    }
    round++;
    divSingleRound.innerText+=` player:${playerScore} `+
    `computer:${computerScore} `+
    `rounds over:${round}`;
    if(round==5) {
        decideWinner();
    }
}

function decideWinner() {
    if(playerScore > computerScore) {
        divGameResult.innerText="You won the game! "+
        "Click on rock,paper or scissors to play again.";   
    }
    else if(playerScore < computerScore) {
        divGameResult.innerText="You lost the game! "+
        "Click on rock,paper or scissors to play again.";  
    }
    else {
        divGameResult.innerText="The game has ended in a draw! "+
        "Click on rock,paper or scissors to play again."; 
    }
    playerScore=0;
    computerScore=0;
    round=0;
}


let playerScore=0;
let computerScore=0;
let round=0;
let buttons=document.querySelectorAll("button");
let divSingleRound=document.querySelector("#single-round-result");
let divGameResult=document.querySelector("#game-result");
buttons.forEach((button)=>{
    button.addEventListener("click",singleRound);
}); 
