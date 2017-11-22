const victoryCheck = (array,boxes,winnerArray) => {
    
    let winningArray = null
    
    for (let index = 0; index < winnerArray.length; index++) {
        let element = winnerArray[index]
        if (element.every(id => array.includes(id.toString()))) {
            winningArray = element
            break;
        }
    }

    return winningArray
    
}