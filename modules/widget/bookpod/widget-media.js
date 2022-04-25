function widgetMedia(data, type) {
    let card = document.createElement('a')
    card.classList = `widget-card layer-1 clickable media`
    // crd = cardHover(card, accent, style)
    // console.log(data, type)

    if (type == 'book') {
        card.classList.add('book')
        card.style.setProperty('--thumb', `url(../../../media-image/books/${data.id}.${data.coverType})`)
    } else if (type == 'movie') {
        card.classList.add('movie')
        card.style.setProperty('--thumb', `url(../../../media-image/TV/background/${data.id}.${data.style.poster.wide.type})`)
        card = cardHover(card, data.style.color, null)
    }

    let bg = elems.bg()
    let blur = document.createElement('div')
    blur.classList = 'blur'


    card.append(bg)
    card.append(blur)

    if (type == 'movie') {
        let service = document.createElement('div')
        service.classList = 'service'
        service.style.setProperty('background-image', `url(./media-image/service/${data.info.serviceImg})`)
        card.append(service)
    }

    card.append(elems.thumb(null))
    card.append(elems.grow())

    if (type == 'book') card.append(elems.textbox(data.name, data.author))
    else if (type == 'movie') card.append(elems.textbox(data.name, data.desc.full))

    if (type == 'movie') card.onclick = function () { data.detail() }

    return card

}