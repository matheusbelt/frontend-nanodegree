// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = -101;
    this.y = 0;
    this.speed = Math.floor(Math.random() * 501);
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    return dt - 100;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};



// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.sprite = 'images/char-boy.png';
    this.x = 0;
    this.y = 0;
}
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}
Player.prototype.update = function() {

}
Player.prototype.handleInput = function (allowedKeys) {
    switch(allowedKeys){
        case 'left':
            console.log('esquerda')
            moveLeft()
            break;
        case 'right':
            console.log('direita')
            moveRight();
            break;
        case 'up':
            console.log('cima')
            moveUp();
            break;
        case 'down':
            console.log('baixo')
            moveDown();
            break;
    }
}

//função de mecânica
//esquerda
function moveLeft() {
    if(player.x > 0){
        player.x -= 100;
    }
}
//direita
function moveRight(){
    if(player.x < 400){
        player.x += 100;
    }
}
//cima
function moveUp(){
    if(player.y > 0){
        player.y -= 83;
    }
}
//baixo
function moveDown(){
    if(player.y < 380){
        player.y += 83;
    }
}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var enemy1 = new Enemy(),
    enemy2 = new Enemy(),
    enemy3 = new Enemy();
var allEnemies = [enemy1, enemy2, enemy3];

//Posicionando os inimigos
enemy1.y = 60;
enemy2.y = 140;
enemy3.y = 220;
// Place the player object in a variable called player
//objeto player
var player = new Player();

//posicionando o player
player.y = 400;
player.x = 200;


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
