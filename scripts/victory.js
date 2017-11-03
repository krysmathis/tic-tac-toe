const victoryCheck = array => {
    let playerMoves
    let playerName
    if(counter % 2 === 0){
        playerMoves = array[0]
        playerName = "X"
    } else {
        playerMoves = array[1]
        playerName = "O"
    }
    
    switch(true) {
        case playerMoves.includes("1") &&
             playerMoves.includes("2") &&
             playerMoves.includes("3"):
            return playerName
            break;
        case playerMoves.includes("4") &&
             playerMoves.includes("5") &&
             playerMoves.includes("6"):
            return playerName
            break;
        case playerMoves.includes("7") &&
             playerMoves.includes("8") &&
             playerMoves.includes("9"):
            return playerName
            break;
        case playerMoves.includes("1") &&
             playerMoves.includes("4") &&
             playerMoves.includes("7"):
            return playerName
            break;
        case playerMoves.includes("2") &&
             playerMoves.includes("5") &&
             playerMoves.includes("8"):
            return playerName
            break;
        case playerMoves.includes("3") &&
             playerMoves.includes("6") &&
             playerMoves.includes("9"):
            return playerName
            break;
        case playerMoves.includes("1") &&
             playerMoves.includes("5") &&
             playerMoves.includes("9"):
            return playerName
            break;
        case playerMoves.includes("3") &&
             playerMoves.includes("5") &&
             playerMoves.includes("7"):
            return playerName
            break;
        default:
            return "noWin"
            break
    }

}