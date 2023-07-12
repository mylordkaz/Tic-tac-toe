const gameBoard = (() => {
    let boxes = Array.from(document.getElementsByClassName("box"));
    let space = Array(9).fill(null);
    let player = document.getElementById('playerText');
    let playerChoice = "X";
    let aiChoice = "O";
    let winner = getComputedStyle(document.body).getPropertyValue('--winner');
    const restartBtn = document.getElementById('restartBtn');
    let gameWon = false;
  
    const start = () => {
      boxes.forEach(box => box.addEventListener('click', boxClicked));
    };
  
    const boxClicked = (e) => {
        if (gameWon) return;
      const id = e.target.id;
  
      if (!space[id]) {
        space[id] = playerChoice;
        e.target.innerText = playerChoice;
      }
      if (win() !== false) {
        player.innerHTML = "You win!";
  
        let blocks = win();
        blocks.forEach(box => boxes[box].style.backgroundColor = winner);
        gameWon = true;
        return;
      }
    };
  
    const restart = () => {
      space.fill(null);
      
      boxes.forEach(box => {
        box.innerText = '';
        box.style.backgroundColor = '';
      });
  
      player.innerHTML = 'You play as "X".';
      gameWon = false
    };
  
    restartBtn.addEventListener('click', restart);
  
    const combosWin = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
  
    function win() {
      for (const condition of combosWin) {
        let [a, b, c] = condition;
  
        if (space[a] && (space[a] === space[b] && space[a] === space[c])) {
          return [a, b, c];
        }
      }
      return false;
    }
  
    return {
      start,
      restart
    };
  })();
  
  gameBoard.start();
  





// const oButton = document.getElementById('select-O')
// const xButton = document.getElementById('select-X')

// oButton.addEventListener('click', () => {
//     playerChoice = 'O'
// })
// xButton.addEventListener('click', () =>{
//     playerChoice = 'X'
// })
// return playerChoice


