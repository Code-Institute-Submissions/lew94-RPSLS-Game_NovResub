document.addEventListener("DOMContentLoaded", function () {
    let boot = document.getElementsByClassName("game-buttons");


    for (let mode of boot) {

        mode.addEventListener("click", function () {
            if (this.getAttribute("name") === "easy") {
                let gameMode = this.getAttribute("name");
                gameStart(gameMode);
            } else if (this.getAttribute("name") === "medium") {
                let gameMode = this.getAttribute("name");
                gameStart(gameMode);

            } else {
                let gameMode = this.getAttribute("name");
                gameStart(gameMode)
            }
        })
    }


})

function gameStart(gameMode) {
    console.log(gameMode)


}


var getSelectedValue = document.querySelector('input[name="season"]+img:checked');
if (document.getElementsByName('game-options').checked) {
    var selectedValue = document.getElementsByName('game-options').value;
    alert("Selected Radio Button is: " + selectedValue);
}



function easyMode() {
    let easyChance = math.floor(Math.random() * 10) + 1;
    if (easyChance === 10) {
        loseRound();
    } else {
        winRound();
    }
}

function mediumMode() {
    let easyChance = math.floor(Math.random() * 10) + 1;
    if (easyChance % 2 === 0) {
        loseRound();
    } else {
        winRound();
    }
}

function hardMode() {
    let easyChance = math.floor(Math.random() * 10) + 1;
    if (easyChance >= 9) {
        winRound();
    } else {
        loseRound();
    }
}