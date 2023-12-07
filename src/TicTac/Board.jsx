"use client";
import Square from "./Square";
import React, { useEffect, useState } from "react";

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 1, 2],
    [0, 4, 8],
    [2, 4, 6],
  ];
  // Iterate over each winning combination (line)
  for (const element of lines) {
    const [a, b, c] = element;
    // Check if the values at positions a, b, and c on the board are the same
    // (i.e., if there is a winning combination)
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      // If a winner is found, return the symbol of the winner ('X' or 'O')
      return squares[a];
    }
  }
  // If no winner is found after checking all possible combinations, return null
  return null;
};
const Board = () => {
  //create an array of length 9 and fill it up with the null value
  const [squares, setSquares] = useState(Array(9).fill(null));
  //create a current player and default it to a random value either X or O, if it equals 1 = X else O
  const [currentPlayer, setCurrentPlayer] = useState(
    Math.round(Math.random() * 1) === 1 ? "X" : "O"
  );
  const [winner, setWinner] = useState(null);
  //when a square is click it set the value of the square to the current player
  const setSquareValue = (index) => {
    const newData = squares.map((val, i) => {
      //if the index  in the map is equal to the index passed in the square, return current player
      if (i === index) {
        return currentPlayer;
      }
      //else return value of the square
      return val;
    });
    setSquares(newData);
    //if the current player is X set it to O, if O set it to
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };
  function reset() {
    setSquares(Array(9).fill(null));
    setWinner(null);
    setCurrentPlayer(Math.round(Math.random() * 1) === 1 ? "X" : "O");
  }
  useEffect(() => {
    const win = calculateWinner(squares);
    if (win) {
      setWinner(win);
    }
    if (!win && !squares.filter((square) => !square).length) {
      setWinner("BOTH");
    }
  }, [squares]);
  return (
    <div className="flex flex-col items-center gap-2 text-white font-bold">
      {!winner && <p>Hey {currentPlayer}, it's your turn</p>}
      {winner && winner !== "BOTH" && <p>Congratulations {winner}</p>}
      {winner && winner === "BOTH" && (
        <p>Congratulations You are Both winners </p>
      )}
      {/* use Array.fill method to print all nine squares and use flex grid to show in a grid */}
      <div className="w-fit grid grid-cols-3 gap-3">
        {Array(9)
          .fill(null)
          .map((_, i) => {
            return (
              <Square
                //to disable the square is there is a winner but it's unselected
                winner={winner}
                key={i}
                onClick={() => setSquareValue(i)}
                value={squares[i]}
              />
            );
          })}
      </div>
      <button
        className=" mt-4 text-lg bg-blue-600 py-1 px-6 text-white rounded-lg"
        onClick={reset}
      >
        RESET
      </button>
    </div>
  );
};

export default Board;
