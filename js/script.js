let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

// Contador 

let player1 = 0;
let player2 = 0;

// Adicionando o evento de clicknas boxes
for (let i = 0; i < boxes.length; i++) {

    // Quando alguém clica na caixa
    boxes[i].addEventListener("click", function () {

        let el = checkEl(player1, player2)

        // verifica se já tem X ou O
        if (this.childNodes.length == 0) {
            let cloneEl = el.cloneNode(true);
            this.appendChild(cloneEl);

            if(player1 == player2) {
                player1++;
            } else {
                player2++;
            }
        }

    })
}

// Verifica quem vai jogar

function checkEl(player1, player2) {

    if (player1 == player2) {
        // X
        el = x;
    } else {
        // O
        el = o;
    }

    return el;
}