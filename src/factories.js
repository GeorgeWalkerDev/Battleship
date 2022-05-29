// Ship factory function
const Ship = (length) => {
  const hits = [...Array(length).keys()].map((e) => (e = 0));
  const hit = (index) => {
    hits[index] = 1;
  };
  return {
    length: length,
    hits: hits,
    sunk: false,
    hit,
  };
};

const isSunk = (ship) => {
  if (ship.hits.every((e) => e === 1)) {
    return (ship.sunk = true);
  }
};

// Gameboard factory function
const Gameboard = () => {
  let gameBoard = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  const ships = [];

  // Place ship function: places ship in array and pushes coordinates to ship
  const placeShip = (shipType, x, y, axis) => {
    ships.push(shipType);
    shipType.placementArray = [];
    if (axis) {
      for (let i = 0; i < shipType.length; i++) {
        gameBoard[x][y + i] = 1;
        shipType.placementArray.push([x][y]);
      }
    } else {
      for (let i = 0; i < shipType.length; i++) {
        gameBoard[x + i][y] = 1;
        shipType.placementArray.push([x][y]);
      }
    }
  };
  // Receives attack, updates gameboard and hits ship
  const receiveAttack = (x, y) => {
    if (gameBoard[x][y] === 0) {
      gameBoard[x][y] = 1;
      ships.forEach((e) => {
        e.placementArray.forEach((coord) => {
          if (coord[0] === x && coord[1] === y) {
            e.hit(e.placementArray.indexOf(coord));
          }
        });
      });
    }
  };

  // Resets board
  const resetBoard = () => {
    for (let i = 0; i < gameBoard.length; i++) {
      for (let j = 0; j < gameBoard[i].length; j++) {
        gameBoard[i][j] = 0;
      }
    }
  };
  return { gameBoard, placeShip, resetBoard, receiveAttack };
};

//Player factory function
const Player = (name, turn) => {
  let isTurn = turn;
  const takeTurn = () => {
    if (isTurn) {
      isTurn = false;
    } else {
      isTurn = true;
    }
  };
  return { name, isTurn, takeTurn };
};

module.exports = { Ship, isSunk, Gameboard, Player };
