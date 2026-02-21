const images = [
    "https://picsum.photos/id/1015/200/200",
    "https://picsum.photos/id/1016/200/200",
    "https://picsum.photos/id/1018/200/200",
    "https://picsum.photos/id/1019/200/200",
    "https://picsum.photos/id/1020/200/200",
    "https://picsum.photos/id/1021/200/200"
];

const btn = document.getElementById('add-image-btn');
const container = document.getElementById('gallery-container');

btn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    const imgElement = document.createElement('img');
    
    imgElement.src = images[randomIndex];
    container.appendChild(imgElement);
    
    console.log(imgElement.getAttribute("src"));
});