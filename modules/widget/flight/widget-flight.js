function widgetFlight(flightKey) {
    const flight = flightKey ? flightData[flightKey] : Object.values(flightData)[0]

    let card = widgetCardBase('a')
    card.classList.add('flight', 'clickable-o')
    card.onclick = function () { flight.detail() }

    // top row
    let top = document.createElement('div')
    top.classList = 'top'

    let logo = iconElement(flight.airline.logo.icon)
    logo.classList.add('logo')
    let number = pElement(`${flight.airline.code} ${flight.number}`)
    number.classList = 'number'

    top.append(logo)
    top.append(growElement())
    top.append(number)


    let dest = document.createElement('div')
    dest.classList = `dest`

    let destIcon = iconElement(iconData['plane'])
    destIcon.classList.add(flight.airline.style)
    destIcon.classList.add('secondary-fg')

    let destText = pElement(flight.arr.city)
    destText.classList.add(`${flight.airline.style}-fg`)

    dest.append(destIcon)
    dest.append(spacerElement(5))
    dest.append(destText)
    dest.append(growElement())


    let count = document.createElement('div')
    count.classList = 'count'
    count.innerHTML = `${countdown.process.short(flight.date, 'short').num} ${countdown.process.short(flight.date).word}`

    let date = document.createElement('div')
    date.classList = 'date'
    date.innerHTML = `${processDate.day.short(flight.date)} ${new Date(flight.date).getDate()} ${processDate.month.short(flight.date)}, ${processTime.ampm(flight.date)}`

    card.append(top)
    card.append(growElement())
    card.append(spacerElement(20))
    card.append(dest)
    card.append(spacerElement(5))
    card.append(count)
    card.append(spacerElement(2))
    card.append(date)


    return card
}