const inputField = document.getElementById('user-number');
const playBtn = document.getElementById('play-btn');
const resultDiv = document.getElementById('result');

playBtn.addEventListener('click', () => {
    const userValue = parseInt(inputField.value);

    if (isNaN(userValue) || userValue < 1 || userValue > 50) {
        resultDiv.textContent = "Please enter a valid number between 1 and 50.";
        resultDiv.className = "lose";
        return;
    }

    const winningNumber = Math.ceil(Math.random() * 50);

    if (userValue === winningNumber) {
        resultDiv.textContent = `Winning Number: ${winningNumber}. You Won!`;
        resultDiv.className = "win";
    } else {
        resultDiv.textContent = `Winning Number: ${winningNumber}. Try Again.`;
        resultDiv.className = "lose";
    }
});