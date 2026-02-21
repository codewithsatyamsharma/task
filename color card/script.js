const button = document.getElementById('generate-btn');
const container = document.getElementById('card-container');
let cardCount = 0;

button.addEventListener('click', () => {
    const card = document.createElement('div');
    card.classList.add('card');

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    card.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    const randomWidth = Math.floor(Math.random() * 151) + 50; 
    const randomHeight = Math.floor(Math.random() * 151) + 50;
    card.style.width = `${randomWidth}px`;
    card.style.height = `${randomHeight}px`;

    cardCount++;
    const uniqueId = `card-${cardCount}-${Date.now()}`;
    card.setAttribute('data-id', uniqueId);

    card.innerHTML = `ID:<br>${uniqueId}`;

    container.appendChild(card);
});