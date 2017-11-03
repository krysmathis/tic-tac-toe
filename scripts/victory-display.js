const victoryDisplay = function(winningArray) {
    winningArray.forEach(block => {
        let box = document.getElementById(`box_${parseInt(block)}`);
        box.className = "board__box--winning";
    })
}