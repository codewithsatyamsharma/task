const progressFill = document.getElementById('progress-fill');
const progressBtn = document.getElementById('progress-btn');
let currentProgress = 0;

progressBtn.addEventListener('click', () => {
    const randomIncrease = Math.floor(Math.random() * 21) + 10;
    
    currentProgress += randomIncrease;

    if (currentProgress >= 100) {
        currentProgress = 100;
        progressBtn.disabled = true;
        progressBtn.textContent = "Completed";
    }

    progressFill.style.width = `${currentProgress}%`;
    progressFill.textContent = `${currentProgress}%`;
});