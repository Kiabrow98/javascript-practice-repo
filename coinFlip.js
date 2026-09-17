const findCoinInput = document.querySelector("#coin-flip-input");
const findCoinButton = document.querySelector("#coin-button");


findCoinButton.addEventListener("click", showHeadsOrTails);


function headsOrTails () {
    const mathRandom = Math.floor(Math.random() * 2);
    if(mathRandom == 0) {
        return "Heads";
    } else {
        return "Tails";
    }
}

function showHeadsOrTails () {
    findCoinInput.value = `Coin: ${headsOrTails()}`;  
}