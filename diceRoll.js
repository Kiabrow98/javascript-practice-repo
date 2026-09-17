const findRollButton = document.querySelector("#roll-button");
findRollButton.addEventListener("click", rollDice);

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