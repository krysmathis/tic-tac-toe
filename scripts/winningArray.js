const buildArray = (x,winningRows) => {
    let builderArray = []
    let matrix = x * x

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

    // you'll do 2 loops through this first through
    // the top row and then down the side rows

    for (let i = 0; i < x; i++) {
        let diagonal1 = []
        let d1 = 1 + i
        for (let index = 0; index < x; index++) {
            diagonal1.push(d1)
            d1 += x + 1
        }
            builderArray.push(diagonal1)
    }

    for (let i = 0; i < x; i++){
        let diagonal2 = []
        let d2 = x - i
        for (let index = 0; index < x; index++) {
            diagonal2.push(d2)
            d2 += x - 1
        }
        builderArray.push(diagonal2)
    }

    const leftColumnMax = 1 + (x*(x-1))
    // start i at 2 because you've already captured it
    for (let i = 1; i < x; i++){
        let diagonal3 = []
        let d3 = x * i + 1
        for (let index = 0; index < x-(i-1); index++) {
            diagonal3.push(d3)
            d3 += x+1
        }
        if (diagonal3.length >= winningRows){
            builderArray.push(diagonal3)
        }
    }

    const rightColumnMax = x*x
    let pass = 0;
    for (let i = 1; i < x; i++){
        let diagonal4 = []
        let d4 = x * i
        for (let index = 0; index < x-(i-1); index++) {
            diagonal4.push(d4)
            d4 += x - 1
            pass++
        }
        if (diagonal4.length >= winningRows){
            builderArray.push(diagonal4)
        }
    }

    let finalWinners = []
    // now generate all the 3 size arrays and add them to the mix
    const miniWins = [];
    if (x > winningRows) {
        builderArray.forEach(a => {
            // if (a[0] === 21) {
            //     debugger
            // }
            const windowSize = x - winningRows
            // if it's already the right length go ahead and add it
            if (a.length === winningRows){
                miniWins.push(a)
            // otherwise scroll through the numbers
            } else if (a.length > winningRows) {
                for (let i = 0; i <= windowSize; i++) {
                    miniArray = a.slice(i, winningRows + i)
                    // do not add any arrays that are smaller than the row size
                    const isEvery = miniArray.every(v=>v<=x*x);
                    const isLength = miniArray.length >= winningRows;
                    if (isLength && isEvery){
                        miniWins.push(miniArray);
                    }
                }
            }
        })
        finalWinners = miniWins.filter(f=> { 
            return f.length === winningRows;
        });
    } else {
        finalWinners = builderArray.filter(f=>f.length === winningRows);
    }
    return finalWinners;
}