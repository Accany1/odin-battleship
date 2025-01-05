import Gameboard from "./gameboard"
import { ships } from "./helpers"

function Player() {
    const gameboard = Gameboard()

    let currentShipIndex = 0
    
    function shipIndex() {
        return currentShipIndex
    }

    function placeShips(y,x,dir) {
        let result = gameboard.placeShip(y,x,ships[currentShipIndex],dir)

        if (result) {
            currentShipIndex += 1
        }
    }

    function receiveAttack(y,x) {
        gameboard.receiveAttack(y,x)
    }

    function getBoard() {
        return gameboard.getBoard()
    }

    function getTile(y,x) {
        return gameboard.getTile(y,x)
    }

    function checkAllShips() {
        return gameboard.checkAllShips()
    }

    function resetBoard() {
        currentShipIndex = 0
        gameboard.resetBoard()
    }

    return {
        placeShips,
        receiveAttack,
        getBoard,
        getTile,
        shipIndex,
        checkAllShips,
        resetBoard
    }
}

export default Player