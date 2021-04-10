let cardsnumber = parseInt(prompt("Qual o número de cartas? Número par de 4 a 14"));
let vitoria = 0;
let total = 0;
let imgs = [
    "<img class ='gif disappears' src='imgs/bobrossparrot.gif'>", 
    "<img class ='gif disappears' src='imgs/explodyparrot.gif'>", 
    "<img class ='gif disappears' src='imgs/fiestaparrot.gif'>", 
    "<img class ='gif disappears' src='imgs/metalparrot.gif'>", 
    "<img class ='gif disappears' src='imgs/revertitparrot.gif'>", 
    "<img class ='gif disappears' src='imgs/tripletsparrot.gif'>", 
    "<img class ='gif disappears' src='imgs/unicornparrot.gif'>"
]

let arraycards = [];

while (cardsnumber % 2 != 0 || cardsnumber > 14 || cardsnumber < 4) {
    cardsnumber = parseInt(prompt("Qual o número de cartas? Somente número par entre 4 a 14"));
}


for (let i = 0; i < cardsnumber / 2; i++) {
    arraycards.push(`<li onclick="turn(this)"> <img src="imgs/front.png" alt="papagaio da frente da carta">  
    ${imgs[i]} </li>`);

    arraycards.push(`<li onclick="turn(this)"> <img src="imgs/front.png" alt="papagaio da frente da carta">  
    ${imgs[i]} </li>`);
}

arraycards.sort(randomSort);

console.log(arraycards);

for (let i = 0; i < arraycards.length; i++) {
    let cards = document.querySelector("ul");
    console.log(cards);
    console.log(arraycards[i]);
    cards.innerHTML += `${arraycards[i]}`;
}

function randomSort() {
    return Math.random() - 0.5;
}

let list = [];

function turn(card) {
    const front = card.children[0];
    front.classList.add('disappears');

    const gif = card.children[1];
    console.log(gif);

    gif.classList.remove('disappears');
    gif.classList.add('appears');

    list.push(gif);
    total += 1

    if (list.length == 2) {

        test(list[0], list[1]);
        list = []
    }
}

function test(card1, card2) {
    if (card1.src === card2.src) {
        card1.removeAttribute('onclick');
        win = win + 2;
        console.log(win)
        if (win === cardsnumber) {
            alert("você venceu em " + total + " jogadas")
        }
    } else {
        setTimeout(untap, 1000, card1, card2);
    }
}

function untap(card1, card2) {
    console.log(card1.parentNode)
    card1.parentNode.children[0].classList.remove('disappears');
    card1.parentNode.children[1].classList.remove('appears');
    card1.parentNode.children[1].classList.add('disappears');
    card1.parentNode.children[0].classList.remove('disappears');
    card1.parentNode.children[1].classList.remove('appears');
    card1.parentNode.children[1].classList.add('disappears');
}