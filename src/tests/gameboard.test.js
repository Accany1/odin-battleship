import Gameboard from "../gameboard"

describe('gameboard tests', () => {
    const gameboard = Gameboard()

    test('filled board', () => {
        expect(gameboard.getBoard()).toStrictEqual([
            [null,null,null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null,null,null]])
    })

    test('missed attack', () => {
        gameboard.receiveAttack(9,9)
        expect(gameboard.getBoard()[9][9]).toBe("X")
    })

    test('ship creation', () => {
        gameboard.placeShip(0,0,5,"x")
        gameboard.placeShip(1,0,4,"x")
        gameboard.placeShip(2,0, 3,"x")
        gameboard.placeShip(3,0, 3,"y")
        
        expect(gameboard.getBoard()[0][4].getLength()).toBe(5)
        expect(gameboard.getBoard()[1][0].getLength()).toBe(4)
        expect(gameboard.getBoard()[2][0].getLength()).toBe(3)
        expect(gameboard.getBoard()[5][0].getLength()).toBe(3)
    })

    test('ship placement failure', () => {  
        expect(gameboard.placeShip(0,9,5,"x")).toBe(false)
    })

    test('receive attack', () => {
        gameboard.placeShip(0,0,5,"x")
        gameboard.receiveAttack(0,0)
        expect(gameboard.getBoard()[0][0].currentHits()).toBe(1)
    })
})