/*
0 - SPRING - 8 => 11 
1 - SUMMER - 11 => 2
2 - AUTUMN - 2 => 5
3 - WINTER - 5 => 8
*/

let season;

function getSeason() {
    var date = new Date();
    var day = date.getDate() // Day
    var month = date.getMonth() // Month
    
    // Jan, Feb
    if (month === 0 || month === 1) {
        season = 1;
    }
    // Mar
    if (month === 2) {
        if (day < 20) {
            season = 1;
        } else {
            season = 2;
        }
    }
    //Apr, May
    if (month === 3 || month === 4) {
        season = 2;
    }
    // Jun
    if (month === 5) {
        if (day < 21) {
            season = 2;
        } else {
            season = 3;
        }
    }
    // Jul, Aug
    if (month === 6 || month === 7) {
        season = 3;
    }
    // Sep
    if (month === 8) {
        if (day < 23) {
            season = 3;
        } else {
            season = 0;
        }
    }
    // Oct, Nov
    if (month === 9 || month === 10) {
        season = 0;
    }
    // Dec
    if (month === 11) {
        if (day < 21) {
            season = 0;
        } else {
            season = 1;
        }
    }
    seasonDesign(season);
}

function backSeason() {
    if (season === 0) {
        season = 3;
    } else {
        season--;
    }
    seasonDesign(season);
}

function nextSeason() {
    if (season === 3) {
        season = 0;
    } else {
        season++;
    }
    seasonDesign(season);
}

function seasonDesign(season) {
    var background = document.querySelector('body');
    var title = document.querySelector('h1');
    var backButton = document.querySelector('input#back');
    var nextButton = document.querySelector('input#next');
    var image = document.getElementById('season-image');
    var imgDesc = document.querySelector('p#legend');
    var bgAlter = document.querySelector('div.alter-season');
    var btAlter = document.getElementById('alter');

    if (season === 0) {
        background.style.backgroundColor = "#DB7093";
        title.innerHTML = `Primavera`;
        title.style.fontFamily = "'Satisfy', cursive";
        title.style.fontSize = "70px";
        backButton.style.backgroundColor = "#FEC9A1";
        nextButton.style.backgroundColor = "#800080";
        nextButton.style.color = "#FFFFFF";
        image.src = "images/spring.png";
        imgDesc.innerHTML = `Foto de Oleg Magni no Pexels.`;
        bgAlter.style.backgroundColor = "#FEC9A1";
        btAlter.style.backgroundColor = "#800080";
    }

    if (season === 1) {
        background.style.backgroundColor = "#FFD700";
        title.innerHTML = `Verão`;
        title.style.fontFamily = "'Pangolin', cursive";
        title.style.fontSize = "70px";
        backButton.style.backgroundColor = "#F9EFD7";
        nextButton.style.backgroundColor = "#48AEAB";
        nextButton.style.color = "#FFFFFF";
        image.src = "images/summer.png";
        imgDesc.innerHTML = `Foto de Asad Photo Maldives no Pexels.`
        bgAlter.style.backgroundColor = "#F9EFD7";
        btAlter.style.backgroundColor = "#48AEAB";
    }

    if (season === 2) {
        background.style.backgroundColor = "#8B4513";
        title.innerHTML = `Outono`;
        title.style.fontFamily = "'Lovers Quarrel', cursive";
        title.style.fontSize = "100px";
        backButton.style.backgroundColor = "#F3D68A";
        nextButton.style.backgroundColor = "#A0522D";
        nextButton.style.color = "#FFFFFF";
        image.src = "images/auntumn.png";
        imgDesc.innerHTML = `Foto de Irina Iriser no Pexels.`
        bgAlter.style.backgroundColor = "#F3D68A";
        btAlter.style.backgroundColor = "#A0522D";
    }

    if (season === 3) {
        background.style.backgroundColor = "#1E90FF";
        title.innerHTML = `Inverno`;
        title.style.fontFamily = "'Caveat', cursive";
        title.style.fontSize = "96px";
        backButton.style.backgroundColor = "#B0C4DE";
        nextButton.style.backgroundColor = "#000080";
        nextButton.style.color = "#FFFFFF";
        image.src = "images/winter.png";
        imgDesc.innerHTML = `Foto de Radu Andrei Razvan no Pexels.`
        bgAlter.style.backgroundColor = "#B0C4DE";
        btAlter.style.backgroundColor = "#000080";
    }
}

function alterSeason() {
    var selSeason = document.getElementById('select-season');
    var seasonStr = selSeason.value;
    if (seasonStr == season) {
        alert('Estação já ativa! Escolha outra.');
    } else {
        season = parseInt(seasonStr);
        if (season > 3) {
            alert('Selecione uma estação!');
        } else {
            seasonDesign(season);
        }
    }
}