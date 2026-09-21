const findRollButton = document.querySelector("#roll-button");
const findFinalScoreInput = document.querySelector("#final-score");
const findClearButton = document.querySelector("#clear-button");
findRollButton.addEventListener("click", diceInput);
findClearButton.addEventListener("click", zeroClearButton);
function rollDice () {
    const randomNumber = Math.floor(Math.random() * 6);
    if(randomNumber === 0) {
        return "1"
    } else if (randomNumber === 1) {
        return "2"
    } else if (randomNumber === 2) {
        return "3"
    } else if(randomNumber === 3) {
        return "4"
    } else if(randomNumber === 4) {
        return "5"
    } else {
        return "6"
    }
}

function diceInput () {
    findFinalScoreInput.value = `${rollDice()}`;
}

function zeroClearButton () {
    findFinalScoreInput.value = `${"0"}`;
}