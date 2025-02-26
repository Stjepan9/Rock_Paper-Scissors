// PSEUDOCODE

// Input will be taken from player through window alert.
// Computer will randomly generate his option.
// There will be winner for every round.
// There will be 5 rounds played.
// At the end of the game I want the score displayed.



// CODE

const options = ["rock", "paper", "scissors"];


function getComputerChoice(){

    const option = options[Math.floor(Math.random() * options.length)];
    return option;
}

function getPlayerChoice(){
    let input = false;
    while(input == false){
        const choice = window.prompt("Rock Paper Scissors");
        if(choice == null){
            continue;
        }

        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)){
            input = true;
            return choiceInLower;
        }
    }
}


function getWinner(playerChoice, computerChoice){

    if(playerChoice === computerChoice){
        return "TIE"
    }
    else if((playerChoice == "rock" && computerChoice == "scissors")||
            (playerChoice == "paper" && computerChoice == "rock")||
            (playerChoice == "scissors" && computerChoice == "paper")){

            return "Player"
    }
    else{
            return "Computer"
    }
}
        let playerScore = 0;
        let computerScore = 0;

function playRound(playerChoice, computerChoice){
    const result = getWinner(playerChoice, computerChoice)

    if(result == "TIE"){
        return "ITS A TIE"
    }
    else if(result == "Player"){
        return `YOU WIN!  ${playerChoice} beats ${computerChoice}`;
    }
    else{
        return `YOU LOSE!  ${computerChoice} beats ${playerChoice}`; 
    }
}

    function playGame(){
        playerScore = 0;
        computerScore = 0;

        for(let i = 1; i < 5; i++){
            const playerSelection = getPlayerChoice();
            const computerSelection = getComputerChoice();
            alert(playRound(playerSelection, computerSelection));



         if(getWinner(playerSelection, computerSelection) == "Player"){
                playerScore ++;
            }
            else if(getWinner(playerSelection, computerSelection) == "Computer"){
                computerScore++;
            }
        }


        if(playerScore > computerScore){
            alert (`CONGRATULATIONS!! YOU WIN!!`)
        }
        else if(computerScore > playerScore){
            alert(`SORRY! YOU LOSE!!`)
        }else{
            alert(`ITS A TIE!`)
        }

        alert(`FINAL SCORE IS PLAYER: ${playerScore}-${computerScore} COMPUTER`)

    }


playGame();

