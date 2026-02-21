var body = document.querySelector("body");

body.style.position = "relative";
body.style.height = "100vh";
body.style.backgroundColor = "#fffafa";
body.style.fontFamily = "Arial, sans-serif";
top = "0"   
length = "0";


let div = document.createElement("div");
div.classList.add("container");
div.style.backgroundColor = "#f6c165";
div.style.textAlign = "center";
div.style.padding = "20px";
div.style.borderRadius = "10px";
div.style.width = "30%";
div.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
div.style.height = "40%";
div.style.margin = "50px auto";
div.style.display = "flex";
div.style.flexDirection = "column";
div.style.justifyContent = "center";
div.style.alignItems = "center";
div.style.gap = "30px";
let h1 = document.createElement("h1");
h1.innerText = "Dice Game";

let p1 = document.createElement("p");
p1.innerText = "Player 1";

let p2 = document.createElement("p");
p2.innerText = "Player 2";

let button = document.createElement("button");
button.innerText = "Roll Dice";

button.style.padding = "10px 20px";
button.style.fontSize = "16px";
button.style.cursor = "pointer";
button.style.backgroundColor = "#4CAF50";
button.style.color = "white";
button.style.border = "none";
button.style.borderRadius = "5px";
button.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
button.style.transition = "background-color 0.3s ease";

button.addEventListener("mouseover", function() {
    button.style.backgroundColor = "#45a049";
});

button.addEventListener("mouseout", function() {
    button.style.backgroundColor = "#4CAF50";
});


let winner = document.createElement("h2");
winner.innerText = "Winner:";

div.appendChild(h1);
div.appendChild(p1);
div.appendChild(p2);
div.appendChild(winner);
div.appendChild(button);


body.appendChild(div);

button.addEventListener("click", function() {
    let player1Roll = Math.floor(Math.random() * 6) + 1;
    let player2Roll = Math.floor(Math.random() * 6) + 1;

    p1.innerText = "Player 1: " + player1Roll;
    p2.innerText = "Player 2: " + player2Roll;

    if (player1Roll > player2Roll ) {
        winner.innerText = " Winner: Player 1 Wins!";
    } else if (player2Roll > player1Roll) {
        winner.innerText = "Winner: Player 2 Wins!";
    } else {
        winner.innerText = "It's a Tie!";
    }
}); 