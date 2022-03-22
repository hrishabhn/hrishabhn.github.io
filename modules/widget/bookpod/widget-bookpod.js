function widgetMedia(data, type) {
    let card = document.createElement('a')
    card.classList = `widget-card layer-1 clickable media`

    if (type == 'book') {
        card.classList.add('book')
        card.style.setProperty('--thumb', `url(../../../media-image/books/${data.id}.${data.coverType})`)
    } else if (type == 'movie') {
        card.classList.add('movie')
        card.style.setProperty('--thumb', `url(../../../media-image/TV/background/${data.id}.${data.style.posterType})`)
    }

    let bg = bgElement()
    let blur = document.createElement('div')
    blur.classList = 'blur'


    card.append(bg)
    card.append(blur)

    if (type == 'movie') {
        let service = document.createElement('div')
        service.classList = 'service'
        card.append(service)
    }

    card.append(thumbElement())
    card.append(growElement())

    if (type == 'book') card.append(textboxBase(data.name, data.author))
    else if (type == 'movie') card.append(textboxBase(data.name, 'Genre1 • Genre2 • X Seasons'))

    if (type == 'movie') card.onclick = function () { data.detail() }

    return card

}