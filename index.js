//connected html elements to make the page more interactive\\
const playerText = document.querySelector("#playerText");
const computerText = document.querySelector('#computerText');
const resultText = document.querySelector('#resultText');
const choiceBtns = document.querySelectorAll('.choiceBtn');
let player;
let computer;
let result;
let playerScore;
let computerScore;

//picking the player choice and making the game run\\

choiceBtns.forEach(button => button.addEventListener('click' , () => {

    player = button.textContent;
    computerChoice()
    playerText.textContent = `Player:  ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = playRound();

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
    else if 
        (computer == "Rock") {
        return (player == "Paper") ? "You win" : "You lose"
    } 
    else if  
        (computer == "Paper") {
        return (player == "Scissors") ? "You win" : "You lose"
    }  
    else if (computer == "Scissors") {
        return (player == "Rock") ? "You win" : "You lose"
        

}
}
function gameOver () {
    return playerScore === 5 || computerScore === 5
}

