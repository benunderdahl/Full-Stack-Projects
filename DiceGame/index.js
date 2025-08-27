diceOne = (Math.floor(Math.random() * 6) + 1)
diceTwo = (Math.floor(Math.random() * 6) + 1)

imageOne = document.querySelector(".img1")
imageTwo = document.querySelector(".img2")

imageOne.src = "./images/dice" + diceOne + ".png"
imageTwo.src = "./images/dice" + diceTwo + ".png"
displayWinner = document.querySelector("h1")

if (diceOne > diceTwo) {
    displayWinner.innerHTML = "Player One Wins"
} else if (diceTwo > diceOne) {
    displayWinner.innerHTML = "Player One Wins"
} else {
    displayWinner.innerHTML = "Tie Game"
}