minheight = 20;
maxheight = 40;
minWidth = 25;
maxWidth = 35;
minGap = 200;
maxGap = 500;
gap = ranGap();
var myObstacles = [];
var audio = document.getElementById("audio");
var audio1 = document.getElementById("audio1");

function startGame() {
    gamearea.start();
}

function everyInterval(n) {
    return (gamearea.frame % n == 0) ? true : false;
}

function jump() {
    player.speedY = -2;
    audio.play();
}

function ranGap() {
    return Math.floor(minGap + Math.random() * (maxGap - minGap));
}
var scoreText = {
    x: 1100,
    y: 50,
    update: function(text) {
        gamearea.context.fillStyle = "gray";
        gamearea.context.font = "30px Consolas";
        gamearea.context.fillText(text, this.x, this.y);
    }
}
var player = {
    x: 20,
    y: 450,
    speedY: 0,
    update: function() {
        var img = document.getElementById("rooster");
        gamearea.context.drawImage(img, this.x, this.y, 40, 50);
    },

    newPos: function() {
        if (this.y < 320) {
            this.speedY = 2;
        }
        this.y += this.speedY;
        if (this.speedY == 2 && this.y == 450) {
            this.speedY = 0;
        }
    },

    crassWidth: function(obs) {
        return (this.x + 40 > obs.x && this.x < obs.x + obs.width && this.y + 50 > obs.y) ? true : false;
    }

}

function obstacle() {
    this.height = Math.floor(minheight + Math.random() * (maxheight - minheight));
    this.width = Math.floor(minWidth + Math.random() * (maxWidth - minWidth));
    this.x = 1350;
    this.y = gamearea.canvas.height - this.height;
    this.draw = function() {
        var img = document.getElementById("egg");
        gamearea.context.drawImage(img, this.x, this.y, this.width, this.height);
    }

}
var gamearea = {
    canvas: document.createElement("canvas"),
    start: function() {
        this.canvas.height = 500;
        this.canvas.width = 1350;
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.context = this.canvas.getContext("2d");
        this.frame = 0;
        this.score = 0;
        scoreText.update("Score: 0");
        this.interval = setInterval(this.updateGame, 5);
        window.addEventListener("keydown", jump);
    },

    updateGame: function() {
        for (i = 0; i < myObstacles.length; i++) {
            if (player.crassWidth(myObstacles[i])) {
                gamearea.stop();
                return;
            }
        }
        gamearea.clear();
        if (everyInterval(gap)) {
            myObstacles.push(new obstacle());
            gap = ranGap();
            gamearea.frame = 0;
        }
        for (i = 0; i < myObstacles.length; i++) {
            myObstacles[i].x -= 1;
            myObstacles[i].draw();
        }
        player.newPos();
        player.update();
        gamearea.frame += 1;
        gamearea.score += 0.01;
        scoreText.update("Score: " + Math.floor(gamearea.score));
    },

    clear: function() {
        gamearea.context.clearRect(0, 0, this.canvas.width, this.canvas.width);
    },

    stop: function() {
        clearInterval(this.interval);
        audio1.play();
        alert("Game Over ^^");
    }

}