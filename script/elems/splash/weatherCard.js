function weatherCard(data) {
    let card = document.createElement('div')
    card.id = 'weather-card'
    card.classList = 'card-item clickable-o layer-1 card-shadow'




    let title = titleElement('Madrid')
    title.classList.add('teal-fg')

    let temp = pElement('12°')
    temp.classList = 'temp'

    let status = pElement('Partly Cloudy')
    status.classList = 'status'

    let hilo = pElement('H:14° L:5°')
    hilo.classList = 'hilo'

    card.append(title)
    card.append(temp)
    card.append(growElement())
    card.append(iconElement(iconData['book']))
    card.append(status)
    card.append(hilo)

    return card
}