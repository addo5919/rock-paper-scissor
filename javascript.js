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

function singleRound(playerSelection,computerSelection) {
    playerSelection=playerSelection.toLowerCase();
        if(playerSelection=="rock") {
        if(computerSelection=="rock") {
            return "Its a draw!";
        }
        else if(computerSelection=="paper") {
            return "You loose! paper beats rock";
        }
        else if(computerSelection=="scissors") {
            return "You win! rock beats scissors";
        }
    }
    if(playerSelection=="paper") {
        if(computerSelection=="rock") {
            return "You win! paper beats rock";
        }
        else if(computerSelection=="paper") {
            return "Its a draw!";
        }
        else if(computerSelection=="scissors") {
            return "You loose! scissors beats paper";
        }
    }
    if(playerSelection=="scissors") {
        if(computerSelection=="rock") {
            return "You loose! rock beats scissors";
        }
        else if(computerSelection=="paper") {
            return "You win! scissors beats paper";
        }
        else if(computerSelection=="scissors") {
            return "Its a draw!";
        }
    }
}

function game() {
let playerScore=0,computerScore=0;
for(let i=0;i<5;i++) {
 let playerChoice=prompt("Enter rock,paper or scissors")
 let computerChoice=getComputerChoice();
 let result=singleRound(playerChoice,computerChoice);
 console.log(`player: ${playerChoice}\ncomputer: ${computerChoice}
 \nresult: ${result}`);
 if(result.search("win")!=-1) {
    playerScore++;
 }
 else if(result.search("loose")!=-1) {
    computerScore++;
 }
 console.log(`playerScore: ${playerScore}\ncomputerScore: ${computerScore}`);
}
 
     
if(playerScore>computerScore) {
    console.log("You win the game!");
}
else if(playerScore<computerScore) {
    console.log("You lost the game!");
}
else {
    console.log("Its a draw!");
}
}

game();

