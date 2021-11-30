class Counter{

    constructor(seconds){
        this.s = seconds;
    
        this.w = 6*seconds;
        this.h = 20;

        this.x = width/2 - this.w/2;
        this.y = 10;
    }

    //the parameter difficulty is how ofter the time is gonna pass
    //so lower is the parameter difficulty greater is the actual difficulty
    update(difficulty){

        if(this.s <= 0)
            noLoop();

        if(frameCount % difficulty == 0)
            this.s -= 1;
    }

    add(x = 1){
        if(this.s * (this.w/30) < this.w)
            this.s += x; 
    }

    display(){

        fill(50);
        rect(this.x, this.y, this.w, this.h);

        fill("#b5e48c");
        rect(this.x+5, this.y+3, this.s*(this.w/30) - 10, this.h-6);

    }

    
}