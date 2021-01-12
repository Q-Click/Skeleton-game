export default class MainScene extends Phaser.Scene {
  constructor() {
    super("MainScene");
  }

  preload() {
    this.load.image("tiles", "../assets/tileset.png");
    this.load.tilemapTiledJSON("map", "../assets/map1.json");
  }

  create() {
    const map = this.make.tilemap({ key: "map" });
    this.map = map;
    const tileset = map.addTilesetImage("grass_tileset", "tiles", 64, 32, 0, 0);
    const layer1 = map.createLayer("Tile Layer 1", tileset, 400, 100);
  }

  update() {}
}

// Ideas

// Orthogonal into isometric tilemap 10x10
// 64x32
// Tileset is 256x40 (why is it so high?)
// ratio 2:1
// Grid need to know on which tile skeleton is standing, also detecting cursor to create destination or build a wall (maybe grid could be independent from tile sprites)

// creatinng active cursor/pointer
// creating in corner text that would update after click - walk to wall / wall to walk

// Movement - only four directions - without diagonals

// var animations = {
//   idle: {
//     startFrame: 1,
//     endFrame: 4,
//   },
//   walk: {
//     startFrame: 5,
//     endFrame: 12,
//   },
// };

// Cartesian into isometric

// x axis around 30 deg rotation
// y axis around 60 deg rotation

// x axis
// 1 0.5
// y axis
// -1 0.5

// so

// isometric x would be = car.x - car.y
// isometric y woulde be = (car.x + car.y) /2

// didnt do any testing - could be wrong!!

// hardest part - calculating best possible path

// need at least start and end position created by click
// also need few parameters to somehow calculate which move is the best (without moving! and only four directions)

// need some value for every tile - maybe distance between both points?

// Maybe some universal algorithms? less work

// Pathfinding A*
// Points A and B
// three parameters for each tile f,h,g
// g cost from starting tile
// h cost from ending tile - less the better
// f difference between g and h - absolute value

// best way ? reaching point where f is the same but h is decreasing - that would be the best path
// but it is needed to check whole route before moving and every possible tile in range - probably loop for?

// Scheme:

// Two tables - open and closed

// starting tile is added always to open

// loop
// current = tile in open with the lowest f
// remove current from open
// add current to closed

// if current is end tile return

//  for each adjacent tile of the current
//     if it has obstacle or is already in closed table
//     move to next to adj tile

//    if new path to adj tile is shorter or that tile is not in open table
//     eval f
//     setting that adj tile as a current to move along some path
//     if adj tile is not in the table open - add it then

// Possible problems? on video path is known whole - update during moving to the next tile but only for adjacent or previous - hard to tell - probably to adjacent because when the next closest one contains wall which hasnt been there earlier, it recalculate path.

// Oh nearly forgot - some implemenation with floating text when its no possible route
