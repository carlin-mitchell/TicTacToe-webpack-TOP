const GamePrompt = () => {
  const prompt = Object.assign(document.createElement("div"), {
    className: "game-prompt",
    innerText: "Press the button to play!",
  });

  return prompt;
};

export default GamePrompt;
