import ScreenController from "./ScreenController";
import Player from "./Player";

const GameController = (() => {
  let gameBoard = Array(9).fill("");
  const getGameBoard = () => gameBoard;
  const resetGameBoard = () => {
    gameBoard = gameBoard.map((e) => "");
  };

  return {
    getGameBoard,
    resetGameBoard,
  };
})();

export default GameController;
