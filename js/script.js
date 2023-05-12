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

        // verifica quem venceu
        checkWinCondition();

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

// olha quem venceu
function checkWinCondition () {

    let b1 = document.getElementById("block-1");
    let b2 = document.getElementById("block-2");
    let b3 = document.getElementById("block-3");
    let b4 = document.getElementById("block-4");
    let b5 = document.getElementById("block-5");
    let b6 = document.getElementById("block-6");
    let b7 = document.getElementById("block-7");
    let b8 = document.getElementById("block-8");
    let b9 = document.getElementById("block-9");

    // horizontal
    if (b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {

        let b1child = b1.childNodes[0].className;
        let b2child = b2.childNodes[0].className;
        let b3child = b3.childNodes[0].className;

        if (b1child == "x" && b2child == "x" && b3child == "x") {
            // x venceu 
            console.log("É o X")
        } else if (b1child == "o" && b2child == "o" && b3child == "o") {
            // O venceu 
            console.log("É o O")
        }
    }

    if (b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {

        let b4child = b4.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b6child = b6.childNodes[0].className;

        if (b4child == "x" && b5child == "x" && b6child == "x") {
            // x venceu 
            console.log("É o X")
        } else if (b4child == "o" && b5child == "o" && b6child == "o") {
            // O venceu 
            console.log("É o O")
        }
    }

    if (b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {

        let b7child = b7.childNodes[0].className;
        let b8child = b8.childNodes[0].className;
        let b9child = b9.childNodes[0].className;

        if (b7child == "x" && b8child == "x" && b9child == "x") {
            // x venceu 
            console.log("É o X")
        } else if (b7child == "o" && b8child == "o" && b9child == "o") {
            // O venceu 
            console.log("É o O")
        }
    }

    // Vertical 
    if (b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {

        let b1child = b1.childNodes[0].className;
        let b4child = b4.childNodes[0].className;
        let b7child = b7.childNodes[0].className;

        if (b1child == "x" && b4child == "x" && b7child == "x") {
            // x venceu 

            console.log("É o X")
        } else if (b1child == "o" && b4child == "o" && b7child == "o") {
            // O venceu 

            console.log("É o O")
        }
    }

    if (b5.childNodes.length > 0 && b2.childNodes.length > 0 && b8.childNodes.length > 0) {

        let b5child = b5.childNodes[0].className;
        let b2child = b2.childNodes[0].className;
        let b8child = b8.childNodes[0].className;

        if (b5child == "x" && b2child == "x" && b8child == "x") {
            // x venceu 

            console.log("É o X")
        } else if (b5child == "o" && b2child == "o" && b8child == "o") {
            // O venceu 

            console.log("É o O")
        }
    }

    if (b6.childNodes.length > 0 && b9.childNodes.length > 0 && b3.childNodes.length > 0) {

        let b6child = b6.childNodes[0].className;
        let b9child = b9.childNodes[0].className;
        let b3child = b3.childNodes[0].className;

        if (b6child == "x" && b9child == "x" && b3child == "x") {
            // x venceu 

            console.log("É o X")
        } else if (b6child == "o" && b9child == "o" && b3child == "o") {
            // O venceu 

            console.log("É o O")
        }
    }

    // Diagonal
    if (b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {

        let b1child = b1.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b9child = b9.childNodes[0].className;

        if (b1child == "x" && b5child == "x" && b9child == "x") {
            // x venceu 

            console.log("É o X")
        } else if (b1child == "o" && b5child == "o" && b9child == "o") {
            // O venceu 

            console.log("É o O")
        }

    }
    
    if (b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {

        let b3child = b3.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b7child = b7.childNodes[0].className;

        if (b3child == "x" && b5child == "x" && b7child == "x") {
            // x venceu 

            console.log("É o X")
        } else if (b3child == "o" && b5child == "o" && b7child == "o") {
            // O venceu 

            console.log("É o O")
        }
    }

    // Deu velha
    let couter = 0

    for(i=0; i < boxes.length; i++) {
        if (boxes[i].childNodes[0] != undefined) {
            couter++;
        }

        if (couter == 9) {
            console.log("deu Velha")
        }
    }
}