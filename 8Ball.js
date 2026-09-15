const shakeButton = document.querySelector("#shake-button");
const resultsInput = document.querySelector("#result");

pressShakeButton.addEventListener("click", showResultsInput);


function getButtonFunction () {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "Don't count on it";
    } else if (randomNumber === 1) {
        return "Yes Definitely";
    } else {
        return "Ask again later";
    }
}

function showResultsInput () {
    resultsInput.value = `Answer: ${getButtonFunction()}`; 
}

