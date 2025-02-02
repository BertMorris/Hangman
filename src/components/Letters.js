import React from "react";
const line1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const line2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const line3 = ["Z", "X", "C", "V", "B", "N", "M"];

// displays letter buttons for user to click and update with result (green/red)
export default function Letters({
  gameWord,
  guessedLetters,
  setGuessedLetters,
}) {
  // handle user clicking letter
  // handle user clicking letter
  const handleClick = (letter) => {
    console.log(`Clicked: ${letter}`);
    const isCorrect = gameWord.word.includes(letter);
    console.log(isCorrect);

    setGuessedLetters({ ...guessedLetters, [letter]: isCorrect });

    // update the key's color when it's wrong/correct
    const querySelectorStr = `.line1 span[data-letter="${letter.toLowerCase()}"], .line2 span[data-letter="${letter.toLowerCase()}"], .line3 span[data-letter="${letter.toLowerCase()}"]`;
    const spanEl = document.querySelector(querySelectorStr);

    if (spanEl) {
      if (isCorrect) {
        spanEl.style.backgroundColor = "green";
      } else {
        spanEl.style.backgroundColor = "red";
      }
    }
  };

  return (
    <div className="letters">
      <div className="base">
        <div className="line1">
          {line1.map((letter) => (
            <span
              key={letter}
              data-letter={letter.toLowerCase()}
              onClick={() => handleClick(letter.toLowerCase())}
            >
              {letter}
            </span>
          ))}
        </div>

        <div className="line2">
          {line2.map((letter) => (
            <span
              key={letter}
              data-letter={letter.toLowerCase()}
              onClick={() => handleClick(letter.toLowerCase())}
            >
              {letter}
            </span>
          ))}
        </div>

        <div className="line3">
          {line3.map((letter) => (
            <span
              key={letter}
              data-letter={letter.toLowerCase()}
              onClick={() => handleClick(letter.toLowerCase())}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// <div>

/* <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Sigmar&display=swap');
        {`
          body{
            display: flex;            justify-content: center;
            align-items: center;
            height: 97vh;
            background: #00BCD4;          }
         {
          color: #000;
        }
        `}
      </style> */
