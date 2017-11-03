// function that display result
//{"player":"X", "arrayIndex": 0, "color": "red"} : {"player":"O", "arrayIndex": 1, "color": "blue"}

const displayResult = function(winner) {
     document.querySelector(".result").style.display = "block";

    if (!winner) {
        // it's a tie
        displayTie();
        console.log("a tie!")
    }
    else {
        // the winner is winner.player -- winner.color
    }

}

const displayTie = function() {
    const area = document.querySelector(".result")

    area.innerHTML = `
        <h1>The Game Ended In A Tie!</h1>
        <button id="play-again">Play Again</button>
    `

}

document.querySelector("body").addEventListener("click", function(event) {
    if (event.target.id === "play-again") {
        resetGame();
    }
})

const resetPlayers = function() {
    console.log("code reset players");
}

const resetGame = function() {
    document.querySelector(".result").style.display = "none";
    generateBoard();
    resetPlayers();
}

