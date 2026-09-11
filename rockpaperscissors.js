const getRockButton = document.querySelector("#rock-button");
const getPaperButton = document.querySelector("#paper-button");
const getScissorsButton = document.querySelector("#scissors-button");
const getResult = document.querySelector("#result");


getRockButton.addEventListener("click", showRockButton);
getPaperButton.addEventListener("click", showPaperButton);
getScissorsButton.addEventListener("click", showScissorsButton);

function showRockButton () {
    const computersRoll = generateComputersRoll();
    getResult.value = "You chose Rock!" + "             ";
    getResult.value += `Computer chose ${computersRoll}!`;
    const winner = gameWinner("Rock", computersRoll);
    getResult.value += ` ${winner}`;
}
function showPaperButton () {
    const computersRoll = generateComputersRoll();
    getResult.value = "You chose Paper!" + "             ";
    getResult.value += `Computer chose ${computersRoll}!`;
    const winner = gameWinner("Paper", computersRoll);
    getResult.value += ` ${winner}`;
}
function showScissorsButton () {
    const computersRoll = generateComputersRoll();
    getResult.value = "You chose Scissors!" + "             ";
    getResult.value += `Computer chose ${computersRoll}!`;
    const winner = gameWinner("Scissors", computersRoll);
    getResult.value += ` ${winner}`;
}

function generateComputersRoll () {
    const computersRoll = Math.floor(Math.random() * 3);
    if (computersRoll === 0) {
        return "Rock";
    } else if (computersRoll === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}
function gameWinner (playersChoice, computersChoice) {
    if (playersChoice === computersChoice) {
        return "             " + "Its a tie!";
    } else if (playersChoice === "Rock" && computersChoice === "Scissors") {
        return "             " + "You Win!";
    } else if (playersChoice === "Paper" && computersChoice === "Rock") {
        return "             " + "You Win!";
    } else if (playersChoice === "Scissors" && computersChoice === "Paper") {
        return "You Win!";
    } else {
        return "             " +"Computer Wins!";
    }
}