const container = document.getElementById('box-container');

for (let i = 0; i < 5; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    
    const uniqueId = `box-${i + 1}-${Math.floor(Math.random() * 10000)}`;
    box.setAttribute('data-id', uniqueId);
    box.textContent = `Box ${i + 1}`;

    box.addEventListener('click', function() {
        const clickedId = this.getAttribute('data-id');
        console.log(`Removed box with data-id: ${clickedId}`);
        this.remove();
    });

    container.appendChild(box);
}