let boxcards = document.querySelector(".boxcards");

let cardsnumber = prompt("Qual o número de cartas? Número par de 4 a 14");


while (cardsnumber % 2 != 0 || cardsnumber > 14 || cardsnumber < 4) {
    cardsnumber = prompt("Qual o número de cartas? Somente número par entre 4 a 14");
}

let imgs = []
imgs[0] = "imgs/bobrossparrot"
imgs[1] = "imgs/explodyparrot.gif"
imgs[3] = "imgs/fiestaparrot.gif"
imgs[4] = "imgs/metalparrot.gif"
imgs[5] = "imgs/revertitparrot.gif"
imgs[6] = "imgs/tripletsparrot.gif"
imgs[7] = "imgs/tripletsparrot.gif";


let foldedImgs = [];
let arraycards = [];


for (let i = 0; i < cardsnumber / 2; i++) {
    foldedImgs.push(imgs[i]);
    foldedImgs.push(imgs[i]);
}

  foldedImgs.sort(randomSort);

for (let i = 0; i < cardsnumber/2; i++) {
    arraycards.push(`<div class="card"> 
    <img onclick="changeimg(this)" id="${foldedImgs[i]}" src="imgs/front.png" 
    alt="papagaio da frente da carta"> </div>`);

    arraycards.push(`<div class="card"> 
    <img onclick="changeimg(this)" id="${foldedImgs[i]}" src="imgs/front.png" 
    alt="papagaio da frente da carta"> </div>`);
}

arraycards.sort(randomSort);

console.log(arraycards);

function changeimg(imagemcard) {
    imagemcard.setAttribute('src', imagemcard.id);
}


function newboxcards() {
    boxcards.innerHTML += `${boxcards.innerHTML}`;
}

newboxcards();


function randomSort() {
    return Math.random() - 0.5;
}