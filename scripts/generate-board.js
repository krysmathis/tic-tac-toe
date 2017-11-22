let boxes = 0;
let playersArray =[[],[]]

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

generateBoard(3);

document.querySelector(".input__btn").addEventListener("click", () => {
    const rows = document.querySelector(".input__rows").value;
    generateBoard(rows);
    playersArray =[[],[]];
})


