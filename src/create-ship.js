function createShip(shipLength) {
    const length = shipLength
    const hits = []

    return {
        getLength: () => length,
        hit: (position) => {
            hits.push(position)
        },
        isSunk: () => hits.length === length
    }
}

export default createShip