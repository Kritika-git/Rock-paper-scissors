console.log("Hello World")
let humanScore=0;
let computerScore=0;

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
    console.log(answer);
    return answer;
}

function getHumanChoice(){
    let humanChoice=prompt("Enter your choice(Rock/Paper/Scissors");
    console.log(humanChoice);
    humanChoice=humanChoice.toLowerCase();
    if(humanChoice!= "rock" && humanChoice!= "paper" && humanChoice!= "scissors"){
        console.log("Incorrect Input");
        return "Incorrect Input";
    }
    return humanChoice;
    
}

function playround(){
    let compChoice=getComputerChoice();
    let humanChoice=getHumanChoice();
    if(compChoice=="rock" && humanChoice=="paper"){
        console.log("Human wins!! paper beats rock");
        humanScore++;
    }
    else if(compChoice=="paper" && humanChoice=="rock"){
        console.log("Computer wins!! paper beats rock");
        computerScore++;
    }
    else if(compChoice=="paper" && humanChoice=="scissors"){
        console.log("Human wins!! scissors beats paper");
        humanScore++;
    }
    else if(compChoice=="scissors" && humanChoice=="paper"){
        console.log("Computer wins!! scissors beats paper");
        computerScore++;
    }
    else if(compChoice=="scissors" && humanChoice=="rock"){
        console.log("Human wins!! rock beats scissors");
        humanScore++;
    }
    else if(compChoice=="rock" && humanChoice=="scissors"){
        console.log("Computer wins!! rock beats scissors");
        computerScore++;
    }
    else if(compChoice==humanChoice){
        console.log("Draw!!!");
    }
    else{
        console.log("Invalid Input");
    }
    console.log(computerScore);
    console.log(humanScore);
}
function playGame(){
    
    for(let i=0;i<5;i++){
        playround();
    }
    console.log("Fimal score:");
    console.log(computerScore);
    console.log(humanScore);
    if(computerScore>humanScore){
        console.log("Computer wins the game");
    }
    else if(computerScore<humanScore){
        console.log("Human wins the game");
    }
    else{
        console.log("draw");
    }

}
playGame();