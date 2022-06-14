

function dashIfFalse(input) {
    if (input) {
        return input
    } else {
        return '--'
    }
}


function firstFlight() {
    for (const key in flightData) {
        let future = new Date(flightData[key].date) > new Date
        if (future) {
            return flightData[key]
        }
    }
}


function nodeElem() {
    let node = document.createElement('div')
    node.classList = 'node'
    node.innerHTML = '<div class="layer-1"></div>'
    return node
}