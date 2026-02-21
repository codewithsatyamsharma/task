const slot1 = document.getElementById('slot-1');
const slot2 = document.getElementById('slot-2');
const slot3 = document.getElementById('slot-3');
const spinBtn = document.getElementById('spin-btn');
const message = document.getElementById('jackpot-message');

spinBtn.addEventListener('click', () => {
    const num1 = Math.floor(Math.random() * 9) + 1;
    const num2 = Math.floor(Math.random() * 9) + 1;
    const num3 = Math.floor(Math.random() * 9) + 1;

    slot1.textContent = num1;
    slot2.textContent = num2;
    slot3.textContent = num3;

    if (num1 === num2 && num2 === num3) {
        message.textContent = "Jackpot!";
        message.className = "win";
    } else {
        message.textContent = "Try Again";
        message.className = "lose";
    }
});