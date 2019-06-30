import React, { Component } from "react";
import Button from "./Button";
import Grid from "./Grid";
import Label from "./Label";
import RibbonBar from "./RibbonBar";
import images from "./images.json";

class App extends Component {
  state = {
    images,
    clicked: [],
    score: 0,
    highScore: 0
  };

  sortImages = () => {
    this.state.images.sort(() => Math.random() - 0.5);
  };

  setHighScore = () => {
    if (this.state.score > this.state.highScore) {
      this.setState({
        highScore: this.state.score
      });
    }
  };

  resetGame = () => {
    this.setHighScore();
    this.setState({
      clicked: [],
      score: 0
    });
  };

  imageClick = event => {
    const currentImg = event.target.src;
    console.log(currentImg);
    console.log(event.target.src);
    console.log(event);
    const isClicked = this.state.clicked.indexOf(currentImg) > -1;
    if (isClicked) {
      this.sortImages();
      this.resetGame();
    } else {
      this.sortImages();
      this.setState(
        {
          clicked: this.state.clicked.concat([currentImg]),
          score: this.state.score + 1
        },
        () => {
          if (this.state.score === 12) {
            this.sortImages();
            this.resetGame();
          }
        }
      );
    }
  };

  render() {
    return (
      <>
        <RibbonBar>
          <Label>SPACEY CLICKY GAME</Label>
          <Label size={1.9}>High Score: {this.state.highScore}</Label>
          <Label size={1.9}>Score: {this.state.score}</Label>
        </RibbonBar>
        <Grid>
          {this.state.images.length > 0 &&
            [...Array(images.length).keys()].map(n => {
              return (
                <Button
                  onClick={this.imageClick}
                  key={n}
                  img={this.state.images[n].image}
                />
              );
            })}
        </Grid>
      </>
    );
  }
}

export default App;
