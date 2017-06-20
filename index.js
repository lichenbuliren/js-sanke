class Game {
  constructor({})
}

class World {
  constructor(width = 500, height = 500) {
    this.width = width;
    this.height = height;
  }

  // 初始化地图
  init() {
    const gameBody = document.createElement('div');
    gameBody.classList.add('game-body');
  }
}