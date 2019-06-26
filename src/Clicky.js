export default class Clicky {
  static events = {
    SCORE_CHANGE: 0,
    PICKED_IMAGE: 1,
    GAME_OVER: 2,
    GAME_RESET: 3
  };

  constructor(gameDidChange = () => null) {
    this.availableImages = [];
    this.pickedImages = new Set();
    this.score = 0;
    this.highScore = 0;
    this.pickImage = this.pickImage.bind(this);
    this.reset = this.reset.bind(this);
    this.gameDidChange = gameDidChange;
  }

  //Image tracking
  pickImage(image) {
    const currentImgCount = this.pickedImages.size;
    this.pickImages.add(image);
    if (this.pickedImages.size <= currentImgCount) {
      this.gameDidChange(Clicky.events.GAME_OVER);
      this.reset();
    } else {
      this.gameDidChange(Clicky.events.PICKED_IMAGE);
      this.score += 1;
      this.highScore = Math.max(this.highScore, this.score);
      this.gameDidChange(Clicky.events.SCORE_CHANGE);
    }
  }

  //Reset
  reset() {
    this.score = 0;
    this.gameDidChange(Clicky.events.SCORE_CHANGE);
    this.pickedImages = new Set();
    this.gameDidChange(Clicky.events.GAME_RESET);
  }
}
