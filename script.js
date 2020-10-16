/*
0 - SPRING
1 - SUMMER
2 - AUTUMN
3 - WINTER
*/

let season = 0;

function backSeason() {
    if (season === 0) {
        season = 3;
    } else {
        season--;
    }
    seasonCheck(season);
}

function nextSeason() {
    if (season === 3) {
        season = 0;
    } else {
        season++;
    }
    seasonCheck(season);
}

function seasonCheck(season) {
    var background = document.querySelector('body');
    var title = document.querySelector('h1');
    var backButton = document.querySelector('input#back');
    var nextButton = document.querySelector('input#next');
    var image = document.getElementById('season-image');
    var imgDesc = document.querySelector('p#legend');

    if (season === 0) {
        background.style.backgroundColor = "#DB7093";
        title.innerHTML = `Primavera`;
        title.style.fontFamily = "'Satisfy', cursive";
        title.style.fontSize = "96px";
        backButton.style.backgroundColor = "#FEC9A1";
        nextButton.style.backgroundColor = "#800080";
        image.src = "images/spring.png";
        imgDesc.innerHTML = `Foto de Oleg Magni no Pexels.`
    }

    if (season === 1) {
        background.style.backgroundColor = "#FFD700";
        title.innerHTML = `Verão`;
        title.style.fontFamily = "'Pangolin', cursive";
        title.style.fontSize = "96px";
        backButton.style.backgroundColor = "#F9EFD7";
        nextButton.style.backgroundColor = "#48AEAB";
        image.src = "images/summer.png";
        imgDesc.innerHTML = `Foto de Asad Photo Maldives no Pexels.`
    }

    if (season === 2) {
        background.style.backgroundColor = "#A0522D";
        title.innerHTML = `Outono`;
        title.style.fontFamily = "'Lovers Quarrel', cursive";
        title.style.fontSize = "144px";
        backButton.style.backgroundColor = "#F3D68A";
        nextButton.style.backgroundColor = "#CD853F";
        image.src = "images/auntumn.png";
        imgDesc.innerHTML = `Foto de Irina Iriser no Pexels.`
    }

    if (season === 3) {
        background.style.backgroundColor = "#1E90FF";
        title.innerHTML = `Inverno`;
        title.style.fontFamily = "'Caveat', cursive";
        title.style.fontSize = "96px";
        backButton.style.backgroundColor = "#B0C4DE";
        nextButton.style.backgroundColor = "#000080";
        image.src = "images/winter.png";
        imgDesc.innerHTML = `Foto de Radu Andrei Razvan no Pexels.`
    }
}