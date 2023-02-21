import { useEffect, useState } from "react";

const IMAGES = [
  "https://icongr.am/devicon/angularjs-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/csharp-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/cplusplus-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/html5-original-wordmark.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/java-original-wordmark.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/php-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/python-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/ruby-original-wordmark.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/react-original-wordmark.svg?size=128&color=currentColor"
]
  .flatMap((image) => [`a|${image}`, `b|${image}`])
  .sort(() => Math.random() - 0.5);

function App() {
  const [guessed, setGuessed] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    if (selected.length === 2) {
      if (selected[0].split("|")[1] === selected[1].split("|")[1]) {
        setGuessed((guessed) => guessed.concat(selected));
      }

      setTimeout(() => setSelected([]), 1000);
    }
  }, [selected]);

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <ul className="main-container">
        {IMAGES.map((image) => {
          const [, url] = image.split("|");

          return (
            <li
              key={image}
              onClick={() =>
                selected.length < 2 &&
                setSelected((selected) => selected.concat(image))
              }
            >
              {selected.includes(image) || guessed.includes(image) ? (
                <img src={url} alt="icon" />
              ) : (
                <img
                  key={image}
                  src="https://icongr.am/clarity/search.svg?size=128&color=currentColor"
                  alt="icon"
                />
              )}
            </li>
          );
        })}
      </ul>

      {guessed.length === IMAGES.length && (
        <div className="winner-modal">
          <div className="winner-text">
            <h2>You won!</h2>
            <button
              onClick={() => {
                window.location.reload();
              }}
            >
              Reset
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
