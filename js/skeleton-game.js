import MainScene from "./MainScene.js";

const config = {
  width: 800,
  height: 600,
  backgroundColor: "#333",
  type: Phaser.AUTO,
  parent: "skeleton-game",
  scene: [MainScene],
  scale: {
    zoom: 1,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
};

new Phaser.Game(config);
