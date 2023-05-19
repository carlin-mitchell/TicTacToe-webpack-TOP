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
    gameIsRunning = true;
    screen.updateGamePrompt(`It's ${activePlayer.name}'s turn`);
  };

  const placeMarker = (index) => {
    if (gameIsRunning && gameBoard[index] === "") {
      updateGameBoard(index);
      screen.updateGameTile(index, activePlayer.marker);
      toggleActivePlayer();
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
