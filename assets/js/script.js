document.addEventListener("DOMContentLoaded", function () {

    console.log("Dom loaded");
    checkTrue();

});

function checkTrue() {
    var diffModes = ["easy", "medium", "hard"];
    var gameMode = false;
    var itemPicked = false;
    // Gets user game difficulty selection
    document.getElementById("difficulty").addEventListener("click", function (e) {
        difficultyOp = e.target.id;
        for (let gModes of diffModes) {
            var modeLoop = document.getElementById(gModes);
            if (gModes !== difficultyOp) {
                modeLoop.className = "";
            } else {
                modeLoop.className = "difficulty-selected";
                gameMode = true;
            }
        }
    });


    var listOptions = ["rock", "paper", "scissors", "lizard", "spock"];
    // Gets user game item selected
    document.getElementById("game-set").addEventListener("click", function (e) {
        selectedId = e.target.id;
        for (var item of listOptions) {
            var element = document.getElementById(item);
            if (item !== selectedId) {
                element.className = "";

            } else {
                element.className = "selected";
                itemPicked = true;

            }
        }
    });


    document.getElementById("shoot-game").addEventListener("click", valGame);
    // Check if game mode and items selected
    function valGame(selectedId) {
        if (gameMode === true && itemPicked === true) {
            console.log("Game Start user has set " + selectedId + " " + difficultyOp);
            gameStart(selectedId, difficultyOp);
            let lockMode = document.getElementById("round-count");
            let lockButtons = document.getElementById("difficulty");
            if (lockMode > 0) {
                lockButtons.disabled = true;
            }

        } else {
            if (gameMode === true && itemPicked === false) {
                document.getElementById("pc-result").innerHTML = "game item is not selected";
            } else if (gameMode === false && itemPicked === true) {
                document.getElementById("pc-result").innerHTML = "game Mode is not selected";
            } else {
                document.getElementById("pc-result").innerHTML = "Select game mode and game item";
            }
        }
    }

}
// Checks the Game mode
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
    document.getElementById("easy").disabled = true;
    document.getElementById("medium").disabled = true;
    document.getElementById("hard").disabled = true;
}

let userCurrentScore = 0;
let pcCurrentScore = 0;

// outputs page messages
function loadPage(userCurrentScore, pcCurrentScore) {
    document.getElementById("pc-result").style.visibility = "hidden"
    document.getElementById("shoot-game").disabled = true;
    console.log("Game Over");
    console.log(userCurrentScore + " " + pcCurrentScore);
    document.getElementById("round-outcome").innerHTML = "GAME OVER";
    if (userCurrentScore > pcCurrentScore) {
        document.getElementById("game-over-message").innerHTML = "Well done You Won the Game!!";
        document.getElementById("win-link").innerHTML = "Click here For Your Prize, Congratulations";
    } else if (pcCurrentScore > userCurrentScore) {
        document.getElementById("game-over-message").innerHTML = "Unlucky, Computer Won the Game";
    } else {
        document.getElementById("game-over-message").innerHTML = "It's a draw, you both win";

    }

}


// Game modes
function easyMode() {
    let easyChance = Math.floor(Math.random() * 12) + 1;
    let pcOutcome = false;
    let userOutcome = false;
    if (easyChance === 10) {
        document.getElementById("pc-result").innerHTML = "";
        document.getElementById("round-outcome").innerHTML = "You drew this round host chose: " + selectedId;
        document.getElementById("pc-result").innerText("");
        pcChoice = document.getElementsByClassName("selected");


    } else if (easyChance > 10) {
        document.getElementById("round-outcome").innerHTML = "You Lost this round host chose: ";
        pcCurrentScore = parseInt(document.getElementById("pc-count").innerText);
        document.getElementById("pc-count").innerText = ++pcCurrentScore;
        pcOutcome = true;


    } else {
        document.getElementById("round-outcome").innerHTML = "You Win this round!! host chose: ";
        userCurrentScore = parseInt(document.getElementById("your-count").innerText);
        document.getElementById("your-count").innerText = ++userCurrentScore;
        userOutcome = true;
    }
    let roundCount = parseInt(document.getElementById("round-count").innerText);
    document.getElementById("round-count").innerText = ++roundCount;
    pcResponse(pcOutcome, userOutcome, selectedId);


    if (roundCount === 5) {
        loadPage(userCurrentScore, pcCurrentScore);
    }


}
let pcOutcome = false;


function mediumMode(pcOutcome, userOutcome) {

    let mediumChance = Math.floor(Math.random() * 10) + 1;
    if (mediumChance === 10) {
        document.getElementById("round-outcome").innerHTML = "You drew this round host chose: " + selectedId;

    } else if (mediumChance % 2 === 0) {
        document.getElementById("round-outcome").innerHTML = "You Lost this round host chose: ";
        pcCurrentScore = parseInt(document.getElementById("pc-count").innerText);
        document.getElementById("pc-count").innerText = ++pcCurrentScore;
        pcOutcome = true;

    } else {
        document.getElementById("round-outcome").innerHTML = "You Win this round!! host chose: ";
        userCurrentScore = parseInt(document.getElementById("your-count").innerText);
        document.getElementById("your-count").innerText = ++userCurrentScore;
        userOutcome = true;
    }
    let roundCount = parseInt(document.getElementById("round-count").innerText);
    document.getElementById("round-count").innerText = ++roundCount;
    pcResponse(pcOutcome, userOutcome, selectedId);


    if (roundCount === 5) {
        loadPage();
    }
}

function hardMode() {
    let pcOutcome = false;
    let userOutcome = false;
    let hardChance = Math.floor(Math.random() * 10) + 1;
    if (hardChance == 10) {
        document.getElementById("round-outcome").innerHTML = "You drew this round host chose: " + selectedId;
    } else if (hardChance >= 7) {
        document.getElementById("round-outcome").innerHTML = "You Win this round!! host chose: ";
        userCurrentScore = parseInt(document.getElementById("your-count").innerText);
        document.getElementById("your-count").innerText = ++userCurrentScore;
        userOutcome = true;

    } else {
        document.getElementById("round-outcome").innerHTML = "You Lost this round host chose: ";
        pcCurrentScore = parseInt(document.getElementById("pc-count").innerText);
        document.getElementById("pc-count").innerText = ++pcCurrentScore;
        pcOutcome = true;
    }
    let roundCount = parseInt(document.getElementById("round-count").innerText);
    document.getElementById("round-count").innerText = ++roundCount;
    pcResponse(pcOutcome, userOutcome, selectedId);


    if (roundCount === 5) {
        loadPage();
    }
}
// Outputs the PC response based on logic outcome
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
        console.log("Error happened");
    }
}