const diceImage = document.getElementById('dice-image');
diceImage.addEventListener('click', rollDice);

function rollDice() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    diceImage.src = `images/${randomNumber}.png`;
}
