function createShip(shipLength) {
    const length = shipLength
    let hits = 0

    return {
        getLength: () => length,
        hit: () => {
            hits += 1
        },
        isSunk: () => hits.length === length,
        currentHits: () => hits
    }
}

export default createShip