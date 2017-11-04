const buildArray = x => {
    winnerArray = []

    for (let index = 0; index < x; index++) {
        let counter = x*index+1
        let winningArray = []

        for (let index = 0; index < x; index++) {
            winningArray.push(counter+index)
        }
        
        winnerArray.push(winningArray)
    }

    for (let index = 0; index < x; index++) {
        let counter = index+1
        let winningArray = []

        for (let index = 0; index < x; index++) {
            winningArray.push(counter+(index*x))
        }
        
        winnerArray.push(winningArray)
    }

    let diagonal1 = []
    let d1 = 1
    for (let index = 0; index < x; index++) {
        diagonal1.push(d1)
        d1 += x+1        
    }
    winnerArray.push(diagonal1)

    let diagonal2 = []
    let d2 = x
    for (let index = 0; index < x; index++) {
        diagonal2.push(d2)
        d2 += x-1        
    }
    winnerArray.push(diagonal2)
    //winnerArray = winnerArray.map(e=> e.toString());
    return winnerArray
}