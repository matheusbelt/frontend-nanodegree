// Enemies our player must avoid
class Enemy {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    constructor(){
        this.sprite = 'images/enemy-bug.png';
        this.x = -101;
        this.y = randomY();
        this.speed = randomSpeed();
    }

    update(dt){
    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
        if(this.x > 400){
            this.restartEnemy();
        }

        this.x += (this.speed * dt);
    }

    // Draw the enemy on the screen, required method for game
    render(){
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    restartEnemy(){
        this.x = 0;
        this.speed = randomSpeed();
        this.y = randomY();
    }

};

//renascimento aleatorio para os inimigos
//função que randomiza em que linha os inimigos e bonus vão nascer
function randomY(){
    let randomRestartLocation = Math.floor(Math.random() * 3) + 1;
    let randomY;
    if(randomRestartLocation == 1){
        randomY = 60;
    }
    if(randomRestartLocation == 2){
        randomY = 140;
    }
    if(randomRestartLocation == 3){
        randomY = 220;
    }
    return randomY;
}

//função que randomiza em que linha os inimigos e bonus vão nascer
function randomX(){
    let randomRestartLocation = Math.floor(Math.random() * 5) + 1;
    let randomX;
    if(randomRestartLocation == 1){
        randomX = 0;
    }
    if(randomRestartLocation == 2){
        randomX = 100;
    }
    if(randomRestartLocation == 3){
        randomX = 200;
    }
    if(randomRestartLocation == 4){
        randomX = 300;
    }
    if(randomRestartLocation == 5){
        randomX = 400;
    }
    return randomX;
}

//velocidade aleatoria para os inimigos
//função que randomiza a velocidade dos inimigos
function randomSpeed(){
        let speed = Math.floor(Math.random() * 3) + 1;
        let randomSpeed;
        if(speed == 1){
            randomSpeed = 150;
        }
        if(speed == 2){
            randomSpeed = 300;
        }
        if(speed == 3){
            randomSpeed = 400;
        }
        return randomSpeed;
}


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
    constructor(){
        this.sprite = 'images/char-boy.png';
        this.x = 0;
        this.y = 0;
    }

    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    update(inimigos){ //inimigos = argumento passado com a função allEnemies, um array que contém todos os inimigos

        //Ganhou o jogo
        if(this.y <= 0){
            this.restart();
        }


        //função que verifica se o jogador bateu em algum dos inimigos, de acordo com a linha que estão.
       //loop para verificar numero de inimigos
       for(var i = 0; i < inimigos.length; i++){
       //primeira linha (abaixo)
            if((this.y == 234 && inimigos[i].y == 220) && (this.x > inimigos[i].x - 80 && this.x < inimigos[i].x + 80)){
                this.restart();
           }
       //segunda linha
           if((this.y == 151 && inimigos[i].y == 140) && (this.x > inimigos[i].x - 80 && this.x < inimigos[i].x + 80)){
                this.restart();
           }
           //terceira linha (mais ao topo)
           if((this.y == 68 && inimigos[i].y == 60) && (this.x > inimigos[i].x - 80 && this.x < inimigos[i].x + 80)){
                this.restart();
           }
       }// final for loop

    } //final update

    handleInput(allowedKeys){
        switch(allowedKeys){
            case 'left':
                if(this.x > 0){
                    this.x -= 100;
                }
                break;
            case 'right':
                if(this.x < 400){
                    this.x += 100;
                }
                break;
            case 'up':
                if(this.y > 0){
                    this.y -= 83;
                }
                break;
            case 'down':
                if(this.y < 380){
                    this.y += 83;
                }
                break;
        }
    }

    restart(){
        setTimeout(function (){
            this.x = 200;
            this.y = 400;
            key.reapear();
        }.bind(this), 300);
    }
}



class Bonus {
    constructor(){
        this.sprite = 'images/key.png';
        this.y = randomY();
        this.x = randomX();
    }
    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    update(playerOne){
        if((playerOne.y == 234 && this.y == 220) && (playerOne.x > this.x - 20 && playerOne.x < this.x + 20)){
                this.disapear();
           }
       //segunda linha
       if((playerOne.y == 151 && this.y == 140) && (playerOne.x > this.x - 20 && playerOne.x < this.x + 20)){
            this.disapear();
       }
       //terceira linha (mais ao topo)
       if((playerOne.y == 68 && this.y == 60) && (playerOne.x > this.x - 20 && playerOne.x < this.x + 20)){
            this.disapear();
       }
    }

    disapear(){
        this.x = -100;
    }

    reapear(){
        this.x = randomX();
        this.y = randomY();
    }
}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var enemy1 = new Enemy(),
    enemy2 = new Enemy(),
    enemy3 = new Enemy();
var allEnemies = [enemy1, enemy2, enemy3];

//Posicionando os inimigos

// Place the player object in a variable called player
//objeto player
var player = new Player();

//posicionando o player
player.y = 400;
player.x = 200;

//criando o bonus
var key = new Bonus();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        65: 'left',
        87: 'up',
        68: 'right',
        83: 'down'

    };

    player.handleInput(allowedKeys[e.keyCode]);
});
