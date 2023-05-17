const StartButton = () => {
  const startingText = "Tic Tac Toe";
  const button = Object.assign(document.createElement("div"), {
    className: "start-button unselectable",
    innerText: startingText,
    onmouseover: function () {
      // if (gameBrain.getGameIsOver()) {
      this.innerText = startingText.replace("Toe", "Go!");
      // }
    },
    onmouseout: function () {
      // if (gameBrain.getGameIsOver()) {
      this.innerText = startingText;
      // }
    },
  });
  return button;
};

export default StartButton;
