//connected html elements to make the game run\\
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
    openEndGame (playerScore, computerScore)
    playerText.textContent = `Player:  ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = `Result: ${playRound()}`; 
    playerScoreText.textContent = `Player Score: ${playerScore}`;
    computerScoreText.textContent = `Computer Score: ${computerScore}`;
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
                return "Player won the battle"
                
                
            }
            if (playerScore <= 5) {
                return `Player Wins, ${player} beat ${computer} `
            }
    } else  {
        computerScore++
        if (computerScore >= 5) {
            return "Computer won the battle"
            
        }
        if (computerScore <= 5) {
        return `Computer Wins, ${computer} beat ${player}`
            }
        
    }
} 

//button "play again" refresh page to start a new game 
playAgain.addEventListener('click', restartGame)

function restartGame () {
    playerScore = 0
    computerScore = 0
}


//adding some loop effect to stop the game 


// adding more interactive items 

const endGameText = document.getElementById("endgameText")
const endMessage = document.getElementById ("endMessage")
const restartBtn = document.getElementById("restartBtn")
const overlay = document.getElementById("overlay")

function openEndGame (playerScore, computerScore) {
    if (playerScore >=5) {
        endGameText.classList.add('active')
        overlay.classList.add('active')
    }
    else if (computerScore >=5) {
        endGameText.classList.add('active')
        overlay.classList.add('active')
    }
}

function closeEndGame () {
    endGameText.classList.remove('active')
    overlay.classList.remove('active')
}