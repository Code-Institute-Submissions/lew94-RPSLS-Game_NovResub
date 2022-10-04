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

    if (gameMode === "easy") {
        easyMode();
    } else {
        alert("Hello")
    }

}


var getSelectedValue = document.querySelector('input[name="season"]+img:checked');
if (document.getElementsByName('game-options').checked) {
    var selectedValue = document.getElementsByName('game-options').value;
    alert("Selected Radio Button is: " + selectedValue);
}

function getItem() {
    var element = document.getElementById("game-set");
    var index = element.tabIndex;
    console.log(element)
}

document.getElementById("game-set").addEventListener("click", function (e) {
    var list = ["rock-option", "paper-option", "scissors-option", "lizard-option", "spock-option"]
    var selectedId = e.target.id;
    for (let item of list) {
        console.log(selectedId)
        if (item !== selectedId) {
            document.getElementById(item).className = "";

        } else {
            document.getElementById(item).className = "selected";

        }
    }
})

function easyMode() {
    console.log("it Worked")
    let easyChance = Math.floor(Math.random() * 10) + 1;
    if (easyChance === 10) {
        console.log("You Lose")
    } else {
        console.log("You Win!!")
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
    let easyChance = Math.floor(Math.random() * 10) + 1;
    if (easyChance >= 9) {
        winRound();
    } else {
        loseRound();
    }
}

// function againstRock() {
//     pcLose = ["scissors", "lizard"];
//     pcWin = ["scissors", "lizard"];

//     if
//     // let random = Math.floor(Math.random() * pcLose.length);
//     // console.log(random, pcLose[random]);
// }

function againstPaper() {
    pcLose = ["rock", "spock"];
    pcWin = ["rock", "spock"];
}

function againstScissors() {
    pcLose = ["paper", "lizard"];
    pcWin = ["paper", "lizard"];
}

function againstLizard() {
    pcLose = ["paper", "spock"];
    pcWin = ["paper", "spock"];
}

function againstSpock() {
    pcLose = ["scissors", "rock"];
    pcWin = ["scissors", "rock"];
}