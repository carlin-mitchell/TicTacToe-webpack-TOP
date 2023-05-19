import Footer from "../components/Footer/Footer";
import Content from "../components/Content";

import game from "./GameController";

const ScreenController = (() => {
  //Start Button

  const setInitialView = () => {
    document.body.appendChild(Content());
    document.body.appendChild(Footer());

    const startButton = document.querySelector(".start-button");
    startButton.addEventListener("click", game.playRound);

    const gameTiles = document.querySelectorAll(".game-tile");
    gameTiles.forEach((tile) => {
      tile.addEventListener("click", function () {
        // extract the tile's number from the id
        const index = this.id.split("-")[2];
        game.placeMarker(index);
      });
    });
  };

  const updateStartButtonText = (string) => {
    const button = document.querySelector(".start-button");
    button.innerText = string;
  };

  const disableStartButton = () => {
    const button = document.querySelector(".start-button");
    button.classList.add("disabled");
  };

  const enableStartButton = () => {
    const button = document.querySelector(".start-button");
    button.classList.remove("disabled");
  };

  const updateGameTile = (index, marker) => {
    const tile = document.querySelector("#game-tile-" + index);
    tile.classList.add(marker);
  };

  const resetGameTiles = () => {
    const gameTiles = document.querySelectorAll(".game-tile");
    gameTiles.forEach((tile) => {
      tile.className = "game-tile";
    });
  };

  const updateGamePrompt = (string) => {
    console.log(string);
    const prompt = document.querySelector(".game-prompt");
    prompt.innerText = string;
  };

  return {
    setInitialView,
    updateGamePrompt,
    updateGameTile,
    resetGameTiles,
    updateStartButtonText,
    disableStartButton,
    enableStartButton,
  };
})();

export default ScreenController;
