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


    var listOptions = ["rock", "paper", "scissors", "lizard", "spock"]
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

let userCurrentScore = 0;
let pcCurrentScore = 0;


function loadPage() {
    document.getElementById("shoot-game").disabled = true;
    console.log("Game Over");
    console.log(userCurrentScore + " " + pcCurrentScore);
    document.getElementById("round-outcome").innerHTML = "GAME OVER";
    // setTimeout(() => {
    //     window.location.assign("outcome.html");
    // }, 3000);
}



function easyMode() {
    let easyChance = Math.floor(Math.random() * 12) + 1;
    let pcOutcome = false;
    let userOutcome = false;
    if (easyChance === 10) {
        document.getElementById("round-outcome").innerHTML = "You draw host chose: " + selectedId;
        let pcChoice = document.getElementsByClassName("selected");

    } else if (easyChance > 10) {
        document.getElementById("round-outcome").innerHTML = "You Lose host chose: ";
        pcCurrentScore = parseInt(document.getElementById("pc-count").innerText);
        document.getElementById("pc-count").innerText = ++pcCurrentScore;
        let pcOutcome = true;


    } else {
        document.getElementById("round-outcome").innerHTML = "You Win!! host chose: ";
        userCurrentScore = parseInt(document.getElementById("your-count").innerText);
        document.getElementById("your-count").innerText = ++userCurrentScore;
        let userOutcome = true;
    }
    let roundCount = parseInt(document.getElementById("round-count").innerText);
    document.getElementById("round-count").innerText = ++roundCount;
    pcResponse(pcOutcome, userOutcome, selectedId);

    // if (roundCount === 5) {
    //     loadPage();
    // }

}
let pcOutcome = false;
let userOutcome = false;

function mediumMode(pcOutcome, userOutcome) {

    let mediumChance = Math.floor(Math.random() * 10) + 1;
    if (mediumChance === 10) {
        document.getElementById("round-outcome").innerHTML = "You draw host chose: " + selectedId;

    } else if (mediumChance % 2 === 0) {
        document.getElementById("round-outcome").innerHTML = "You Lose host chose: ";
        pcCurrentScore = parseInt(document.getElementById("pc-count").innerText);
        document.getElementById("pc-count").innerText = ++pcCurrentScore;
        let pcOutcome = true;

    } else {
        document.getElementById("round-outcome").innerHTML = "You Win!! host chose: ";
        userCurrentScore = parseInt(document.getElementById("your-count").innerText);
        document.getElementById("your-count").innerText = ++userCurrentScore;
        let userOutcome = true;
    }
    let roundCount = parseInt(document.getElementById("round-count").innerText);
    document.getElementById("round-count").innerText = ++roundCount;
    pcResponse(pcOutcome, userOutcome, selectedId);


    // if (roundCount === 5) {
    //     loadPage();
    // }
}

function hardMode() {
    let pcOutcome = false;
    let userOutcome = false;
    let hardChance = Math.floor(Math.random() * 10) + 1;
    if (hardChance == 10) {
        document.getElementById("round-outcome").innerHTML = "You draw host chose: " + selectedId;
    } else if (hardChance >= 7) {
        document.getElementById("round-outcome").innerHTML = "You Win!! host chose: ";
        userCurrentScore = parseInt(document.getElementById("your-count").innerText);
        document.getElementById("your-count").innerText = ++userCurrentScore;
        let userOutcome = true;

    } else {
        document.getElementById("round-outcome").innerHTML = "You Lose host chose: ";
        pcCurrentScore = parseInt(document.getElementById("pc-count").innerText);
        document.getElementById("pc-count").innerText = ++pcCurrentScore;
        let pcOutcome = true;
    }
    let roundCount = parseInt(document.getElementById("round-count").innerText);
    document.getElementById("round-count").innerText = ++roundCount;
    pcResponse(pcOutcome, userOutcome, selectedId);


    if (roundCount === 5) {
        loadPage();
    }
}

function pcResponse(pcOutcome, userOutcome, selectedId) {
    // If the computer won
    console.log(pcOutcome);
    console.log(userOutcome);
    if (pcOutcome === true) {
        if (selectedId === "rock") {
            myList = ["Paper", "Spock"];
            var item = myList[Math.floor(Math.random() * myList.length)];
            document.getElementById("pc-result").innerHTML = item;

        } else if (selectedId === "paper") {
            myList = ["Scissors", "Lizard"];
            var item = myList[Math.floor(Math.random() * myList.length)];
            document.getElementById("pc-result").innerHTML = item;

        } else if (selectedId === "scissors") {
            myList = ["Rock", "Spock"];
            var item = myList[Math.floor(Math.random() * myList.length)];
            document.getElementById("pc-result").innerHTML = item;

        } else if (selectedId === "lizard") {
            myList = ["Scissors", "Rock"];
            var item = myList[Math.floor(Math.random() * myList.length)];
            document.getElementById("pc-result").innerHTML = item;

        } else {
            myList = ["Paper", "Lizard"];
            var item = myList[Math.floor(Math.random() * myList.length)];
            document.getElementById("pc-result").innerHTML = item;
        }
    } else if (userOutcome === true) {
        if (selectedId === "rock") {
            myList = ["Lizard", "Scissors"];
            var item = myList[Math.floor(Math.random() * myList.length)];
            document.getElementById("pc-result").innerHTML = item;

        } else if (selectedId === "paper") {
            myList = ["Rock", "Spock"];
            var item = myList[Math.floor(Math.random() * myList.length)];
            document.getElementById("pc-result").innerHTML = item;

        } else if (selectedId === "scissors") {
            myList = ["Lizard", "Paper"];
            var item = myList[Math.floor(Math.random() * myList.length)];
            document.getElementById("pc-result").innerHTML = item;

        } else if (selectedId === "lizard") {
            myList = ["Spock", "Paper"];
            var item = myList[Math.floor(Math.random() * myList.length)];
            document.getElementById("pc-result").innerHTML = item;

        } else {
            myList = ["Paper", "Lizard"];
            var item = myList[Math.floor(Math.random() * myList.length)];
            document.getElementById("pc-result").innerHTML = item;
        }
    } else {
        console.log("Error happened")
    }

    function againstRock() {
        pcLose = ["scissors", "lizard"];
        pcWin = ["scissors", "lizard"];

        // if
        // let random = Math.floor(Math.random() * pcLose.length);
        // console.log(random, pcLose[random]);
    }

    function againstPaper() {
        pcLose = ["rock", "spock"];
        pcWin = ["rock", "spock"];
        draw = "paper"
    }

    function againstScissors() {
        console.log("sisscors workings")
        pcLose = ["paper", "lizard"];
        pcWin = ["paper", "lizard"];
    }

    function againstLizard() {
        console.log("lizard workings")

        pcLose = ["paper", "spock"];
        pcWin = ["paper", "spock"];
    }

    function againstSpock() {
        pcLose = ["scissors", "rock"];
        pcWin = ["scissors", "rock"];
    }

}