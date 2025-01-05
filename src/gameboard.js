import createShip from "./create-ship"
import { boardSize,ships } from "./helpers"

function Gameboard() {

    // create board according to specs
    let board = Array(boardSize).fill(null).map(() => Array(boardSize).fill(null));

    const getBoard = () => board

    const getTile = (y,x) => board[y][x]

    let chosenTiles = []
    let placedShips = []
    let shipsCreated = 0

    function resetBoard() {
        board = Array(boardSize).fill(null).map(() => Array(boardSize).fill(null));
        chosenTiles = []
        placedShips = []
        shipsCreated = 0
    }

    function receiveAttack(y,x) {
        console.log(board[y][x] )
        // if chosen tile already exists, return false
        for (let i = 0; i < chosenTiles.length; i++) {
            if (chosenTiles[i].x === x && chosenTiles[i].y === y) {
                return false
            }
        }
        // if tile is empty, mark X
        if (board[y][x] === null) {
            board[y][x] = "X"
            chosenTiles.push({x,y})
        } 
        // if tile is occupied by a ship,hit it
        else if (typeof board[y][x] === "object") {
            board[y][x].hit()
            chosenTiles.push({x,y})
            board[y][x] = "O"
        }
    }

    function checkOverflow(y, x, shipLength, dir) {

        if (dir === "x"){
            if ((Number(x) + shipLength) > boardSize) {
                return false
            }
        }

        if (dir === "y"){
            if (Number(y) + shipLength > boardSize) {
                return false
            }
        }
        return true
    }

    function checkCollision(y,x,shipLength, dir) {
        if (dir === "x") {
            for (let i = 0; i < shipLength; i++) {
                if (board[Number(y)][Number(x)+i] !== null) {
                    return false
                }
            }
        }
        return true
    }
    
    function placeShip(y, x, shipLength, dir) {
        if (checkOverflow(Number(y), Number(x), shipLength, dir) && checkCollision(Number(y), Number(x), shipLength, dir)) {
            let ship = createShip(shipLength)
            for (let i = 0; i < shipLength; i++) {
                if (dir === "x") {
                    board[Number(y)][Number(x)+i] = ship
                } else {
                    board[Number(y)+i][Number(x)] = ship
                }
            }
            shipsCreated += 1
            placedShips.push(ship)
            console.log(board[Number(y)][Number(x)])
            return true
        } else {
            console.log("fail")
            return false
        }
    }
    
    function checkAllShips() {
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

    function getShips() {
        return placedShips
    }

    return {
        getBoard,
        placeShip,
        receiveAttack,
        checkAllShips,
        getTile,
        getShips,
        resetBoard
    }
}

export default Gameboard
