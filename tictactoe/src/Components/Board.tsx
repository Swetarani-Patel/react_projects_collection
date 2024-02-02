// import React, { useState } from "react";
// import Block from "./Block";

// const Board: React.FC = () => {
//   const [state, setState] = useState(Array(9).fill(null));
//   const [currentTurn, setCurrentTurn] = useState("X");
//   const [gameOver, setGameOver] = useState(false);

//   const checkWinner = (state: any[]) => {
//     const win = [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [2, 4, 6],
//     ];
//     for (let i = 0; i < win.length; i++) {
//       const [a, b, c] = win[i]; //array destructering
//       // <==========anther way of writing=============>
//       // const a = win[i][0];
//       // const b = win[i][1];
//       // const c = win[i][2];
//       if (state[a] !== null && state[a] === state[b] && state[a] === state[c])
//         return true;
//     }
//     return false;
//   };

//   const checkDraw = (state: any[]) => {
//     return !state.includes(null) && !checkWinner(state);
//   };

//   const handleBlockClick = (index: number) => {
//     const stateCopy = Array.from(state);
//     if (gameOver || stateCopy[index] !== null) return;
//     stateCopy[index] = currentTurn;

//     const win = checkWinner(stateCopy);
//     const draw = checkDraw(stateCopy);

//     if (win || draw) {
//       setGameOver(true);
//     }

//     setCurrentTurn(currentTurn === "X" ? "O" : "X");
//     setState(stateCopy);
//   };

//   const resetGame = () => {
//     setState(Array(9).fill(null));
//     setCurrentTurn("X");
//     setGameOver(false);
//   };

//   const winnerMessage = () => {
//     if (checkWinner(state)) {
//       return `${currentTurn === "X" ? "O" : "X"} won the game!`;
//     } else if (checkDraw(state)) {
//       return "It's a draw!";
//     } else {
//       return `Current Turn: ${currentTurn}`;
//     }
//   };

//   return (
//     <div className="cursor-pointer w-[20%] m-auto">
//       <h1 className="text-4xl text-center mt-10 mb-10 text-black font-bold">
//         {gameOver ? winnerMessage() : `Current Turn: ${currentTurn}`}
//       </h1>
//       <div className="flex flex-col">
//         <div className="flex">
//           <Block value={state[0]} onClick={() => handleBlockClick(0)} />
//           <div
//             style={{
//               borderLeft: "4px solid black",
//               borderRight: "4px solid black",
//             }}
//           >
//             <Block value={state[1]} onClick={() => handleBlockClick(1)} />
//           </div>
//           <Block value={state[2]} onClick={() => handleBlockClick(2)} />
//         </div>
//         <div
//           style={{
//             borderTop: "4px solid black",
//             borderBottom: "4px solid black",
//           }}
//           className="flex"
//         >
//           <Block value={state[3]} onClick={() => handleBlockClick(3)} />
//           <div
//             style={{
//               borderLeft: "4px solid black",
//               borderRight: "4px solid black",
//             }}
//           >
//             <Block value={state[4]} onClick={() => handleBlockClick(4)} />
//           </div>
//           <Block value={state[5]} onClick={() => handleBlockClick(5)} />
//         </div>
//         <div style={{ borderTop: "1px solid black" }} className="flex">
//           <Block value={state[6]} onClick={() => handleBlockClick(6)} />
//           <div
//             style={{
//               borderLeft: "4px solid black",
//               borderRight: "4px solid black",
//             }}
//           >
//             <Block value={state[7]} onClick={() => handleBlockClick(7)} />
//           </div>
//           <Block value={state[8]} onClick={() => handleBlockClick(8)} />
//         </div>
//       </div>
//       {gameOver && (
//         <button
//           className="ml-[4.7rem] mt-10 p-4 text-xl bg-gray-800 text-white rounded-md"
//           onClick={resetGame}
//         >
//           Reset Game
//         </button>
//       )}
//     </div>
//   );
// };

// export default Board;

import React, { useState } from "react";
import Block from "./Block";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [currentTurn, setCurrentTurn] = useState("X");
  const [findWinner, setFindWinner] = useState(false);
  const checkWinner = (state: any[]) => {
    const arr = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < arr.length; i++) {
      const [a, b, c] = arr[i];
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return true;
      }
    }
    return false;
  };

  const handleBlockClick = (index: number) => {
    if (findWinner) {
      return;
    }
    if (state[index] !== null) {
      return;
    }
    const stateCopy = [...state];
    stateCopy[index] = currentTurn;
    const winner = checkWinner(stateCopy);
    if (winner) {
      setFindWinner(true);
    }
    setCurrentTurn(currentTurn === "X" ? "O" : "X");
    setState(stateCopy);
  };

  const resetGame = () => {
    setState(Array(9).fill(null));
    setCurrentTurn("X");
    setFindWinner(false);
  };

  return (
    <div>
      {" "}
      <h1 className="text-center mt-10 text-4xl text-fuchsia-800 font-bold">
        Tic Tac Toe
      </h1>
      <h3 className="text-center text-2xl mt-5">
        {findWinner
          ? `${currentTurn === "X" ? "O" : "X"} is the Winner`
          : !state.includes(null)
          ? "Draw"
          : `currentTurn: ${currentTurn}`}
      </h3>
      <div className="grid grid-cols-3 w-[300px] m-auto mt-10">
        {state.map((ele, index) => (
          <Block
            key={index}
            value={state[index]}
            onClick={() => handleBlockClick(index)}
          />
        ))}
      </div>
      {(findWinner || state.includes(null)) && (
       <div className="flex justify-center mt-10">
         <button className="text-2xl font-semibold border p-5 rounded-md bg-red-400" onClick={resetGame}>Reset Game</button>
       </div>
      )}
    </div>
  );
};

export default Board;
