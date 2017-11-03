{
    document.getElementById('board').addEventListener("click", clickBox)

    const playersArray =[[],[]]

    const clickBox = event => {

        const boxId = event.target.id.split('_')[1]
        const concatedPlayersArray = playersArray[0].concat(playersArray[1])

        if (concatedPlayersArray.includes(boxId) === false) {

            let counter = concatedPlayersArray.length

            let currentPlayer = (counter.length % 2 === 0 ? {'player':'X', 'arrayIndex': 0, 'color': 'red'} : {'player':'O', 'arrayIndex': 1, 'color': 'blue'})

            playersArray[currentPlayer.arrayIndex].push(boxId)

            writeXO (boxId, currentPlayer)

            let result = victoryCheck(playersArray)
            
            if (result) {
                displayResult(result)
            } else if (counter === 8) {
                displayResult()
            }
        }
    }

    const writeXO = (id, player) => {
        const box = document.getElementById(`box_${id}`)
        box.className += ` ${player.color}`
        box.innerHTML = `${player.player}`
    }
}