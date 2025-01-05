import "./styles.css"
import Player from "./player"
import { boardSize } from "./helpers"

const player = Player()
const computer = Player()

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
            }
            
            document.querySelector(".gameboard").appendChild(newTile)
        }
    }
}

function placeShips() {
    if (player.shipIndex() !== 5) {
        const tile = document.querySelectorAll(".tile")
        for (let i = 0; i < tile.length; i++) {
            tile[i].addEventListener("click", () => {
                player.placeShips(tile[i].getAttribute("data-y"),tile[i].getAttribute("data-x"),"x")
                clearBoard()
                renderBoard()
                placeShips()
            })
        }
    } else {
        Attack()
    }
}

function resetBoard() {
    player.resetBoard()
    clearBoard()
    renderBoard()
    placeShips()
}

function Attack() {
    const tile = document.querySelectorAll(".tile")
    for (let i = 0; i < tile.length; i++) {
        tile[i].addEventListener("click", () => {
            player.receiveAttack(tile[i].getAttribute("data-y"),tile[i].getAttribute("data-x"),"x")
            clearBoard()
            renderBoard()
            if (checkGameOver()) {
                alert("You Win")
                resetBoard()
            } else {
                Attack()
            }
            
        })
    }
}

function checkGameOver() {
    if (player.checkAllShips()) {
        return true
    } else {
        return false
    }
    
}

function clearBoard() {
    document.querySelector(".gameboard").innerHTML = ""
}

renderBoard()
placeShips()

