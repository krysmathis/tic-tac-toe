const buildArray = (x,winningRows) => {
    let builderArray = []

    for (let index = 0; index < x; index++) {
        let counter = x * index + 1
        let winningArray = []

        for (let index = 0; index < x; index++) {
            winningArray.push(counter + index)
        }

        builderArray.push(winningArray)
    }

    for (let index = 0; index < x; index++) {
        let counter = index + 1
        let winningArray = []

        for (let index = 0; index < x; index++) {
            winningArray.push(counter + (index * x))
        }

        builderArray.push(winningArray)
    }

    let diagonal1 = []
    let d1 = 1
    for (let index = 0; index < x; index++) {
        diagonal1.push(d1)
        d1 += x + 1
    }
    builderArray.push(diagonal1)

    let diagonal2 = []
    let d2 = x
    for (let index = 0; index < x; index++) {
        diagonal2.push(d2)
        d2 += x - 1
    }
    builderArray.push(diagonal2)

    // now generate all the 3 size arrays and add them to the mix
    const miniWins = [];
    const windowSize = x - winningRows
    if (x > winningRows) {
        builderArray.forEach(a => {
            for (let i = 0; i < windowSize; i++) {
                miniWins.push(a.slice(i, winningRows + i));
            }
        })
        //winnerArray = winnerArray.map(e=> e.toString());
        return miniWins;
    } else {
        return builderArray;
    }
}