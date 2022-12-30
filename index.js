//connected html elements to make the page more interactive\\
const playerText = document.querySelector("#playerText");
const computerText = document.querySelector('#computerText');
const resultText = document.querySelector('#resultText');
const choiceBtns = document.querySelectorAll('.choiceBtn');
const playerScoreText = document.querySelector('#playerScoreText')
const computerScoreText= document.querySelector('#computerScoreText')
const playAgain= document.querySelector('#restartBtn')
let player;
let computer;
let result;
let playerScore = 0
let computerScore = 0

//picking the player choice and making the game run\\

choiceBtns.forEach(button => button.addEventListener('click' , () => {

    player = button.textContent;
    computerChoice()
    playerText.textContent = `Player:  ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = `Result: ${playRound()}`; 
    playerScoreText.textContent = `Player Score: ${playerScore}`;
    computerScoreText.textContent = `computer Score: ${computerScore}`;
}))


function computerChoice () {
    let choice = Math.floor(Math.random() * 3) + 1;
    switch (choice) {
        case 1:
            computer = 'Rock' 
            break
        case 2:
            computer = 'Paper' 
            break
        case 3:
            computer = 'Scissors' 
            break
    } 
}


//the game logic
function playRound (){
    if (player == computer) {
        return ('Tie');
    } 
    if  (
        (computer == "Scissors" && player == "Rock") ||
        (computer == "Paper" && player == "Scissors") ||
        (computer == "Rock" && player == "Paper")) {
            playerScore++ 
            if (playerScore >= 5) {
                return console.log("Congratulations, you win!")
            }
            return "Player Wins"
    } else  {
        computerScore++
        if (computerScore >= 5) {
            return console.log ("Computer wins")
        }
        return "Computer Wins"
        
    }
} 


//button "play again" refresh page to start a new game 
playAgain.addEventListener('click', refreshPage)

function refreshPage () {
    window.location.reload(true)
}