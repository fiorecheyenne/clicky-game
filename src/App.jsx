import React, { useRef, useState, useEffect } from "react";
import Clicky from "./Clicky";
import Button from "./Button";
import Grid from "./Grid";
import Label from "./Label";
import RibbonBar from "./RibbonBar";
import LocalStorage from "./LocalStorage";

function App() {
  const clickyGame = useRef(
    new Clicky(function gameDidChange(gameChange) {
      switch (gameChange) {
        case Clicky.events.SCORE_CHANGED:
          setScore(clickyGame.current.score);
          setHighScore(Math.max(highScore, clickyGame.current.highScore));
          break;
        case Clicky.events.GAME_OVER:
          setGameOver(true);
          break;
        case Clicky.events.GAME_RESET:
          break;
        case Clicky.events.PICKED_IMAGE:
          setGameOver(false);
          break;
        default:
          console.error("Unknown game change occurred");
      }
    })
  );

  let [score, setScore] = useState(clickyGame.current.score);
  let [highScore, setHighScore] = LocalStorage(
    "clickyGameHighScore",
    clickyGame.current.highScore
  );
  let [images, setImages] = useState([]);
  let [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    console.warn("FETCHING IMAGES");
    fetch(
      "https://api.giphy.com/v1/gifs/trending?api_key=3hPxd0a3DJQ3k3t27sgeCzaLVtAuCdoW&limit=12"
    )
      .then(data => data.json())
      .then(gifs =>
        setImages(gifs.data.map(packet => packet.images.fixed_width_small.url))
      )
      .catch(() => console.error("Couldnt get any gifs"))
      .finally(() => console.warn("Images were fetched"));
  }, []);
  return (
    <>
      <RibbonBar>
        {gameOver && (
          <Label size={1.7} style={{ float: "right" }}>
            Game Over!
          </Label>
        )}
        <Label size={1.9}>Clicky Game</Label>
        <Label>High Score: {highScore}</Label>
        <Label>Score: {score}</Label>
      </RibbonBar>
      <Grid>
        {images.length > 0 &&
          [...Array(images.length).keys()].map(n => {
            return (
              <Button key={n} img={images[n]}>
                {() => {
                  clickyGame.current.pickImage(images[n]);
                  setImages(images.sort(() => Math.random() - 0.5));
                }}
              </Button>
            );
          })}
      </Grid>
    </>
  );
}
export default App;
