let gameMode = false;
let itemPicked = false;

document.addEventListener("DOMContentLoaded", function () {
    console.log("hello");
    var diffModes = ["easy", "medium", "hard"]
    // Gets user game difficulty selection
    document.getElementById("difficulty").addEventListener("click", function (e) {
        difficultyOp = e.target.id;
        for (let gModes of diffModes) {
            console.log(difficultyOp)
            var modeLoop = document.getElementById(gModes);
            if (gModes !== difficultyOp) {
                modeLoop.className = "";
            } else {
                modeLoop.className = "difficulty-selected"
                gameMode = true;
            }

        }
    })

    var listOptions = ["rock-option", "paper-option", "scissors-option", "lizard-option", "spock-option"]
    // Gets user game item selected
    document.getElementById("game-set").addEventListener("click", function (e) {
        selectedId = e.target.id;
        for (let item of listOptions) {
            console.log(selectedId)
            var element = document.getElementById(item);
            if (item !== selectedId) {
                element.className = "";

            } else {
                element.className = "selected";
                itemPicked = true;
            }
        }
    })

})


let checkIfReady = document.getElementById("shoot-game").addEventListener("click", valGame);

function valGame() {
    if (gameMode === true && itemPicked === true) {
        console.log("Game Start")

    } else {
        console.log("Choose an item & or mode")
        console.log(selectedId)
        console.log(difficultyOp)
    }
}


function gameStart(gameMode) {
    console.log(gameMode)


    // if (gameMode === "easy") {
    //     easyMode();
    // } else if (gameMode === "medium") {
    //     mediumMode();
    // } else {
    //     hardMode();
    // }

}




function getItem() {
    var element = document.getElementById("game-set");
    var index = element.tabIndex;
    console.log(element + "getItem")
}





function easyMode() {
    console.log("it Worked")
    let easyChance = Math.floor(Math.random() * 12) + 1;
    if (easyChance === 10) {
        console.log("You Draw")
    } else if (easyChance > 10) {
        console.log("You Lose")
    } else {
        console.log("You Win!!!")
    }
}

function mediumMode() {
    let mediumChance = Math.floor(Math.random() * 10) + 1;
    if (mediumChance === 10) {
        console.log("You Draw")
    } else if (mediumChance % 2 === 0) {
        console.log("You Lose")
    } else {
        console.log("You Win!!")
    }
}

function hardMode() {
    let hardChance = Math.floor(Math.random() * 10) + 1;
    if (hardChance == 10) {
        console.log("You Draw");
    } else if (hardChance >= 7) {
        console.log("You Win!!!");

    } else {
        console.log("You Lose");
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
    draw = "paper"
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