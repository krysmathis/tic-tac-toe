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
        displayWinner(winner.player, winner.color)
    }

}

const displayTie = function() {
    const area = document.querySelector(".result")

    area.innerHTML = `
        <h1>The Game Ended In A Tie!</h1>
        <button id="play-again">Play Again</button>
    `

}

const displayWinner = function(winner, color) {
    
    const area = document.querySelector(".result")
    
        area.innerHTML = `
            <h1>${winner}  Wins!</h1>
            <button id="play-again">Play Again</button>
        `
        area.style.background = color;
}

const resetPlayers = function() {
    console.log("code reset players");
    playersArray = [[],[]]
}

const resetGame = function() {
    document.querySelector(".result").style.display = "none";
    generateBoard();
    resetPlayers();
}

document.querySelector("body").addEventListener("click", function(event) {
    if (event.target.id === "play-again") {
        resetGame();
    }
})
