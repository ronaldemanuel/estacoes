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
    console.log(season);
    seasonCheck(season);
}

function nextSeason() {
    if (season === 3) {
        season = 0;
    } else {
        season++;
    }
    console.log(season);
    seasonCheck(season);
}

function seasonCheck(season) {
    var background = document.querySelector('body');
    var title = document.querySelector('h1');
    var backButton = document.querySelector('input#back');
    var nextButton = document.querySelector('input#next');
    var image = document.querySelector('img#season-image');

    if (season === 0) {
        background.style.backgroundColor = "#DB7093";
        title.innerHTML = `Primavera`;
        title.style.fontFamily = "'Satisfy', cursive";
        title.style.fontSize = "96px";
    }

    if (season === 1) {
        background.style.backgroundColor = "#FFD700";
        title.innerHTML = `Verão`;
        title.style.fontFamily = "'Pangolin', cursive";
        title.style.fontSize = "96px";
    }

    if (season === 2) {
        background.style.backgroundColor = "#A0522D";
        title.innerHTML = `Outono`;
        title.style.fontFamily = "'Lovers Quarrel', cursive";
        title.style.fontSize = "144px";
    }

    if (season === 3) {
        background.style.backgroundColor = "#1E90FF";
        title.innerHTML = `Inverno`;
        title.style.fontFamily = "'Caveat', cursive";
        title.style.fontSize = "96px";
    }
}