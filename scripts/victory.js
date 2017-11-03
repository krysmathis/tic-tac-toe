const victoryCheck = array => {
    
    let winningArray 

    switch(true) {
        case array.includes("1") &&
             array.includes("2") &&
             array.includes("3"):
             winningArray= ["1","2","3"]
            break;
        case array.includes("4") &&
             array.includes("5") &&
             array.includes("6"):
             winningArray= ["4","5","6"]
            break;
        case array.includes("7") &&
             array.includes("8") &&
             array.includes("9"):
             winningArray= ["7","8","9"]
            break;
        case array.includes("1") &&
             array.includes("4") &&
             array.includes("7"):
             winningArray= ["1","4","7"]
            break;
        case array.includes("2") &&
             array.includes("5") &&
             array.includes("8"):
             winningArray= ["2","5","8"]
            break;
        case array.includes("3") &&
             array.includes("6") &&
             array.includes("9"):
             winningArray= ["3","6","9"]
            break;
        case array.includes("1") &&
             array.includes("5") &&
             array.includes("9"):
             winningArray= ["1","5","9"]
            break;
        case array.includes("3") &&
             array.includes("5") &&
             array.includes("7"):
             winningArray= ["3","5","7"]
            break;
        default:
            return null
            break

        }
        
        return winningArray
}