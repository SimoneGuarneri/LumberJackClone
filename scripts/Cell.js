const cellHeigth = 50;
const cellWidth = 100;

class Cell {

    constructor(x, hasObstacle, number) {

        this.w = 100;
        this.h = cellHeigth;

        this.x = x;
        this.number = number;
        this.y = this.number * cellHeigth;
        
        //0 = noObstacle
        //1 = rightObstacle
        //-1 = leftObstacle
        this.obstacle = hasObstacle ? parseInt(random(-2, 2)) : 0;
    }

    update(){
        this.number++;
        this.y = this.number * cellHeigth;
    }

    display(){

        //Cell
        strokeWeight(5);
        stroke("#7f4f24");
        fill("#582f0e");
        rect(this.x, this.y, this.w, this.h, 5);
        
        //Obstacle
        if(this.obstacle != 0){
            stroke("#004b23");
            strokeWeight(5);
            fill("#008000");
        }
        rect( this.x + (this.w * this.obstacle), this.y, this.w, this.h, this.obstacle != 0 ? 20 : 5);
    }
}
