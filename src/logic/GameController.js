import screen from "./ScreenController";
import Player from "./Player";

const GameController = (() => {
  let gameBoard = Array(9).fill("");
  const getGameBoard = () => gameBoard;
  const updateGameBoard = (index) => {
    gameBoard[index] = activePlayer.marker;
    console.log(gameBoard);
  };
  const resetGameBoard = () => {
    gameBoard = gameBoard.map((e) => "");
  };

  let gameIsRunning = false;
  const getGameIsRunning = () => gameIsRunning;

  const player1 = Player("Player 1", "X");
  const player2 = Player("Player 2", "O");
  let activePlayer = player1;
  const getActivePlayer = () => activePlayer;
  const toggleActivePlayer = () => {
    activePlayer = activePlayer === player1 ? player2 : player1;
    screen.updateGamePrompt(`It's ${activePlayer.name}'s turn`);
  };

  const playRound = () => {
    resetGameBoard();
    screen.resetGameTiles();
    gameIsRunning = true;
    screen.updateGamePrompt(`It's ${activePlayer.name}'s turn`);
  };

  const placeMarker = (index) => {
    if (gameIsRunning && gameBoard[index] === "") {
      updateGameBoard(index);
      screen.updateGameTile(index, activePlayer.marker);
      checkForWin();
      if (gameIsRunning) {
        toggleActivePlayer();
      }
    }
  };

  const gameOver = (winner) => {
    gameIsRunning = false;
    if (winner) {
      console.log(winner);
      screen.updateGamePrompt(
        `${activePlayer.name} wins! Press the button to play again!`
      );
    } else {
      screen.updateGamePrompt(`It's a draw! Press the button to play again!`);
    }
  };

  const checkForWin = () => {
    const row1 = gameBoard.slice(0, 3).join("");
    const row2 = gameBoard.slice(3, 6).join("");
    const row3 = gameBoard.slice(6, 9).join("");

    const col1 = gameBoard[0] + gameBoard[3] + gameBoard[6];
    const col2 = gameBoard[1] + gameBoard[4] + gameBoard[7];
    const col3 = gameBoard[2] + gameBoard[5] + gameBoard[8];

    const diag1 = gameBoard[0] + gameBoard[4] + gameBoard[8];
    const diag2 = gameBoard[2] + gameBoard[4] + gameBoard[6];

    const winRegex = /XXX|OOO/;

    if (winRegex.test(row1) || winRegex.test(row2) || winRegex.test(row3)) {
      console.log("row win!");
      gameOver(activePlayer);
    } else if (
      winRegex.test(col1) ||
      winRegex.test(col2) ||
      winRegex.test(col3)
    ) {
      console.log("column win!");
      gameOver(activePlayer);
      return activePlayer;
    } else if (winRegex.test(diag1) || winRegex.test(diag2)) {
      console.log("diag win!");
      gameOver(activePlayer);
      return activePlayer;
    } else if (gameBoard.filter((tile) => tile === "").length === 0) {
      console.log("its a draw");
      gameOver("");
    }
  };

  return {
    getGameBoard,
    getGameIsRunning,
    resetGameBoard,
    playRound,
    placeMarker,
  };
})();

export default GameController;
