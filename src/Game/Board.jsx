import React from "react";
import { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [state, setstate] = useState(Array(9).fill(null));
  const [isXturn, setisXturn] = useState(true);

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return false;
  };

  const isWinner = checkWinner();

  const HandleClick = (index) => {
    if (state[index] !== null) {
      return;
    }
    const copyState = [...state];
    copyState[index] = isXturn ? "X" : "O";
    setstate(copyState);
    setisXturn(!isXturn);
  };

  const handleReset = () => {
    setstate(Array(9).fill(null));
  };
  return (
    <div className="m-20">
      {isWinner ? (
        <div className="text-6xl font-c font-bold h-30 relative top-20">
          Hurray!{" "}
          <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block mr-4">
            <span class="relative text-white p-3">{isWinner} </span>
          </span>
            Won the Game🎉
          <br />
          <button
            onClick={handleReset}
            className="bg-white rounded-lg h-15 text-2xl font-bold p-3 mt-18 hover:scale-90"
          >
            Play Again
          </button>
        </div>
      ) : (
        <div className="lg:w-6/12 relative left-60">
          <h4 className="text-3xl bg-white mb-6 rounded-lg h-16 p-3 font-mono">
            Player {isXturn ? "X" : "O"} Please Move{" "}
          </h4>
          <div className="flex justify-evenly align-middle">
            <Square onClick={() => HandleClick(0)} value={state[0]} />
            <Square onClick={() => HandleClick(1)} value={state[1]} />
            <Square onClick={() => HandleClick(2)} value={state[2]} />
          </div>
          <div className="flex justify-evenly align-middle">
            <Square onClick={() => HandleClick(3)} value={state[3]} />
            <Square onClick={() => HandleClick(4)} value={state[4]} />
            <Square onClick={() => HandleClick(5)} value={state[5]} />
          </div>
          <div className="flex justify-evenly align-middle">
            <Square onClick={() => HandleClick(6)} value={state[6]} />
            <Square onClick={() => HandleClick(7)} value={state[7]} />
            <Square onClick={() => HandleClick(8)} value={state[8]} />
          </div>{" "}
        </div>
      )}
    </div>
  );
};

export default Board;
