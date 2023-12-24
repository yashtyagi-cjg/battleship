
class ship{
    constructor(length){
        this.length = length;
        this.isSunk = false;
        this.hit = 0;
        this.x = 0;
        this.y = 0;
        this.isVertical = false;
    }

    isSunk(){
        return this.isSunk;
    }

    hit(xCoord, yCoord){
        if(xCoord == this.x && (yCoord < this.y + this.length && yCoord >= this.y) && this.isVertical == false){
            this.hit += 1;
            // if(this.hit == this.length){
            //     this.isSunk = true;
            // }
            // return true;
        }else if(yCoord == this.y && (xCoord < this.x + this.length && xCoord >= this.x)){
            this.hit += 1;
            // if(this.hit == this.length){
            //     this.isSunk = true;
            // }
            // return true;
        }

        return false;
    }

}