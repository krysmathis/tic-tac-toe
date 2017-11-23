let boxes = 0;
let playersArray =[[],[]]
let winnerArray = [];
let winningRows = 3;


const generateBoard = function(rows) {
    
    boxes = rows*rows;
    const board = document.querySelector(".board");
    board.className ="board";
    board.innerHTML = "";
    
    // clear the results area
    document.querySelector(".result").innerHTML = "";


    document.querySelector(".result")
    const boxIdGenerator = function*(boxes) {
        let currentId = 1;

        while(currentId <= boxes) {
            yield currentId;
            currentId++;
        }
    }

    const boxIdFactory = boxIdGenerator(boxes);

    for (let i = 0; i < boxes; i++) {
         let box = boxIdFactory.next().value;
         board.innerHTML += `<div class="board__box" id="box_${box}"></div>`;
    }

    //--board-boxes: 4;
    document.documentElement.style.setProperty("--board-boxes", rows);
    //--board-boxes: 4;
    let windowSize = Math.min(window.innerWidth/1.5,window.innerHeight/1.5);

    let boardSize = windowSize/rows;
    let fontSize = 360/rows;
    document.documentElement.style.setProperty("--board-size", boardSize+"px");
    document.documentElement.style.setProperty("--font-size", boardSize-10+"px");



}

initGameBoard();

function initGameBoard() {
    const rowsToWin = document.querySelector(".input__rows").value;
    generateBoard(rowsToWin);
    playersArray =[[],[]];
    winningRows = Math.min(parseInt(document.querySelector(".input__rows-to-win").value),boxes);
    winnerArray = buildArray(Math.sqrt(boxes),winningRows);
}

document.querySelector(".input__btn").addEventListener("click", () => {
    initGameBoard();
})

document.querySelector(".input__rows").addEventListener("change",e=>{
    document.querySelector(".input__rows-to-win").setAttribute("max",e.target.value);
    initGameBoard();
})

document.querySelector(".input__rows-to-win").addEventListener("change",e=>{
    initGameBoard();

})


