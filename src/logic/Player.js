const Player = (name, marker) => {
  function getName() {
    return name;
  }

  function getMarker() {
    return marker;
  }

  return {
    name,
    getName,
    marker,
    getMarker,
  };
};

export default Player;
