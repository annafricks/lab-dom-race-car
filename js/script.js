window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  let game

  startButton.addEventListener("click", function () {
    startGame();
  });

  function startGame() {

    game = new Game()
    game.start()


    console.log("start game");

    //add event listeners here after player is implemented
document.addEventListener('keydown', (e) => { //e is an event. when this occurs, it will change the player's direction property. controlling speed and area he can cover.

  if (e.key === "ArrowRight") { //as long as this key is down, 
    if (game.player.directionX < 4) {
      game.player.directionX += 1
    }
  }

  if (e.key === "ArrowLeft") {
    if (game.player.directionX > -4) {
      game.player.directionX -= 1
    }
  }

  if (e.key === "ArrowDown") {
    if (game.player.directionY < 4) {
      game.player.directionY += 1
    }
  }

  if (e.key === "ArrowUp") {
    if (game.player.directionY > -4) {
      game.player.directionY -= 1
    }
  }
//add spacebar if needed for game
})


  }
};
