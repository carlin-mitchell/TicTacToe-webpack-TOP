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

  const updateGameTile = (index, marker) => {
    const tile = document.querySelector("#game-tile-" + index);
    tile.classList.add(marker);
  };

  const updateGamePrompt = (string) => {
    const prompt = document.querySelector(".game-prompt");
    prompt.innerText = string;
  };

  return { setInitialView, updateGamePrompt, updateGameTile };
})();

export default ScreenController;
