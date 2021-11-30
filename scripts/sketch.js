const terrainHeigth = 50;

let difficulty = 20;

let player;
let centralObject;
let counter;

let points = 0;

function setup(){
    createCanvas(800, 600);
    
    centralObject = new CentralObject();
    centralObject.init();
    
    player = new Player();
    
    counter = new Counter(30);
}

function draw(){

    background("#272727");
    drawTerrain(50);

    
    centralObject.display();
    player.display();

    counter.update(difficulty);
    counter.display();

    fill(255);
    text(points, 50, 50);


    //Each 100Points it will get harder
    if(points && points % 50 == 0 && difficulty > 5){
        difficulty -= 2.5;
    }
}

const drawTerrain = () => {

    fill("#009FB7");
    rect(0, height-terrainHeigth, width, terrainHeigth);

}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        player.update(-1)
    } 
    else if (keyCode === RIGHT_ARROW) {
        player.update(1)
    }
  }