import GameTile from "./GameTile";

const GameBoard = () => {
  const gameBoard = Object.assign(document.createElement("div"), {
    className: "game-board",
  });

  for (let i = 0; i < 9; i++) {
    gameBoard.appendChild(GameTile(`game-tile-${i}`));
  }

  return gameBoard;
};

export default GameBoard;
