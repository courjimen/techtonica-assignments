//grab the button and store in a variable(flip)
let flipCoinButton = document.getElementById("flip-button");
let backCoin = document.getElementById("tails");
let frontCoin = document.getElementById("heads");
const headsScoreBox = document.getElementById("heads-score");

let headsCount = 0;
// console.log(flipCoinButton);
    // upon click it flips the coin 
flipCoinButton.addEventListener("click", () => {
    // if random === 1 heads
    let random = Math.floor(Math.random() * (2 - 1 + 1) + 1);
    if(random === 1){
        headsCount += 1;
        headsScoreBox.innerText = headsCount;
    }
    flip(random);
})

function flip (side) {
    if(side === 1){
        console.log("heads");
        backCoin.style.visibility = "hidden";
        frontCoin.style.visibility = "visible";
    } else {
        console.log("tails")
        backCoin.style.visibility = "visible";
        frontCoin.style.visibility = "hidden";
    }
}
    // call on the images not the flip function & write a function (if/else format upon on click)
// Make sure score is properly counting the heads & tails

// add button functionality
