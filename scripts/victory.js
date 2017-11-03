let winnerArray;

const victoryCheck = (array,boxes) => {
    
    let winningArray = null


    const winnerArray = buildArray(boxes);
    
    for (let index = 0; index < winnerArray.length; index++) {
        let element = winnerArray[index]
        if (element.every(id => array.includes(id))){
            winningArray = element
            break;
        }
    }

    console.log(winningArray)
    return winningArray
    
}