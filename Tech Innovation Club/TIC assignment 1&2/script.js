let secretNumber = getRandomNumber(0, 9);
let attempts = 7;

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeGuess() {
    let guess = document.getElementById('guess').value;
    if (guess < 1 || guess > 9) {
        alert('Please enter a number between 0 and 9.');
        return;
    }

    attempts--;

    if (guess == secretNumber) {
        document.getElementById('result').innerHTML = `Congratulations! You guessed the correct number in ${7 - attempts} attempts!`;
    } else if (guess < secretNumber) {
        document.getElementById('result').innerHTML = `Your guess is too low. ${attempts} attempts remaining.`;
    } else if (guess > secretNumber) {
        document.getElementById('result').innerHTML = `Your guess is too high. ${attempts} attempts remaining.`;
    }

    if (attempts === 0) {
        alert('Game over!');
        location.reload();
    }
}