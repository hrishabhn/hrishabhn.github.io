function firstFlight() {
    for (const key in flightData) {
        let future = new Date(flightData[key].date) > new Date
        if (future) {
            return flightData[key]
        }
    }
}

function tripCard(key) {
    const trip = tripData[key]
    console.log(trip.color)

    let card = document.createElement('div')
    card.classList = 'trip-card layer-0 card-shadow'
    card.style.setProperty('--col', `#${trip.color}`)

    let header = document.createElement('div')
    header.classList = 'top-header'
    header.append(elems.p(trip.name))
    card.append(header)

    for (const event of trip.events) {
        card.append(tripCardEvent(event))
    }

    card.append(elems.grow())

    return card
}

function tripCardEvent(data, type) {
    let card = document.createElement('div')
    card.classList = 'trip-event layer-1 clickable-b'
    card.style.setProperty('--accent', `#${data.airline.accent}`)


    let row1 = document.createElement('div')
    row1.classList = 'row'

    let icon = elems.icon(iconData['plane'])

    let header = document.createElement('div')
    header.classList = 'header'

    let logo = document.createElement('div')
    logo.classList = 'logo'
    logo.innerHTML = data.airline.logo.icon

    header.append(logo)
    header.append(elems.spacer(8))
    header.append(elems.p(`${data.airline.code} ${data.number}`))

    row1.append(icon)
    row1.append(header)

    // row 2
    let dep = document.createElement('div')
    dep.classList = 'deparr row'

    let node = nodeElem()
    dep.append(node)

    card.append(row1)
    card.append(dep)

    return card
}

function nodeElem() {
    let node = document.createElement('div')
    node.classList = 'node'
    node.innerHTML = '<div class="layer-1"></div>'
    return node
}