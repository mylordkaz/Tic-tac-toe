const gameBoard =  (() =>{
    let boxes = Array.from(document.getElementsByClassName("box"))
    let space = Array(9).fill(null)
    let playerChoice = "";
    const restartBtn = document.getElementById('restartBtn')

    const start = () => {
        boxes.forEach(box => box.addEventListener('click', boxClicked))
    }
    const boxClicked = (e) => {
        const id = e.target.id

        if(!space[id]){
            space[id] = playerChoice
            e.target.innerText = playerChoice
        }
        
        const oButton = document.getElementById('select-O')
        const xButton = document.getElementById('select-X')
        
        oButton.addEventListener('click', () => {
            playerChoice = 'O'
        })
        xButton.addEventListener('click', () =>{
            playerChoice = 'X'
        })
        return playerChoice
    }
    
    const restart = () => {
        space.fill(null)
        
        boxes.forEach(box => {box.innerText = ''})
        
        playerChoice = ""
    }        
    
    restartBtn.addEventListener('click', restart)

    return {start,
            getPlayerChoice : () => playerChoice,
            restart
        }
    
})()
gameBoard.start()

        
        
        
        
    
    

    