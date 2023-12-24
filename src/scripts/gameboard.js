class gameBoard{
    constructor(id){
        this.board = new Array(10);

        for(var i = 0; i < 10; i++){
            this.board[i] = new Array(10);
        }

        for(var i = 0; i < 10; i++){
            for(var j = 0; j < 10; j++){
                this.board[i][j] = 0;
            }
        }
        this.id = id;
    }


    receiveAttack(xCoord, yCoord){
        this.board[xCoord][yCoord] += 1;

    }

    checkPlace(length, xCoord, yCoord, isVertical){
        if(xCoord + length > 10 && isVertical == false){
            return false
        }
        else if(yCoord + length > 10 && isVertical){
            return false
        }else if(isVertical){
            for(var i = yCoord; i + length < 10; i++)
            {
                if(this.board[xCoord][i] > 0){
                    return false;
                }
            }
        }else{
            for(var i = xCoord; i + length < 10; i++)
            {
                if(this.board[i][yCoord] > 0){
                    return false;
                }
            }
        }

        return true;
    }

    placeBoat(xCoord, yCoord, length, isVertical){
        if(this.checkPlace(length, xCoord, yCoord, isVertical)){
            if(isVertical){
                for(var i = yCoord; i < yCoord + length; i++){
                    this.board[xCoord][i] = 2;
                }
            }else{
                for(var i = xCoord; i < xCoord + length; i++)
                {
                    this.board[i][yCoord] = 2;
                }
            }
            this.renderBoard();
            console.log("Placed");
        }
        console.log("idk");
    }

    getBoard(){
        return this.board;
    }

    renderBoard(){
        let elements = document.querySelector(this.id);
        let nodeList = elements.children;
    
        for(var i = 0; i < 10; i++){
            for(var j = 0; j < 10; j++){
                if(this.board[i][j] == 1){
                    nodeList[i*10 + j].classList.add('one');
                }else if(this.board[i][j] == 2){
                    nodeList[i*10 + j].classList.add('two');
                }else if(this.board[i][j] == 3){
                    nodeList[i*10 + j].classList.add('three');
                }
            }
        }
    }

}


export {gameBoard};