class player{

    // constructor{
    //     // this.ship1 =
    // }
    getXCoord(){
        return (Math.random() % 9)
    }

    getYCoord(){
        return Math.random() % 9
    }
}

export {player};