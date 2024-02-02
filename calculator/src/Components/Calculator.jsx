// import React, { useState } from "react";

// const Calculator = () => {
//   const [input, setInput] = useState("");

//  const handleButtonClick = (value) => {
//   if (input.startsWith("Error")) {
//     if (/[0-9.]/.test(value)) {
//       // Reset the error state only when numbers or dot are clicked
//       setInput(value);
//     } else {
//       // Show error if operators or percentage are clicked again
//       setInput("Error: Invalid input");
//     }
//   } else if (!input && /[+\-*/%]/.test(value)) {
//     setInput("Error: Invalid input");
//   } else if (value === "=") {
//     try {
//       setInput(eval(input).toString());
//     } catch (error) {
//       setInput("Error: Invalid expression");
//     }
//   } else {
//     // Check if the input is empty and the value is zero
//     if (!input && value === "0") {
//       setInput(value);
//     } else {
//       setInput((prevInput) => prevInput + value);
//     }
//   }
// };

//   const handleClearButtonClick = () => {
//     setInput("");
//   };

//   const handleDeleteButtonClick = () => {
//     if (!input.startsWith("Error")) {
//       setInput((prevInput) => prevInput.slice(0, -1));
//     }
//   };

//   const handleDoubleZeroButtonClick = () => {
//     if (/^0\d*$/.test(input)) {
//       setInput("00");
//     } else {
//       setInput((prevInput) => prevInput + "00");
//     }
//   };

//   const handlePercentageButtonClick = () => {
//     try {
//       const result = eval(input);
//       setInput((prevInput) => (result / 100).toString());
//     } catch (error) {
//       setInput("Error: Invalid expression");
//     }
//   };

//   return (
//     <div className="calculator">
//       <div className="display">
//         <input
//           type="text"
//           value={input.endsWith("=") ? input.slice(0, -1) : input}
//           readOnly
//         />
//       </div>
//       <div className="buttons">
//         <div className="row">
//           <button onClick={handleDeleteButtonClick}>DE</button>
//           <button onClick={handleClearButtonClick}>C</button>
//           <button onClick={() => handleButtonClick(".")}>.</button>
//           <button onClick={() => handleButtonClick("/")}>/</button>
//         </div>
//         <div className="row">
//           <button onClick={() => handleButtonClick("7")}>7</button>
//           <button onClick={() => handleButtonClick("8")}>8</button>
//           <button onClick={() => handleButtonClick("9")}>9</button>

//           <button onClick={() => handleButtonClick("*")}>*</button>
//         </div>
//         <div className="row">
//           <button onClick={() => handleButtonClick("4")}>4</button>
//           <button onClick={() => handleButtonClick("5")}>5</button>
//           <button onClick={() => handleButtonClick("6")}>6</button>
//           <button onClick={() => handleButtonClick("+")}>+</button>
//         </div>
//         <div className="row">
//           <button onClick={() => handleButtonClick("1")}>1</button>
//           <button onClick={() => handleButtonClick("2")}>2</button>
//           <button onClick={() => handleButtonClick("3")}>3</button>
//           <button onClick={() => handleButtonClick("-")}>-</button>
//         </div>
//         <div className="row">
//           <button onClick={handleDoubleZeroButtonClick}>00</button>
//           <button onClick={() => handleButtonClick("0")}>0</button>
//           <button onClick={handlePercentageButtonClick}>%</button>
//           <button
//             style={{ backgroundColor: "#fd9f24" }}
//             onClick={() => handleButtonClick("=")}
//           >
//             =
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Calculator;

import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleButtonClick = (value) => {
    if (input.startsWith("Error")) {
      if (/[0-9.]/.test(value)) {
        setInput(value);
      } else {
        setInput("Error: Invalid input");
      }
    } else if (!input && /[+\-*/%]/.test(value)) {
      setInput("Error: Invalid input");
    } else if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput("Error: Invalid expression");
      }
    } else {
      // Check if the input is empty or already contains a zero
      if (!input || input === "0") {
        setInput(value);
      } else {
        setInput((prevInput) => prevInput + value);
      }
    }
  };

  const handleClearButtonClick = () => {
    setInput("");
  };

  const handleDeleteButtonClick = () => {
    if (!input.startsWith("Error")) {
      setInput((prevInput) => prevInput.slice(0, -1));
    }
  };

  const handlePercentageButtonClick = () => {
    try {
      const result = eval(input);
      setInput((prevInput) => (result / 100).toString());
    } catch (error) {
      setInput("Error: Invalid expression");
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <input
          type="text"
          value={input.endsWith("=") ? input.slice(0, -1) : input}
          readOnly
        />
      </div>
      <div className="buttons">
        <div className="row">
          <button onClick={handleDeleteButtonClick}>DE</button>
          <button onClick={handleClearButtonClick}>C</button>
          <button onClick={() => handleButtonClick(".")}>.</button>
          <button onClick={() => handleButtonClick("/")}>/</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick("7")}>7</button>
          <button onClick={() => handleButtonClick("8")}>8</button>
          <button onClick={() => handleButtonClick("9")}>9</button>
          <button onClick={() => handleButtonClick("*")}>*</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick("4")}>4</button>
          <button onClick={() => handleButtonClick("5")}>5</button>
          <button onClick={() => handleButtonClick("6")}>6</button>
          <button onClick={() => handleButtonClick("+")}>+</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick("1")}>1</button>
          <button onClick={() => handleButtonClick("2")}>2</button>
          <button onClick={() => handleButtonClick("3")}>3</button>
          <button onClick={() => handleButtonClick("-")}>-</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick("0")}>0</button>
          <button onClick={handlePercentageButtonClick}>%</button>
          <button
            style={{ backgroundColor: "#fd9f24" }}
            onClick={() => handleButtonClick("=")}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
