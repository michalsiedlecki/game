var context = document.getElementById('canvas').getContext("2d");
var bomber = {};

function Luigi(x, y) {
    var img = new Image();
    this.x = x;
    this.y = y;
    this.height = 150
    this.width = 110
    this.goUp = false;
    this.goDown = false;
    this.goLeft = false
    this.goRight = false
  
    this.drawLuigi     = function() {
        context.drawImage(img, this.x , this.y , 150, 110);
    }

    img.src = "luigi.png";
}

bomber.luigi = new Luigi(100, 100);

function keyDownHandler(e) {
    if (e.keyCode == 87) { bomber.luigi.goUp = true;} else
    if (e.keyCode == 83) { bomber.luigi.goDown = true;} else
    if (e.keyCode == 65) { bomber.luigi.goLeft = true;} else
    if (e.keyCode == 68) { bomber.luigi.goRight = true;}
}

function keyUpHandler(e) {
    if (e.keyCode == 87) { bomber.luigi.goUp = false;} else
    if (e.keyCode == 83) { bomber.luigi.goDown = false;} else
    if (e.keyCode == 65) { bomber.luigi.goLeft = false;} else
    if (e.keyCode == 68) { bomber.luigi.goRight = false;}
} 

document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

function DrawAll(){
    bomber.luigi.drawLuigi();
}
function graPrzeksztalc() {

    if (bomber.luigi.goUp && bomber.luigi.y > 0) {
        bomber.luigi.y -= 1;
    }

    if (bomber.luigi.goDown && bomber.luigi.y + bomber.luigi.width < canvas.height) {
        bomber.luigi.y += 1;
    }
    
    if (bomber.luigi.goLeft && bomber.luigi.x > 0) {
        bomber.luigi.x -= 1;
    }

    if (bomber.luigi.goRight && bomber.luigi.x + bomber.luigi.height < canvas.width) {
        bomber.luigi.x += 1;
    }

}
function graj(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    DrawAll();
    graPrzeksztalc();
    requestAnimationFrame(graj)
}

graj();