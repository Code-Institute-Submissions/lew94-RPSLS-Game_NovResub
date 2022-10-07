document.addEventListener("DOMContentLoaded", function () {

    console.log("Dom loaded");
    checkTrue();

})

function checkTrue() {
    var diffModes = ["easy", "medium", "hard"]
    let gameMode = false;
    let itemPicked = false;
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


    document.getElementById("shoot-game").addEventListener("click", valGame);

    function valGame() {
        if (gameMode === true && itemPicked === true) {
            console.log("Game Start user has set " + selectedId + " " + difficultyOp);
            gameStart(selectedId, difficultyOp);



        } else {
            if (gameMode === true && itemPicked === false) {
                console.log("game item is not selected")
            } else if (gameMode === false && itemPicked === true) {
                console.log("User not selected game difficulty")
            } else {
                console.log("Select game diffuclty and your game item")
            }
        }
    }

}

function gameStart(selectedId, difficultyOp) {

    if (difficultyOp === "easy") {
        easyMode();
    } else if (difficultyOp === "medium") {
        mediumMode();
    } else if (difficultyOp === "hard") {
        hardMode();
    } else {
        console.log("something went wrong")
    }

}


function easyMode() {
    let easyChance = Math.floor(Math.random() * 12) + 1;
    let currentScore = 0;
    if (easyChance === 10) {
        console.log("You Draw")
    } else if (easyChance > 10) {
        console.log("You Lose")
        let pcCurrentScore = parseInt(document.getElementById("pc-count").innerText);
        document.getElementById("pc-count").innerText = ++pcCurrentScore;

    } else {
        console.log("You Win!!!")
        let currentScore = parseInt(document.getElementById("your-count").innerText);
        document.getElementById("your-count").innerText = ++currentScore;
    }
    let roundCount = parseInt(document.getElementById("round-count").innerText);
    document.getElementById("round-count").innerText = ++roundCount;

    if (roundCount === 5) {
        console.log("Game Over")
        // setTimeout(() => {
        //     window.location.assign("outcome.html");
        // }, 3000);
        document.getElementById("your-final").innerText = currentScore;
        console.log(currentScore)
        // parseInt(document.getElementById("your-final").innerText = currentScore);
        // parseInt(document.getElementById("pc-final").innerText = currentScore);
        // document.getElementById("pc-final") = pcCurrentScore;
    }

}

function mediumMode() {
    let mediumChance = Math.floor(Math.random() * 10) + 1;
    if (mediumChance === 10) {
        console.log("You Draw")
    } else if (mediumChance % 2 === 0) {
        console.log("You Lose")
        let pcCurrentScore = parseInt(document.getElementById("pc-count").innerText);
        document.getElementById("pc-count").innerText = ++pcCurrentScore;
    } else {
        console.log("You Win!!")
        let currentScore = parseInt(document.getElementById("your-count").innerText);
        document.getElementById("your-count").innerText = ++currentScore;
    }
    let roundCount = parseInt(document.getElementById("round-count").innerText);
    document.getElementById("round-count").innerText = ++roundCount;

    if (roundCount === 5) {
        console.log("Game Over")
        // window.location.assign("outcome.html");
    }
}

function hardMode() {
    let hardChance = Math.floor(Math.random() * 10) + 1;
    if (hardChance == 10) {
        console.log("You Draw");
    } else if (hardChance >= 7) {
        console.log("You Win!!!");
        let currentScore = parseInt(document.getElementById("your-count").innerText);
        document.getElementById("your-count").innerText = ++currentScore;

    } else {
        console.log("You Lose");
        let pcCurrentScore = parseInt(document.getElementById("pc-count").innerText);
        document.getElementById("pc-count").innerText = ++pcCurrentScore;
    }
    let roundCount = parseInt(document.getElementById("round-count").innerText);
    document.getElementById("round-count").innerText = ++roundCount;

    if (roundCount === 5) {
        console.log("Game Over")
        // window.location.assign("outcome.html");
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