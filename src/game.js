
import Player from "./player"
import { boardSize } from "./helpers"
import { ships } from "./helpers"

function Game() {
    const player = Player()
    const computer = Player()

    let rot = "x"

    function renderBoard() {
        for (let i = 0; i < boardSize; i++) {
            for (let j = 0; j < boardSize; j++) {
                let status = player.getTile(i,j)
                
                const newTile = document.createElement('div')
                newTile.classList.add("tile")
                newTile.setAttribute("data-y",i)
                newTile.setAttribute("data-x",j)
                
                if (status === "X") {
                    newTile.classList.add("miss")
                } else if (status === "O") {
                    newTile.classList.add("hit")
                } else if (status !== null && "getLength" in status) {
                    newTile.classList.add("ship")
                }
                
                document.querySelector(".gameboard-human").appendChild(newTile)
            }
        }
    }

    function renderComputerBoard() {
        for (let i = 0; i < boardSize; i++) {
            for (let j = 0; j < boardSize; j++) {
                let status = computer.getTile(i,j)
                
                const newTile = document.createElement('div')
                newTile.classList.add("computer-tile")
                newTile.setAttribute("data-y",i)
                newTile.setAttribute("data-x",j)
                
                if (status === "X") {
                    newTile.classList.add("miss")
                } else if (status === "O") {
                    newTile.classList.add("hit")
                }
                
                document.querySelector(".gameboard-computer").appendChild(newTile)
            }
        }
    }

    function placeShips() {
        if (player.shipIndex() !== 5) {
            const tile = document.querySelectorAll(".tile")
            renderShipModel()
            for (let i = 0; i < tile.length; i++) {
                tile[i].addEventListener("click", () => {
                    player.placeShips(tile[i].getAttribute("data-y"),tile[i].getAttribute("data-x"),rot)
                    clearBoard()
                    placeShips()
                })
            }
        } else {
            clearShipModel()
            renderStatus("Select tile to attack")
            Attack()
        }
    }

    function computerPlaceShips() {
        if (computer.shipIndex() !== 5) {
            const randY = Math.floor(Math.random() * boardSize)
            const randX = Math.floor(Math.random() * boardSize)
            let randRot
            if ((Math.floor(Math.random() *10) >5)) {
                randRot = "x" 
            } else {
                randRot = "y" 
            }
            computer.placeShips(randY,randX,randRot)
            clearBoard()

            computerPlaceShips()
        }
    }

    function renderShipModel() {
        const shipModel = document.querySelector(".ship-model")
        clearShipModel()
        const currentIndex = player.shipIndex()
        const shipSize = ships[currentIndex]
        if (rot === "x") {
            shipModel.style.flexDirection = "row"
        } else {
            shipModel.style.flexDirection = "column"
        }

        for (let i = 0; i < shipSize; i++) {
            const newShip = document.createElement("div")
            newShip.classList.add("tile")
            newShip.classList.add("ship")
            shipModel.appendChild(newShip)
        }
    }

    function clearShipModel() {
        const shipModel = document.querySelector(".ship-model")
        shipModel.innerHTML = ""
    }

    function renderStatus(status) {
        const currentStatus = document.querySelector(".current-status")
        currentStatus.textContent = status
    }

    function resetBoard() {
        player.resetBoard()
        computer.resetBoard()
        renderStatus("Please place a ship, press R to rotate")
        clearBoard()

        computerPlaceShips()
        placeShips()
    }

    function checkEnd() {
        if (checkGameOver()) {
            document.getElementsByClassName("restart-button")[0].hidden = false
            clearBoard()

            //removes event listeners
            let tile = document.querySelectorAll(".computer-tile")
            for (let i = 0; i < tile.length; i++) {
                tile[i].replaceWith(tile[i].cloneNode(true))
            }
        } else {
            computerAttack()
        }    
    }

    function computerAttack() {
        const randX = Math.floor(Math.random()*boardSize)
        const randY = Math.floor(Math.random()*boardSize)

        if (player.receiveAttack(randY,randX) === "Error") {
            computerAttack()
        }

        clearBoard()

        if (checkGameOver()) {
            document.getElementsByClassName("restart-button")[0].hidden = false
        } else {
            Attack()
        }    
    }


    function checkGameOver() {
        if (computer.checkAllShips()) {
            renderStatus("You Win")
            return true
        } else if (player.checkAllShips()) {
            renderStatus("Computer Win")
            return true
        } else {
            return false
        }
    }


    function clearBoard() {
        document.querySelector(".gameboard-human").innerHTML = ""
        document.querySelector(".gameboard-computer").innerHTML = ""
        renderBoard()
        renderComputerBoard()
    }

    function Attack() {
        const tile = document.querySelectorAll(".computer-tile")
        for (let i = 0; i < tile.length; i++) {
            tile[i].addEventListener("click", () => {
                const returnVal = computer.receiveAttack(Number(tile[i].getAttribute("data-y")),Number(tile[i].getAttribute("data-x")))
                if (returnVal === true) {
                    renderStatus("Hit!")
                    checkEnd()
                } else if (returnVal === "Error"){
                    renderStatus("Please choose a valid tile")
                } else {
                    renderStatus("Miss")
                    checkEnd()
                }
                
            })
        }
    }

    const handleKeyDown = (event) => {
        if (event.key === "r") {
            if (rot === "x") {
                rot = "y"
                renderShipModel()
            } else {
                rot = "x"
                renderShipModel()
            }
        }
    }

    window.addEventListener("keydown", handleKeyDown)

    document.getElementsByClassName("restart-button")[0].addEventListener("click", () => {
        resetBoard()
        document.getElementsByClassName("restart-button")[0].hidden = true
    })

    return {
        renderBoard,
        renderComputerBoard,
        computerPlaceShips,
        placeShips,
        Attack,
        resetBoard,
        handleKeyDown
    }
}

export default Game