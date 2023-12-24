import style from "./assets/style.css"
import { ship } from "./scripts/ships";
import { gameBoard } from "./scripts/gameboard";
import { player } from "./scripts/player";

const playerGridElement = createGrid()
playerGridElement.id = 'playerGrid';

document.body.appendChild(playerGridElement)


const computerGridElement = createGrid()
computerGridElement.id = 'computerGrid';

document.body.appendChild(computerGridElement);

const verticalBtn = document.createElement('button');
verticalBtn.id = 'isVertical';
verticalBtn.textContent = "ROTATE";

document.body.append(verticalBtn);

function createGrid(){
    let gridAnchor = document.createElement('div');

    for(var i = 0; i < 100; i++){
        let gridCell = document.createElement('button')
        gridCell.classList.add('playButton');
        gridAnchor.appendChild(gridCell);
    }

    return gridAnchor;
}


const playerBoard = new gameBoard('#playerGrid');
const computerBoard = new gameBoard('#computerGrid');


const playerDestroyer = new ship(3);
const playerShip = new ship(4);

const boats = [playerShip, playerDestroyer]

let isVertical = false;
let placed = 0;


verticalBtn.addEventListener('click', ()=>{
    isVertical = isVertical==true?false:true;
    console.log("Vertical Change")
})

playerGridElement.addEventListener('click', (event)=>{
    const elementIndex = Array.from(event.target.parentNode.children).indexOf(event.target);
    let x = Math.floor(elementIndex/10);
    let y = elementIndex%10;
    if(placed == 0){
        playerBoard.placeBoat(x, y, playerShip.getLength(), isVertical) 
        placed++;
    }else if(placed == 1){
        playerBoard.placeBoat(x, y, playerDestroyer.getLength(), isVertical);
        placed++;
    }else{
        playerGridElement.removeEventListener('click', ()=>{return})
    }
})