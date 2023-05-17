const GameTile = (id) => {
  const tile = Object.assign(document.createElement("div"), {
    id: id,
    className: "game-tile",
  });

  return tile;
};

export default GameTile;
