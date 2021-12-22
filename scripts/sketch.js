const terrainHeigth = 50;

//How many points to get to the next difficulty
const difficultyGap = 50;

//How much the difficulty is gonna increase each time
//Has to be a divisor of difficultyGap (also .5 count)
const difficultyStep = difficultyGap/20;

let difficulty = 2;

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

    background("#90e0ef");
    drawTerrain(50);

    
    centralObject.display();
    player.display();

    counter.update(difficulty);
    counter.display();

    fill(255);
    textSize(20)
    text(points, 50, 50);

    updateDifficulty();
}

const drawTerrain = () => {

    stroke(50);
    fill("#faedcd");
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

function updateDifficulty(){

    if(points 
       && points % difficultyGap == 0  
       && difficulty-1 == (points/difficultyGap))
           difficulty++;
}

