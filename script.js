// JavaScript file for Responsive Tic Tac Toe app logic

let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];

function handleCellClick(index) {
    if (!board[index] && !isGameFinished()) {
        board[index] = currentPlayer;
        renderBoard();

        if (checkWinner()) {
            showWinnerPopup(`Player ${currentPlayer} wins!`);
        } else if (isBoardFull()) {
            showWinnerPopup('It\'s a tie!');
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function renderBoard() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell, index) => {
        cell.textContent = board[index];
    });
}

function isGameFinished() {
    return checkWinner() || isBoardFull();
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }

    return false;
}

function isBoardFull() {
    return !board.includes('');
}

function showWinnerPopup(message) {
    const popup = document.getElementById('winner-popup');
    const winnerMessage = document.getElementById('winner-message');
    winnerMessage.textContent = message;
    popup.style.display = 'flex';
}

function newGame() {
    const popup = document.getElementById('winner-popup');
    popup.style.display = 'none';

    // Clear the board and reset player
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    renderBoard();
}

function restartGame() {
    // Clear the board and reset player
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    renderBoard();
}
