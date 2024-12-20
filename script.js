console.log("Hello World")

const human=document.querySelector("#human");
const computer=document.querySelector("#computer");

let humanScore=0;
let computerScore=0;
let gameEnd="false";
let totalScore=5;

function getComputerChoice(){
    let choice=Math.random();
    //console.log(choice);
    let answer;
    if(choice>=0 && choice<0.33){
        answer="rock";
    }
    else if(choice>=0.33 && choice<0.66){
        answer="paper";
    }
    else{
        answer="scissors";
    }
    //console.log(answer);
    return answer;
}

const rockBtn=document.querySelector("#rock");
const paperBtn=document.querySelector("#paper");
const scissorsBtn=document.querySelector("#scissors");

rockBtn.addEventListener("click",function(){
    if(gameEnd=="false"){
        playround("rock",getComputerChoice());
        endGame();
    }
    
})

paperBtn.addEventListener("click",function(){
    if(gameEnd=="false"){
        playround("paper",getComputerChoice());
        endGame();
    }
   
})
scissorsBtn.addEventListener("click",function(){
    if(gameEnd=="false"){
        playround("scissors",getComputerChoice());
        endGame();
    }
    
})

//function getHumanChoice(){
    

    // let humanChoice=prompt("Enter your choice(Rock/Paper/Scissors");
    // console.log(humanChoice);
    // humanChoice=humanChoice.toLowerCase();
    // if(humanChoice!= "rock" && humanChoice!= "paper" && humanChoice!= "scissors"){
    //     console.log("Incorrect Input");
    //     return "Incorrect Input";
    // }
    // return humanChoice;
    
//}

function playround(humanChoice,compChoice){
    const roundResult= document.getElementById("roundResult");
    if(compChoice=="rock" && humanChoice=="paper" || compChoice=="paper" && humanChoice=="scissors" || 
        compChoice=="scissors" && humanChoice=="rock"
    )
    {
        //console.log(`Human wins!! ${humanChoice} beats ${compChoice}`);
        roundResult.textContent=`Human wins!! ${humanChoice} beats ${compChoice}`;
        humanScore++;
        human.textContent=`Human: ${humanScore}`;
    }

    else if(compChoice=="paper" && humanChoice=="rock" || compChoice=="scissors" && humanChoice=="paper" ||
        compChoice=="rock" && humanChoice=="scissors"
    ){
        //console.log("Computer wins!! paper beats rock");
        roundResult.textContent=`Computer Wins!! ${compChoice} beats ${humanChoice}`;
        computerScore++;
        computer.textContent=`Computer: ${computerScore}`;
    }
    
    else if(compChoice==humanChoice){
        roundResult.textContent=`Draw!! Both chose ${compChoice}`;
    }
    
    
}
function endGame(){
    
    if(humanScore+computerScore == totalScore){
        gameEnd="true";
        const winner=document.querySelector("#winner");
        if(computerScore>humanScore){
            winner.textContent="Computer wins";
        }
        else{
            winner.textContent="Human wins";
    }
}
    // console.log("Fimal score:");
    // console.log(computerScore);
    // console.log(humanScore);
    // if(computerScore>humanScore){
    //     console.log("Computer wins the game");
    // }
    // else if(computerScore<humanScore){
    //     console.log("Human wins the game");
    // }
    // else{
    //     console.log("draw");
    // }

}
