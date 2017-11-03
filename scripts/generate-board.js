const generateBoard = function() {
    
    const board = document.querySelector(".board");

    const boxIdGenerator = function*() {
        let currentId = 1;

        while(currentId <= 9) {
            yield currentId;
            currentId++;
        }
    }

    const boxIdFactory = boxIdGenerator();

    for (let i = 0; i < 9; i++) {
         let box = boxIdFactory.next().value;
         board.innerHTML += `<div class="board__box" id="box_${box}"></div>`;
    }

}

generateBoard();


