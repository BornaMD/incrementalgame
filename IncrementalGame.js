class IncrementalGame {
  constructor() {
    this.points = 0;
    this.level = 1;
    this.clickMultiplier = 1;
  }

  clickButton() {
    this.points += this.clickMultiplier;
  }

  upgradeClickMultiplier() {
    this.clickMultiplier += 1;
  }

  upgradeLevel() {
    this.level += 1;
  }
}
