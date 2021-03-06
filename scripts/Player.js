class Player {

    constructor(){
        this.w = cellWidth / 2; 
        this.h = cellHeigth * 2;

        //1 = right
        //-1 = left
        this.direction = parseInt(random(0, 2)) ? 1 : -1;
    
        this.x = width/2 - this.w/2 + this.w*1.5 * this.direction;
        this.y = height - terrainHeigth - this.h;
    }

    display(){
        
        //Player
        stroke(30);
        fill("#ffba08");
        rect(this.x, this.y, this.w, this.h, 10);
    }

    updateDirection(direction){
        this.direction = direction;
        this.x = width/2 - this.w/2 + this.w*1.5 * this.direction;
    }

    update(direction){

        this.updateDirection(direction);

        //Second last and third last
        if (centralObject.cells[centralObject.cells.length-3].obstacle == this.direction
            || centralObject.cells[centralObject.cells.length-2].obstacle == this.direction){
            noLoop();
        }
        else{
            points++;
            counter.add(1);
        }
        
        centralObject.update();
    }

}
