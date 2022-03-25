function weatherCard(data) {
    let card = widgetItemElement('a')
    card.id = 'weather-card'
    card.classList.add('clickable-o')




    let title = elems.title('Madrid')
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
    card.append(elems.icon(iconData['book']))
    card.append(status)
    card.append(hilo)

    return card
}