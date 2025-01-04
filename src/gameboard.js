import createShip from "./create-ship"
import { boardSize,cellsPerRow,ships } from "./helpers"

function Gameboard() {

    // create board according to specs
    let board = Array(boardSize).fill(null).map(() => Array(cellsPerRow).fill(null));

    const getBoard = () => board

    const chosenTiles = []

    function receiveAttack(y,x) {
        // if chosen tile already exists, return false
        for (let i = 0; i < chosenTiles.length; i++) {
            if (chosenTiles[i].x === x && chosenTiles[i].y === y) {
                return false
            }
        }
        // if tile is empty, mark X
        if (board[y][x] === null) {
            board[y][x] = "X"
        } 
        // if tile is occupied by a ship,hit it
        else if (typeof board[y][x] === "object") {
            board[y][x].hit()
        }
    }

    let placedShips = []
    let shipsCreated = 0

    function shipSelection(y,x,dir) {
        placeShip(y,x,ships[shipsCreated],dir)
    }
    
    function checkOverflow(y, x, shipLength, dir) {
        if (dir === "x"){
            if ((x) + shipLength >= cellsPerRow) {
                return false
            }
        }

        if (dir === "y"){
            if ((y) + shipLength >= boardSize) {
                return false
            }
        }

        return true
    }
    
    function placeShip(y, x, shipLength, dir) {
        if (checkOverflow(y, x, shipLength, dir)) {
            const ship = createShip(shipLength)
            for (let i = 0; i < shipLength; i++) {
                if (dir === "x") {
                    board[y][x+i] = ship
                } else {
                    board[y+i][x] = ship
                }
            }
            shipsCreated += 1
            placedShips.push(ship)
            return true
        } else {
            return false
        }
    }
    
    function checkAllShips(placedShips) {
        let sunkShips = 0 

        for (let i = 0; i < placedShips.length; i++) {  
            if (placedShips[i].isSunk()) {
                sunkShips += 1
            }
        }

        if (sunkShips === placedShips.length) {
            return true
        }
    }

    return {
        getBoard,
        placeShip,
        shipSelection,
        receiveAttack,
        checkAllShips
    }
}

export default Gameboard
