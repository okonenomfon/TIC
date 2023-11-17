let secretNumber = getRandomNumber(0, 9);
let attempts = 3;

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeGuess() {
    let guessInput = document.getElementById('guess');
    let resultDisplay = document.getElementById('result');
    let correctAnswerDisplay = document.getElementById('correct-answer');

    let guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < 1 || guess > 9) {
        alert('Please enter a number between 1 and 9.');
        return;
    }

    attempts--;

    if (guess === secretNumber) {
        resultDisplay.innerHTML = `Congratulations! You guessed the correct number in ${3 - attempts} attempts!`;
    } else if (attempts > 0) {
        if (guess < secretNumber) {
            resultDisplay.innerHTML = `Your guess is too low. ${attempts} attempts remaining.`;
        } else {
            resultDisplay.innerHTML = `Your guess is too high. ${attempts} attempts remaining.`;
        }
    }

    if (attempts === 0) {
        resultDisplay.innerHTML = `Game over! The correct number was ${secretNumber}.`;
        correctAnswerDisplay.style.display = 'block';
        guessInput.disabled = true;
    }
}
