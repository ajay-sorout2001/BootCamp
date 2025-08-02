const cells = document.querySelectorAll('[data-cell]');
const board = document.getElementById('game-board');
const statusText = document.getElementById('statusText');
const restartBtn = document.getElementById('restartBtn');

let currentPlayer = 'X';
let gameActive = true;

const winCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
  [0, 4, 8], [2, 4, 6]             // diagonals
];

function handleClick(e) {
  const cell = e.target;
  if (!gameActive || cell.textContent !== '') return;

  cell.textContent = currentPlayer;
  if (checkWin()) {
    statusText.textContent = `Player ${currentPlayer} wins!`;
    gameActive = false;
    return;
  }

  if (isDraw()) {
    statusText.textContent = `It's a Draw!`;
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  statusText.textContent = `Player ${currentPlayer}'s turn`;
}

function checkWin() {
  return winCombinations.some(combination => {
    return combination.every(index => {
      return cells[index].textContent === currentPlayer;
    });
  });
}

function isDraw() {
  return [...cells].every(cell => cell.textContent !== '');
}

function restartGame() {
  cells.forEach(cell => (cell.textContent = ''));
  currentPlayer = 'X';
  statusText.textContent = `Player ${currentPlayer}'s turn`;
  gameActive = true;
}

cells.forEach(cell => cell.addEventListener('click', handleClick));
restartBtn.addEventListener('click', restartGame);
