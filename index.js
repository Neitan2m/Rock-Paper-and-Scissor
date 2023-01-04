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
    playerText.textContent = `Player:  ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = `Result: ${playRound()}`; 
    playerScoreText.textContent = `Player Score: ${playerScore}`;
    computerScoreText.textContent = `Computer Score: ${computerScore}`;
}))

function endGame () {
    if (playerScore >= 5) {
        openEndGame (playerScore, computerScore)
        return showEndMessage ()
    } else if (computerScore >= 5) {
        openEndGame (playerScore, computerScore)
        return showEndMessage ()
    }
}

function computerChoice () {
    let choice = Math.floor(Math.random() * 3) + 1;
    switch (choice) {
        case 1:
            computer = 'Pedra' 
            break
        case 2:
            computer = 'Papel' 
            break
        case 3:
            computer = 'Tesoura' 
            break
    } 
}
//the game logic
function playRound (){
    if (player == computer) {
        return ('Empate, boboca');
    } 
    if  (
        (computer == "Tesoura" && player == "Pedra") ||
        (computer == "Papel" && player == "Tesoura") ||
        (computer == "Pedra" && player == "Papel")) {
            playerScore++ 
            if (playerScore >= 5) {
                return endGame()
                
                
            }
            if (playerScore < 5) {
                return `Você ganhou, ${player} detona ${computer} `
            }
    } else  {
        computerScore++
        if (computerScore >= 5) {
            return endGame()
            
        }
        if (computerScore < 5) {
        return `Computador ganhou HEHEHE, ${computer} detona ${player}`
            }
        
    }
} 

// adding more interactive items 

const endGameText = document.getElementById("endgameText")
const endMessage = document.getElementById ("endMessage")
const restartBtn = document.getElementById("restartBtn")
const overlay = document.getElementById("overlay")

function openEndGame (playerScore, computerScore) {
    if (playerScore >= 5) {
        endGameText.classList.add('active')
        overlay.classList.add('active')
    }
    else if (computerScore >= 5) {
        endGameText.classList.add('active')
        overlay.classList.add('active')
    }
}

function closeEndGame () {
    endGameText.classList.remove('active')
    overlay.classList.remove('active')
}

function showEndMessage () {
    if (playerScore > computerScore) {
     return(endMessage.textContent = "Mas tu é braba mesmo ein")
    } 
    else if (playerScore < computerScore) {
      return (endMessage.textContent = "KKKKK PERDEU!")
    }
}

restartBtn.addEventListener('click', restartGame)

function restartGame () {
    closeEndGame ();
    playerScore = 0
    computerScore = 0
    playerScoreText.textContent = `Player Score: ${playerScore}`;
    computerScoreText.textContent = `Computer Score: ${computerScore}`;
    playerText.textContent = `Player: `;
    computerText.textContent = `Computer: `;
    resultText.textContent = `Result: `; 

}
