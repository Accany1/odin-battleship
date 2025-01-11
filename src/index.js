import "./styles.css"
import Game from "./game"

const game = Game()

game.renderBoard()
game.renderComputerBoard()
game.computerPlaceShips()
game.placeShips()
game.Attack()