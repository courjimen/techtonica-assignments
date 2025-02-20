// variables to store
let flipCoinButton = document.getElementById("flip-button");
let backCoin = document.getElementById("tails");
let frontCoin = document.getElementById("heads");
const headsScoreBox = document.getElementById("heads-score");
const tailsScoreBox = document.getElementById("tails-score");

// "flip" my coin
function flip (coinSide) {
    if(coinSide === 1){
        console.log("heads");
        backCoin.style.visibility = "hidden";
        frontCoin.style.visibility = "visible";
    } else {
        console.log("tails")
        backCoin.style.visibility = "visible";
        frontCoin.style.visibility = "hidden";
    } 
}

// Tracking tally
let headsCount = 0;
let tailsCount = 0;

// Upon flip it tallies the amount of heads vs tails
flipCoinButton.addEventListener("click", () => {
    let random = Math.floor(Math.random() * 2 )+ 1;
    if(random === 1){
        headsCount += 1;
        headsScoreBox.innerText = headsCount;
    } else {
        tailsCount +=1;
        tailsScoreBox.innerText = tailsCount;
    }
    flip(random);
})

