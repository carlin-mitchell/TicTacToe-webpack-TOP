import game from "../logic/GameController";

const StartButton = () => {
  const startingText = "Tic Tac Toe";
  const button = Object.assign(document.createElement("div"), {
    className: "start-button unselectable",
    innerText: startingText,
    onmouseover: function () {
      if (!game.getGameIsRunning()) {
        this.innerText = startingText.replace("Toe", "Go!");
      }
    },
    onmouseout: function () {
      if (game.getGameIsRunning()) {
        this.innerText = startingText;
      }
    },
  });
  return button;
};

export default StartButton;
