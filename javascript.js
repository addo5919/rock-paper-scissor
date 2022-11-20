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
    let playerSelection=this.innerText;
    let computerSelection=getComputerChoice();
        if(playerSelection=="rock") {
        if(computerSelection=="rock") {
             div.innerText="Its a draw!";
        }
        else if(computerSelection=="paper") {
            div.innerText="You loose! paper beats rock";
        }
        else if(computerSelection=="scissors") {
            div.innerText="You win! rock beats scissors";
        }
    }
    if(playerSelection=="paper") {
        if(computerSelection=="rock") {
            div.innerText="You win! paper beats rock";
        }
        else if(computerSelection=="paper") {
            div.innerText="Its a draw!";
        }
        else if(computerSelection=="scissors") {
            div.innerText="You loose! scissors beats paper";
        }
    }
    if(playerSelection=="scissors") {
        if(computerSelection=="rock") {
            div.innerText="You loose! rock beats scissors";
        }
        else if(computerSelection=="paper") {
            div.innerText="You win! scissors beats paper";
        }
        else if(computerSelection=="scissors") {
            div.innerText="Its a draw!";
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

//game();
let buttons=document.querySelectorAll("button");
let div=document.querySelector("div");
buttons.forEach((button)=>{
    button.addEventListener("click",singleRound);
});
