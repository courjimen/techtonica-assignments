let flipCoinButton = document.getElementById("flip-button");
let coin = document.querySelector(".coin-container");
const headsScoreBox = document.getElementById("heads-score");
const tailsScoreBox = document.getElementById("tails-score");

let headsCount = 0;
let tailsCount = 0;

// Function to flip the coin with animation
function flip() {
    let isHeads = Math.random() < 0.5; // 50% chance for heads or tails

    if (isHeads) {
        coin.style.transform = "rotateY(0deg)"; // Show heads
        headsCount++;
        headsScoreBox.innerText = headsCount;
    } else {
        coin.style.transform = "rotateY(180deg)"; // Show tails
        tailsCount++;
        tailsScoreBox.innerText = tailsCount;
    }
}

// Event listener for coin flip
flipCoinButton.addEventListener("click", flip);


