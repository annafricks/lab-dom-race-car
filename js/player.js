class Player {   //new file. in order for this to be readable, we need to import player.js into html doc , the player class needs to be read before others
    constructor(gameScreen, left, top, width, height, imgSrc) {
        this.gameScreen = gameScreen;
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
        this.directionX = 0;
        this.directionY = 0;
        this.element = document.createElement("img");
        this.element.src = imgSrc;
        this.element.style.position = "absolute";
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.width = `${this.width}px`;

        this.gameScreen.appendChild(this.element)
    }

    move() {
        this.left += this.directionX;
        this.top += this.directionY;
    
        if (this.left <= 10) {
          this.left = 10;
          this.directionX *= -0.5;
        }
    
        if (this.top <= 10) {
          this.top = 10;
          this.directionY *= -0.5;
        }
    
        if (this.left >= this.gameScreen.offsetWidth - this.width - 10) {
          this.left = this.gameScreen.offsetWidth - this.width - 10;
          this.directionX *= -0.5;
        }
    
        if (this.top >= this.gameScreen.offsetHeight - this.height - 10) {
          this.top = this.gameScreen.offsetHeight - this.height - 10;
          this.directionY *= -0.5;
        }
    
        this.updatePosition();
      }
    
      updatePosition() {
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
      }
    
      didCollide(obstacle) {
        const playerRect = this.element.getBoundingClientRect();
        const obstacleRect = obstacle.element.getBoundingClientRect();
    
        //rect collision
        if (
          playerRect.left < obstacleRect.right &&
          playerRect.right > obstacleRect.left &&
          playerRect.top < obstacleRect.bottom &&
          playerRect.bottom > obstacleRect.top
        ) {
          console.log("Colliding");
          return true;
        } else {
          return false;
        }
      }}
